const WORKER_URL = "Phttps://applicationsmanager.top143266.workers.dev/";

let selectedApplication = null;

const usernameInput = document.getElementById("username");
const applicationArea = document.getElementById("applicationArea");
const applicationForm = document.getElementById("applicationForm");
const applicationBadge = document.getElementById("applicationBadge");
const applicationTitle = document.getElementById("applicationTitle");
const applicationCount = document.getElementById("applicationCount");
const errorMessage = document.getElementById("errorMessage");
const submitButton = document.getElementById("submitButton");

document.querySelectorAll(".application-card").forEach(button => {
    button.addEventListener("click", () => {
        openApplication(button.dataset.application);
    });
});

function openApplication(type) {
    const username = usernameInput.value.trim();

    if (!username) {
        showError("Please enter your Discord username first.");
        usernameInput.focus();
        return;
    }

    const application = window.APPLICATIONS?.[type];

    if (!application) {
        showError("This application could not be found.");
        return;
    }

    selectedApplication = type;

    const questions = Object.entries(application.questions || {});

    if (questions.length > 150) {
        showError("This application cannot have more than 150 questions.");
        return;
    }

    clearError();

    applicationBadge.textContent = application.badge || type.toUpperCase();
    applicationTitle.textContent = application.title || "Application";
    applicationCount.textContent = `${questions.length} questions`;

    applicationForm.innerHTML = "";

    questions.forEach(([number, rawQuestion]) => {
        /*
            Supports BOTH formats:

            ["1"]: "What is your experience?"

            AND

            ["1"]: {
                question: "What is your experience?",
                example: "Example: I have..."
            }
        */

        let questionText = "";
        let exampleText = "";

        if (typeof rawQuestion === "string") {
            questionText = rawQuestion;
            exampleText = "Write a clear and detailed answer.";
        } else if (rawQuestion && typeof rawQuestion === "object") {
            questionText =
                rawQuestion.question ||
                rawQuestion.text ||
                rawQuestion.title ||
                "";

            exampleText =
                rawQuestion.example ||
                rawQuestion.exampleAnswer ||
                "Write a clear and detailed answer.";
        }

        if (!questionText) {
            questionText = "Question unavailable.";
        }

        const question = document.createElement("div");
        question.className = "question";

        question.innerHTML = `
            <div class="question-number">
                QUESTION ${escapeHTML(number)}
            </div>

            <div class="question-text">
                ${escapeHTML(questionText)}
            </div>

            <div class="example-answer">
                Example: ${escapeHTML(exampleText)}
            </div>

            <textarea
                class="answer"
                data-question="${escapeHTML(number)}"
                maxlength="4000"
                required
                placeholder="Your answer..."
            ></textarea>
        `;

        applicationForm.appendChild(question);
    });

    applicationArea.classList.remove("hidden");

    applicationArea.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

applicationForm.addEventListener("submit", async event => {
    event.preventDefault();

    clearError();

    if (!selectedApplication) {
        showError("Please select an application.");
        return;
    }

    const username = usernameInput.value.trim();

    if (!username) {
        showError("Please enter your Discord username.");
        return;
    }

    if (WORKER_URL.includes("PASTE_YOUR")) {
        showError("You haven't added your Cloudflare Worker URL yet.");
        return;
    }

    const answers = {};

    document.querySelectorAll(".answer").forEach(input => {
        answers[input.dataset.question] = input.value.trim();
    });

    for (const answer of Object.values(answers)) {
        if (!answer) {
            showError("Please answer every question.");
            return;
        }
    }

    submitButton.disabled = true;
    submitButton.textContent = "Submitting...";

    try {
        const response = await fetch(WORKER_URL, {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                username,
                applicationType: selectedApplication,
                answers
            })
        });

        const result = await response.json().catch(() => ({}));

        if (!response.ok) {
            throw new Error(
                result.error || "Failed to submit application."
            );
        }

        document.getElementById("applicationID").textContent =
            result.applicationId || "Unknown";

        document
            .getElementById("successArea")
            .classList.remove("hidden");

        document
            .getElementById("successArea")
            .scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

    } catch (error) {
        showError(error.message);
    }

    submitButton.disabled = false;
    submitButton.textContent = "Submit Application";
});

function showError(message) {
    errorMessage.textContent = message;
}

function clearError() {
    errorMessage.textContent = "";
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    })[char]);
}

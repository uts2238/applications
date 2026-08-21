const WORKER_URL =
    "https://applicationsmanager.top143266.workers.dev/";


let selectedApplication = null;


/* =================================
   ELEMENTS
================================= */

const usernameInput =
    document.getElementById("username");

const ageInput =
    document.getElementById("age");

const applicationArea =
    document.getElementById("applicationArea");

const applicationForm =
    document.getElementById("applicationForm");

const questionsContainer =
    document.getElementById("questionsContainer");

const applicationBadge =
    document.getElementById("applicationBadge");

const applicationTitle =
    document.getElementById("applicationTitle");

const applicationCount =
    document.getElementById("applicationCount");

const errorMessage =
    document.getElementById("errorMessage");

const submitButton =
    document.getElementById("submitButton");

const successArea =
    document.getElementById("successArea");

const applicationID =
    document.getElementById("applicationID");


/* =================================
   APPLICATION BUTTONS
================================= */

document
    .querySelectorAll(".application-card")
    .forEach(card => {

        card.addEventListener(
            "click",
            () => {

                openApplication(
                    card.dataset.application
                );

            }
        );

    });


/* =================================
   APPLICANT VALIDATION
================================= */

function validateApplicant() {

    const username =
        usernameInput.value.trim();

    const ageText =
        ageInput.value.trim();


    if (!username) {

        showError(
            "Enter your Discord username first."
        );

        usernameInput.focus();

        return false;
    }


    if (!ageText) {

        showError(
            "Enter your age first."
        );

        ageInput.focus();

        return false;
    }


    const age =
        Number(ageText);


    if (
        !Number.isInteger(age) ||
        age < 1 ||
        age > 99
    ) {

        showError(
            "Enter a valid age."
        );

        ageInput.focus();

        return false;
    }


    if (age < 13) {

        showError(
            "You must be at least 13 years old to apply."
        );

        return false;
    }


    return true;
}


/* =================================
   OPEN APPLICATION
================================= */

function openApplication(type) {

    clearError();


    if (!validateApplicant()) {
        return;
    }


    const application =
        window.APPLICATIONS?.[type];


    if (!application) {

        showError(
            "This application could not be found."
        );

        return;
    }


    const questions =
        Object.entries(
            application.questions || {}
        );


    if (!questions.length) {

        showError(
            "This application has no questions."
        );

        return;
    }


    if (questions.length > 150) {

        showError(
            "This application has too many questions."
        );

        return;
    }


    selectedApplication =
        type;


    applicationBadge.textContent =
        application.badge ||
        type.toUpperCase();


    applicationTitle.textContent =
        application.title ||
        "Application";


    applicationCount.textContent =
        `${questions.length} questions`;


    questionsContainer.innerHTML =
        "";


    questions.forEach(
        ([number, data]) => {

            createQuestion(
                number,
                data
            );

        }
    );


    applicationArea.classList.remove(
        "hidden"
    );


    successArea.classList.add(
        "hidden"
    );


    setTimeout(
        () => {

            applicationArea.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        },
        50
    );
}


/* =================================
   CREATE QUESTION
================================= */

function createQuestion(
    number,
    data
) {

    const question =
        document.createElement("div");


    question.className =
        "question";


    question.dataset.question =
        number;


    const type =
        data?.type || "text";


    const required =
        data?.required !== false;


    let content = "";


    /* TEXT */

    if (type === "text") {

        content = `

            <textarea
                class="answer"
                data-question="${escapeHTML(number)}"
                data-type="text"
                maxlength="4000"
                placeholder="Write your answer..."
                ${required ? "required" : ""}
            ></textarea>

        `;
    }


    /* MULTIPLE CHOICE */

    else if (type === "multiple") {

        const choices =
            Array.isArray(data?.choices)
                ? data.choices
                : [];


        content = `

            <div
                class="choices"
                data-question="${escapeHTML(number)}"
            >

                ${choices
                    .map(
                        choice => `

                            <label class="choice">

                                <input
                                    type="radio"
                                    name="question_${escapeHTML(number)}"
                                    value="${escapeHTML(choice)}"
                                    data-type="multiple"
                                >

                                <span>
                                    ${escapeHTML(choice)}
                                </span>

                            </label>

                        `
                    )
                    .join("")}

            </div>

        `;
    }


    /* FILE */

    else if (type === "file") {

        const accept =
            Array.isArray(data?.accept)
                ? data.accept.join(",")
                : "";


        content = `

            <div class="file-upload">

                <input
                    class="file-input"
                    type="file"
                    data-question="${escapeHTML(number)}"
                    ${required ? "required" : ""}
                    ${accept
                        ? `accept="${escapeHTML(accept)}"`
                        : ""}
                    multiple
                >

                <div class="file-help">
                    Maximum 5 MB per file · Maximum 10 files total
                </div>

                <div class="selected-files"></div>

            </div>

        `;
    }


    /* FALLBACK */

    else {

        content = `

            <textarea
                class="answer"
                data-question="${escapeHTML(number)}"
                data-type="text"
                maxlength="4000"
                required
                placeholder="Write your answer..."
            ></textarea>

        `;
    }


    question.innerHTML = `

        <div class="question-number">
            Question ${escapeHTML(number)}
        </div>

        <div class="question-text">
            ${escapeHTML(
                data?.question ||
                "Question unavailable."
            )}
        </div>

        ${
            data?.example
                ? `
                    <div class="example-answer">
                        ${escapeHTML(data.example)}
                    </div>
                `
                : ""
        }

        ${content}

    `;


    questionsContainer.appendChild(
        question
    );


    const fileInput =
        question.querySelector(
            ".file-input"
        );


    if (fileInput) {

        fileInput.addEventListener(
            "change",
            () => {

                validateFiles(
                    fileInput
                );

            }
        );

    }
}


/* =================================
   FILE VALIDATION
================================= */

function validateFiles(input) {

    const files =
        Array.from(
            input.files
        );


    const maxSize =
        5 * 1024 * 1024;


    if (files.length > 10) {

        input.value = "";

        showError(
            "You can upload a maximum of 10 files."
        );

        return false;
    }


    for (const file of files) {

        if (file.size > maxSize) {

            input.value = "";

            showError(
                `"${file.name}" is larger than 5 MB.`
            );

            return false;
        }

    }


    clearError();


    const container =
        input.parentElement?.querySelector(
            ".selected-files"
        );


    if (container) {

        container.innerHTML =
            files
                .map(
                    file => `
                        <div>
                            ${escapeHTML(file.name)}
                            — ${formatSize(file.size)}
                        </div>
                    `
                )
                .join("");
    }


    return true;
}


/* =================================
   SUBMIT
================================= */

submitButton.addEventListener(
    "click",
    submitApplication
);


async function submitApplication() {

    clearError();


    if (!selectedApplication) {

        showError(
            "Choose an application first."
        );

        return;
    }


    if (!validateApplicant()) {
        return;
    }


    const application =
        window.APPLICATIONS?.[
            selectedApplication
        ];


    if (!application) {

        showError(
            "Application data could not be found."
        );

        return;
    }


    const answers = {};


    /* TEXT */

    document
        .querySelectorAll(
            'textarea[data-type="text"]'
        )
        .forEach(input => {

            answers[
                input.dataset.question
            ] =
                input.value.trim();

        });


    /* MULTIPLE CHOICE */

    document
        .querySelectorAll(
            ".choices[data-question]"
        )
        .forEach(group => {

            const number =
                group.dataset.question;


            const selected =
                group.querySelector(
                    'input[type="radio"]:checked'
                );


            answers[number] =
                selected
                    ? selected.value
                    : "";

        });


    /* REQUIRED QUESTIONS */

    const questionBlocks =
        document.querySelectorAll(
            ".question"
        );


    for (
        const block
        of questionBlocks
    ) {

        const number =
            block.dataset.question;


        const data =
            application.questions?.[
                number
            ];


        if (
            !data ||
            data.required === false
        ) {
            continue;
        }


        if (
            data.type ===
            "text"
        ) {

            const textarea =
                block.querySelector(
                    "textarea"
                );


            if (
                !textarea ||
                !textarea.value.trim()
            ) {

                showError(
                    "Please answer every required question."
                );

                textarea?.focus();

                return;
            }
        }


        else if (
            data.type ===
            "multiple"
        ) {

            const selected =
                block.querySelector(
                    'input[type="radio"]:checked'
                );


            if (!selected) {

                showError(
                    "Please answer every required question."
                );

                return;
            }
        }


        else if (
            data.type ===
            "file"
        ) {

            const input =
                block.querySelector(
                    ".file-input"
                );


            if (
                !input ||
                input.files.length === 0
            ) {

                showError(
                    "Please upload all required files."
                );

                return;
            }
        }
    }


    /* FILE COUNT */

    const fileInputs =
        document.querySelectorAll(
            ".file-input"
        );


    let totalFiles = 0;


    for (
        const input
        of fileInputs
    ) {

        const files =
            Array.from(
                input.files
            );


        totalFiles +=
            files.length;


        for (
            const file
            of files
        ) {

            if (
                file.size >
                5 * 1024 * 1024
            ) {

                showError(
                    `"${file.name}" is larger than 5 MB.`
                );

                return;
            }
        }
    }


    if (
        totalFiles >
        10
    ) {

        showError(
            "You can upload a maximum of 10 files per application."
        );

        return;
    }


    /* FORM DATA */

    const formData =
        new FormData();


    formData.append(
        "username",
        usernameInput.value.trim()
    );


    formData.append(
        "age",
        String(
            Number(
                ageInput.value
            )
        )
    );


    formData.append(
        "applicationType",
        selectedApplication
    );


    formData.append(
        "answers",
        JSON.stringify(
            answers
        )
    );


    /* FILES */

    for (
        const input
        of fileInputs
    ) {

        const questionNumber =
            input.dataset.question;


        for (
            const file
            of input.files
        ) {

            formData.append(
                `file_${questionNumber}`,
                file,
                file.name
            );

        }
    }


    /* BUTTON */

    submitButton.disabled =
        true;

    submitButton.textContent =
        "Submitting...";


    try {

        const response =
            await fetch(
                WORKER_URL,
                {
                    method:
                        "POST",

                    body:
                        formData
                }
            );


        const result =
            await response
                .json()
                .catch(
                    () => ({})
                );


        if (
            !response.ok
        ) {

            throw new Error(
                result.error ||
                "Failed to submit application."
            );
        }


        applicationID.textContent =
            result.applicationId ||
            "Unknown";


        applicationArea.classList.add(
            "hidden"
        );


        successArea.classList.remove(
            "hidden"
        );


        successArea.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }


    catch (error) {

        showError(
            error.message ||
            "Something went wrong."
        );

    }


    finally {

        submitButton.disabled =
            false;

        submitButton.textContent =
            "Submit Application";

    }
}


/* =================================
   HELPERS
================================= */

function formatSize(bytes) {

    if (
        bytes <
        1024 * 1024
    ) {

        return (
            (bytes / 1024)
                .toFixed(1) +
            " KB"
        );
    }


    return (
        (bytes /
            (1024 * 1024))
            .toFixed(2) +
        " MB"
    );
}


function showError(message) {

    errorMessage.textContent =
        message;
}


function clearError() {

    errorMessage.textContent =
        "";
}


function escapeHTML(value) {

    return String(value)
        .replace(
            /[&<>"']/g,
            character => ({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#039;"
            })[character]
        );
}

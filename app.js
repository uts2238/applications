/*
    PUT YOUR CLOUDFLARE WORKER URL HERE.

    Example:

    const WORKER_URL =
        "https://my-application-worker.example.workers.dev";
*/

const WORKER_URL =
    "https://applicationsmanager.top143266.workers.dev/";


let selectedApplication = null;


const usernameInput =
    document.getElementById("username");

const applicationArea =
    document.getElementById("applicationArea");

const applicationForm =
    document.getElementById("applicationForm");

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


/*
    APPLICATION BUTTONS
*/

document
    .querySelectorAll(".application-card")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const type =
                    button.dataset.application;

                openApplication(type);

            }
        );

    });


/*
    OPEN APPLICATION
*/

function openApplication(type) {

    const username =
        usernameInput.value.trim();


    if (!username) {

        showError(
            "Enter your Discord username first."
        );

        usernameInput.focus();

        /*
            Still show the application area
            so the user understands what happened.
        */

        applicationArea.classList.remove(
            "hidden"
        );

        applicationBadge.textContent =
            "NOTICE";

        applicationTitle.textContent =
            "Enter your Discord username";

        applicationCount.textContent = "";

        applicationForm.innerHTML = "";

        return;
    }


    const application =
        window.APPLICATIONS[type];


    if (!application) {

        showError(
            "This application does not exist."
        );

        return;
    }


    const questions =
        Object.entries(
            application.questions
        );


    /*
        Maximum 150 questions
    */

    if (questions.length > 150) {

        showError(
            "This application has more than 150 questions."
        );

        return;
    }


    selectedApplication =
        type;


    clearError();


    applicationBadge.textContent =
        application.badge;


    applicationTitle.textContent =
        application.title;


    applicationCount.textContent =
        `${questions.length} question${
            questions.length === 1
                ? ""
                : "s"
        }`;


    /*
        CLEAR OLD QUESTIONS
    */

    applicationForm.innerHTML = "";


    /*
        CREATE QUESTIONS
    */

    questions.forEach(
        ([number, data]) => {

            const question =
                document.createElement(
                    "div"
                );


            question.className =
                "question";


            question.innerHTML = `

                <div class="question-number">
                    QUESTION ${escapeHTML(number)}
                </div>

                <label>
                    ${escapeHTML(
                        data.question
                    )}
                </label>

                <div class="example-answer">

                    <strong>
                        Example answer:
                    </strong>

                    ${escapeHTML(
                        data.example
                    )}

                </div>

                <textarea
                    class="answer"
                    data-question="${escapeHTML(number)}"
                    maxlength="4000"
                    required
                    placeholder="Write your answer here..."
                ></textarea>

            `;


            applicationForm.appendChild(
                question
            );

        }
    );


    /*
        SHOW FORM UNDER BUTTONS
    */

    applicationArea.classList.remove(
        "hidden"
    );


    /*
        Hide previous success message
    */

    document
        .getElementById("successArea")
        .classList.add("hidden");


    /*
        Scroll to questions
    */

    setTimeout(() => {

        applicationArea.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 50);

}


/*
    SUBMIT APPLICATION
*/

applicationForm.addEventListener(
    "submit",
    async event => {

        event.preventDefault();


        clearError();


        if (!selectedApplication) {

            showError(
                "Choose an application first."
            );

            return;
        }


        const username =
            usernameInput.value.trim();


        if (!username) {

            showError(
                "Enter your Discord username."
            );

            usernameInput.focus();

            return;
        }


        if (
            WORKER_URL.includes(
                "PASTE_YOUR_WORKER"
            )
        ) {

            showError(
                "Your Cloudflare Worker URL has not been added to app.js."
            );

            return;
        }


        /*
            COLLECT ANSWERS
        */

        const answers = {};


        document
            .querySelectorAll(".answer")
            .forEach(input => {

                answers[
                    input.dataset.question
                ] =
                    input.value.trim();

            });


        /*
            MAKE SURE EVERYTHING IS ANSWERED
        */

        for (
            const answer
            of Object.values(answers)
        ) {

            if (!answer) {

                showError(
                    "Please answer every question."
                );

                return;
            }

        }


        /*
            DISABLE BUTTON
        */

        submitButton.disabled =
            true;

        submitButton.textContent =
            "Submitting...";


        try {

            const response =
                await fetch(
                    WORKER_URL,
                    {

                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json"
                        },

                        body:
                            JSON.stringify({

                                username:
                                    username,

                                applicationType:
                                    selectedApplication,

                                answers:
                                    answers

                            })

                    }
                );


            const result =
                await response
                    .json()
                    .catch(
                        () => ({})
                    );


            if (!response.ok) {

                throw new Error(
                    result.error ||
                    "The application could not be submitted."
                );

            }


            /*
                SUCCESS
            */

            document
                .getElementById(
                    "applicationID"
                )
                .textContent =
                    result.applicationId ||
                    "Unknown";


            document
                .getElementById(
                    "successArea"
                )
                .classList.remove(
                    "hidden"
                );


            document
                .getElementById(
                    "successArea"
                )
                .scrollIntoView({
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
);


/*
    ERROR HELPERS
*/

function showError(message) {

    errorMessage.textContent =
        message;

}


function clearError() {

    errorMessage.textContent =
        "";

}


/*
    HTML ESCAPING
*/

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

            }[character])
        );

}

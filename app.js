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


document
    .querySelectorAll(".application-card")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                openApplication(
                    button.dataset.application
                );

            }
        );

    });


function openApplication(type) {

    const username =
        usernameInput.value.trim();


    if (!username) {

        showError(
            "Enter your Discord username first."
        );

        usernameInput.focus();

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


    if (questions.length > 150) {

        showError(
            "This application cannot have more than 150 questions."
        );

        return;
    }


    selectedApplication =
        type;


    clearError();


    applicationBadge.textContent =
        application.badge ||
        type.toUpperCase();


    applicationTitle.textContent =
        application.title ||
        "Application";


    applicationCount.textContent =
        `${questions.length} questions`;


    applicationForm.innerHTML =
        "";


    questions.forEach(
        ([number, data]) => {

            const question =
                document.createElement(
                    "div"
                );


            question.className =
                "question";


            const type =
                data?.type || "text";


            const required =
                data?.required !== false;


            let content = "";


            /*
                TEXT QUESTION
            */

            if (type === "text") {

                content = `

                    <textarea
                        class="answer"
                        data-question="${escapeHTML(number)}"
                        data-type="text"
                        maxlength="4000"
                        ${required ? "required" : ""}
                        placeholder="Your answer..."
                    ></textarea>

                `;

            }


            /*
                MULTIPLE CHOICE
            */

            else if (
                type === "multiple"
            ) {

                const choices =
                    Array.isArray(
                        data.choices
                    )
                        ? data.choices
                        : [];


                content = `

                    <div class="choices">

                        ${choices
                            .map(
                                (choice, index) => `

                                <label class="choice">

                                    <input
                                        type="radio"
                                        name="question_${escapeHTML(number)}"
                                        value="${escapeHTML(choice)}"
                                        data-question="${escapeHTML(number)}"
                                        data-type="multiple"
                                        ${required && index === 0 ? "data-required='true'" : ""}
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


            /*
                FILE UPLOAD
            */

            else if (
                type === "file"
            ) {

                const accept =
                    Array.isArray(
                        data.accept
                    )
                        ? data.accept.join(",")
                        : "";


                content = `

                    <div class="file-upload">

                        <input
                            class="file-input"
                            type="file"
                            data-question="${escapeHTML(number)}"
                            data-type="file"
                            ${required ? "required" : ""}
                            ${accept ? `accept="${escapeHTML(accept)}"` : ""}
                            multiple
                        >

                        <div class="file-help">
                            Maximum 5 MB per file.
                            Maximum 10 files total.
                        </div>

                        <div class="selected-files"></div>

                    </div>

                `;

            }


            /*
                UNKNOWN TYPE
            */

            else {

                content = `

                    <textarea
                        class="answer"
                        data-question="${escapeHTML(number)}"
                        data-type="text"
                        maxlength="4000"
                        required
                        placeholder="Your answer..."
                    ></textarea>

                `;

            }


            question.innerHTML = `

                <div class="question-number">
                    QUESTION ${escapeHTML(number)}
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
                                Example: ${escapeHTML(data.example)}
                            </div>
                        `
                        : ""
                }

                ${content}

            `;


            applicationForm.appendChild(
                question
            );


            /*
                FILE PREVIEW / VALIDATION
            */

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
    );


    applicationArea.classList.remove(
        "hidden"
    );


    document
        .getElementById("successArea")
        .classList.add("hidden");


    setTimeout(() => {

        applicationArea.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 50);

}


function validateFiles(
    input
) {

    const files =
        Array.from(
            input.files
        );


    const maxSize =
        5 * 1024 * 1024;


    /*
        Maximum 10 files
    */

    if (files.length > 10) {

        input.value = "";

        showError(
            "You can upload a maximum of 10 files."
        );

        return false;
    }


    /*
        Maximum 5 MB EACH
    */

    for (
        const file
        of files
    ) {

        if (
            file.size >
            maxSize
        ) {

            input.value = "";

            showError(
                `"${file.name}" is larger than 5 MB.`
            );

            return false;
        }

    }


    clearError();


    const container =
        input.parentElement
            .querySelector(
                ".selected-files"
            );


    if (container) {

        container.innerHTML =
            files.length
                ? files
                    .map(
                        file =>
                            `<div>${escapeHTML(file.name)} — ${formatSize(file.size)}</div>`
                    )
                    .join("")
                : "";

    }


    return true;

}


function formatSize(
    bytes
) {

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


/*
    SUBMIT
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

            return;
        }


        if (
            WORKER_URL.includes(
                "PASTE_YOUR"
            )
        ) {

            showError(
                "Add your Cloudflare Worker URL to app.js first."
            );

            return;
        }


        /*
            ANSWERS
        */

        const answers = {};


        /*
            TEXT
        */

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


        /*
            MULTIPLE CHOICE
        */

        const multipleQuestions =
            new Set();


        document
            .querySelectorAll(
                'input[data-type="multiple"]'
            )
            .forEach(input => {

                multipleQuestions.add(
                    input.dataset.question
                );

            });


        for (
            const number
            of multipleQuestions
        ) {

            const selected =
                document.querySelector(
                    `input[data-type="multiple"][data-question="${CSS.escape(number)}"]:checked`
                );


            answers[number] =
                selected
                    ? selected.value
                    : "";

        }


        /*
            FILES
        */

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


            if (
                files.length >
                10
            ) {

                showError(
                    "You can upload a maximum of 10 files."
                );

                return;
            }


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


        /*
            CHECK REQUIRED QUESTIONS
        */

        const questionBlocks =
            document.querySelectorAll(
                ".question"
            );


        for (
            const block
            of questionBlocks
        ) {

            const input =
                block.querySelector(
                    ".answer, .file-input"
                );


            const required =
                input?.required ||
                block.querySelector(
                    'input[data-required="true"]'
                );


            if (!required)
                continue;


            if (
                input?.type ===
                "file"
            ) {

                if (
                    input.files.length === 0
                ) {

                    showError(
                        "Please upload all required files."
                    );

                    return;
                }

            }

            else if (
                input?.type ===
                "textarea"
            ) {

                if (
                    !input.value.trim()
                ) {

                    showError(
                        "Please answer every required question."
                    );

                    return;
                }

            }

            else {

                const checked =
                    block.querySelector(
                        'input[type="radio"]:checked'
                    );


                if (!checked) {

                    showError(
                        "Please answer every required question."
                    );

                    return;
                }

            }

        }


        /*
            BUILD MULTIPART REQUEST
        */

        const formData =
            new FormData();


        formData.append(
            "username",
            username
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


        /*
            ADD FILES
        */

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
        catch (
            error
        ) {

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


function showError(
    message
) {

    errorMessage.textContent =
        message;

}


function clearError() {

    errorMessage.textContent =
        "";

}


function escapeHTML(
    value
) {

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

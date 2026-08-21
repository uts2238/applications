const WORKER_URL =
    "https://applicationsmanager.top143266.workers.dev/";


let selectedApplication = null;


/*
    ELEMENTS
*/

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

        button.addEventListener("click", () => {

            openApplication(
                button.dataset.application
            );

        });

    });


/*
    OPEN APPLICATION
*/

function openApplication(type) {

    clearError();


    const username =
        usernameInput.value.trim();


    if (!username) {

        showError(
            "Enter your Roblox username first."
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

        console.error(
            "Application not found:",
            type
        );

        return;
    }


    const questions =
        Object.entries(
            application.questions || {}
        );


    /*
        DEBUG

        This lets you immediately see
        how many questions were loaded.
    */

    console.log(
        `${application.title}: ${questions.length} questions loaded`
    );


    if (questions.length === 0) {

        showError(
            "This application has no questions."
        );

        return;
    }


    if (questions.length > 150) {

        showError(
            "This application cannot have more than 150 questions."
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
                document.createElement("div");


            question.className =
                "question";


            const questionType =
                data?.type || "text";


            const required =
                data?.required !== false;


            let content = "";


            /*
                TEXT
            */

            if (
                questionType === "text"
            ) {

                content = `

                    <textarea
                        class="answer"
                        data-question="${escapeHTML(number)}"
                        data-type="text"
                        maxlength="4000"
                        placeholder="Write your answer here..."
                        ${required ? "required" : ""}
                    ></textarea>

                `;

            }


            /*
                MULTIPLE CHOICE
            */

            else if (
                questionType === "multiple"
            ) {

                const choices =
                    Array.isArray(data?.choices)
                        ? data.choices
                        : [];


                content = `

                    <div
                        class="choices"
                        data-question="${escapeHTML(number)}"
                        data-required="${required}"
                    >

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
                FILE
            */

            else if (
                questionType === "file"
            ) {

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
                            data-type="file"
                            ${required ? "required" : ""}
                            ${accept
                                ? `accept="${escapeHTML(accept)}"`
                                : ""}
                            multiple
                        >

                        <div class="file-help">
                            Maximum 5 MB per file · Maximum 10 files
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
                        placeholder="Write your answer here..."
                    ></textarea>

                `;

            }


            /*
                QUESTION HTML
            */

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


            applicationForm.appendChild(
                question
            );


            /*
                FILE HANDLER
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


    /*
        SHOW APPLICATION
    */

    applicationArea.classList.remove(
        "hidden"
    );


    const successArea =
        document.getElementById(
            "successArea"
        );


    if (successArea) {

        successArea.classList.add(
            "hidden"
        );

    }


    /*
        SCROLL
    */

    setTimeout(() => {

        applicationArea.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 50);

}


/*
    FILE VALIDATION
*/

function validateFiles(input) {

    const files =
        Array.from(input.files);


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
        input.parentElement
            ?.querySelector(
                ".selected-files"
            );


    if (container) {

        container.innerHTML =
            files.length

                ? files
                    .map(
                        file => `
                            <div>
                                ${escapeHTML(file.name)}
                                — ${formatSize(file.size)}
                            </div>
                        `
                    )
                    .join("")

                : "";

    }


    return true;

}


/*
    FILE SIZE
*/

function formatSize(bytes) {

    if (bytes < 1024 * 1024) {

        return (
            (bytes / 1024)
                .toFixed(1) +
            " KB"
        );

    }


    return (
        (bytes / (1024 * 1024))
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
                "Enter your Roblox username."
            );

            usernameInput.focus();

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
            GET CURRENT APPLICATION
        */

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


        /*
            ANSWERS
        */

        const answers = {};


        /*
            TEXT ANSWERS
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

        document
            .querySelectorAll(
                '.choices[data-question]'
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


        if (totalFiles > 10) {

            showError(
                "You can upload a maximum of 10 files per application."
            );

            return;
        }


        /*
            REQUIRED QUESTIONS
        */

        const questionBlocks =
            document.querySelectorAll(
                ".question"
            );


        for (
            const block
            of questionBlocks
        ) {

            const number =
                block.querySelector(
                    ".question-number"
                )?.textContent
                    ?.replace(
                        "Question ",
                        ""
                    )
                    ?.trim();


            const questionData =
                application.questions?.[
                    number
                ];


            if (
                !questionData ||
                questionData.required === false
            ) {

                continue;
            }


            /*
                TEXT
            */

            if (
                questionData.type === "text"
            ) {

                const input =
                    block.querySelector(
                        "textarea"
                    );


                if (
                    !input ||
                    !input.value.trim()
                ) {

                    showError(
                        "Please answer every required question."
                    );

                    input?.focus();

                    return;
                }

            }


            /*
                MULTIPLE
            */

            else if (
                questionData.type === "multiple"
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


            /*
                FILE
            */

            else if (
                questionData.type === "file"
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


        /*
            FORM DATA
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


        /*
            SUBMITTING
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
                        body: formData
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
                    "Failed to submit application."
                );

            }


            const applicationID =
                document.getElementById(
                    "applicationID"
                );


            if (applicationID) {

                applicationID.textContent =
                    result.applicationId ||
                    "Unknown";

            }


            const successArea =
                document.getElementById(
                    "successArea"
                );


            if (successArea) {

                successArea.classList.remove(
                    "hidden"
                );


                successArea.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }

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
    ERROR
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
    HTML ESCAPE
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

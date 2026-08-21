const WORKER_URL =
    "https://applicationsmanager.top143266.workers.dev/";


let selectedApplication = null;
let isSubmitting = false;


/*
    ELEMENTS
*/

const usernameInput =
    document.getElementById("username");

const ageInput =
    document.getElementById("age");

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

const successArea =
    document.getElementById("successArea");

const applicationID =
    document.getElementById("applicationID");


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
    USERNAME / AGE INPUT
*/

if (usernameInput) {

    usernameInput.addEventListener(
        "input",
        () => {

            clearError();

        }
    );

}


if (ageInput) {

    ageInput.addEventListener(
        "input",
        () => {

            clearError();

            /*
                Keep age numeric
            */

            ageInput.value =
                ageInput.value.replace(
                    /\D/g,
                    ""
                );

        }
    );

}


/*
    OPEN APPLICATION
*/

function openApplication(type) {

    clearError();


    /*
        USERNAME
    */

    const username =
        usernameInput
            ? usernameInput.value.trim()
            : "";


    if (!username) {

        showError(
            "Enter your Discord username first."
        );

        usernameInput?.focus();

        return;

    }


    /*
        AGE
    */

    const age =
        getAge();


    if (age === null) {

        showError(
            "Enter your age first."
        );

        ageInput?.focus();

        return;

    }


    /*
        UNDER 13
    */

    if (age < 13) {

        rejectUnder13();

        return;

    }


    /*
        FIND APPLICATION
    */

    const application =
        window.APPLICATIONS?.[type];


    if (!application) {

        showError(
            "This application could not be found."
        );

        return;

    }


    /*
        QUESTIONS
    */

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


    if (
        questions.length > 150
    ) {

        showError(
            "This application cannot have more than 150 questions."
        );

        return;

    }


    selectedApplication =
        type;


    /*
        HEADER
    */

    applicationBadge.textContent =
        application.badge ||
        type.toUpperCase();


    applicationTitle.textContent =
        application.title ||
        "Application";


    applicationCount.textContent =
        `${questions.length} questions`;


    /*
        RESET FORM
    */

    applicationForm.innerHTML =
        "";


    /*
        CREATE QUESTIONS
    */

    questions.forEach(
        ([number, data]) => {

            createQuestion(
                number,
                data
            );

        }
    );


    /*
        SHOW
    */

    applicationArea.classList.remove(
        "hidden"
    );


    successArea?.classList.add(
        "hidden"
    );


    /*
        SCROLL
    */

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


/*
    CREATE QUESTION
*/

function createQuestion(
    number,
    data
) {

    const question =
        document.createElement(
            "div"
        );


    question.className =
        "question";


    question.dataset.question =
        number;


    const type =
        data?.type ||
        "text";


    const required =
        data?.required !== false;


    let content = "";


    /*
        TEXT
    */

    if (
        type === "text"
    ) {

        content = `

            <textarea
                class="answer"
                data-question="${escapeHTML(number)}"
                data-type="text"
                maxlength="4000"
                ${required ? "required" : ""}
                placeholder="Type your answer..."
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
                data?.choices
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
                                    ${required && index === 0
                                        ? 'data-required="true"'
                                        : ""}
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
        type === "file"
    ) {

        const accept =
            Array.isArray(
                data?.accept
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
        FALLBACK
    */

    else {

        content = `

            <textarea
                class="answer"
                data-question="${escapeHTML(number)}"
                data-type="text"
                maxlength="4000"
                required
                placeholder="Type your answer..."
            ></textarea>

        `;

    }


    /*
        QUESTION HTML
    */

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
                        ${escapeHTML(
                            data.example
                        )}
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


    /*
        RADIO HANDLER
    */

    question
        .querySelectorAll(
            'input[type="radio"]'
        )
        .forEach(
            radio => {

                radio.addEventListener(
                    "change",
                    () => {

                        clearError();

                    }
                );

            }
        );

}


/*
    AGE
*/

function getAge() {

    if (!ageInput) {
        return null;
    }


    const value =
        ageInput.value.trim();


    if (!value) {
        return null;
    }


    const age =
        Number(value);


    if (
        !Number.isInteger(age)
    ) {

        return null;

    }


    if (
        age < 1 ||
        age > 120
    ) {

        return null;

    }


    return age;

}


/*
    UNDER 13
*/

function rejectUnder13() {

    selectedApplication =
        null;


    applicationArea?.classList.add(
        "hidden"
    );


    successArea?.classList.add(
        "hidden"
    );


    showError(
        "You must be at least 13 years old to submit an application."
    );

}


/*
    FILE VALIDATION
*/

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
        FILE COUNT
    */

    if (
        files.length > 10
    ) {

        input.value =
            "";

        updateSelectedFiles(
            input
        );

        showError(
            "You can upload a maximum of 10 files."
        );

        return false;

    }


    /*
        FILE SIZE
    */

    for (
        const file
        of files
    ) {

        if (
            file.size > maxSize
        ) {

            input.value =
                "";

            updateSelectedFiles(
                input
            );

            showError(
                `"${file.name}" is larger than 5 MB.`
            );

            return false;

        }

    }


    updateSelectedFiles(
        input
    );


    clearError();


    return true;

}


/*
    FILE DISPLAY
*/

function updateSelectedFiles(
    input
) {

    const container =
        input.parentElement
            ?.querySelector(
                ".selected-files"
            );


    if (!container) {
        return;
    }


    const files =
        Array.from(
            input.files
        );


    if (!files.length) {

        container.innerHTML =
            "";

        return;

    }


    container.innerHTML =
        files
            .map(
                file => `

                    <div class="selected-file">

                        <span>
                            ${escapeHTML(
                                file.name
                            )}
                        </span>

                        <span>
                            ${formatSize(
                                file.size
                            )}
                        </span>

                    </div>

                `
            )
            .join("");

}


/*
    FILE SIZE
*/

function formatSize(
    bytes
) {

    if (
        bytes < 1024
    ) {

        return `${bytes} B`;

    }


    if (
        bytes < 1024 * 1024
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


        if (isSubmitting) {
            return;
        }


        clearError();


        /*
            APPLICATION
        */

        if (!selectedApplication) {

            showError(
                "Choose an application first."
            );

            return;

        }


        /*
            USERNAME
        */

        const username =
            usernameInput
                ?.value
                .trim() ||
            "";


        if (!username) {

            showError(
                "Enter your Discord username."
            );

            usernameInput?.focus();

            return;

        }


        /*
            AGE
        */

        const age =
            getAge();


        if (age === null) {

            showError(
                "Enter a valid age."
            );

            ageInput?.focus();

            return;

        }


        /*
            AGE CHECK
        */

        if (
            age < 13
        ) {

            rejectUnder13();

            return;

        }


        /*
            WORKER URL
        */

        if (
            !WORKER_URL ||
            WORKER_URL.includes(
                "PASTE_YOUR"
            )
        ) {

            showError(
                "The application system has not been configured yet."
            );

            return;

        }


        /*
            REQUIRED QUESTIONS
        */

        if (
            !validateRequiredQuestions()
        ) {

            return;

        }


        /*
            TOTAL FILES
        */

        const fileInputs =
            document.querySelectorAll(
                ".file-input"
            );


        let totalFiles =
            0;


        for (
            const input
            of fileInputs
        ) {

            totalFiles +=
                input.files.length;

        }


        if (
            totalFiles > 10
        ) {

            showError(
                "You can upload a maximum of 10 files per application."
            );

            return;

        }


        /*
            ANSWERS
        */

        const answers =
            collectAnswers();


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
            "age",
            String(age)
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
            FILES
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
            SUBMIT STATE
        */

        isSubmitting =
            true;


        if (submitButton) {

            submitButton.disabled =
                true;

            submitButton.textContent =
                "Submitting...";

        }


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


            let result = {};


            try {

                result =
                    await response.json();

            }
            catch {

                result =
                    {};

            }


            /*
                UNDER 13
            */

            if (
                response.status === 403 &&
                result.rejected
            ) {

                rejectUnder13();

                showError(
                    result.reason ||
                    "Your application was rejected."
                );

                return;

            }


            /*
                OTHER ERRORS
            */

            if (
                !response.ok
            ) {

                throw new Error(
                    result.error ||
                    "Failed to submit application."
                );

            }


            /*
                SUCCESS
            */

            if (applicationID) {

                applicationID.textContent =
                    result.applicationId ||
                    "Unknown";

            }


            successArea?.classList.remove(
                "hidden"
            );


            applicationArea?.classList.add(
                "hidden"
            );


            successArea?.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });


        }
        catch (error) {

            showError(
                error?.message ||
                "Something went wrong while submitting your application."
            );

        }
        finally {

            isSubmitting =
                false;


            if (submitButton) {

                submitButton.disabled =
                    false;

                submitButton.textContent =
                    "Submit Application";

            }

        }

    }
);


/*
    COLLECT ANSWERS
*/

function collectAnswers() {

    const answers =
        {};


    /*
        TEXT
    */

    applicationForm
        .querySelectorAll(
            'textarea[data-type="text"]'
        )
        .forEach(
            input => {

                answers[
                    input.dataset.question
                ] =
                    input.value.trim();

            }
        );


    /*
        MULTIPLE CHOICE
    */

    applicationForm
        .querySelectorAll(
            'input[data-type="multiple"]'
        )
        .forEach(
            input => {

                const number =
                    input.dataset.question;


                if (
                    Object.prototype.hasOwnProperty.call(
                        answers,
                        number
                    )
                ) {

                    return;

                }


                const selected =
                    applicationForm.querySelector(
                        `input[data-type="multiple"][data-question="${CSS.escape(number)}"]:checked`
                    );


                answers[number] =
                    selected
                        ? selected.value
                        : "";

            }
        );


    return answers;

}


/*
    REQUIRED QUESTIONS
*/

function validateRequiredQuestions() {

    const blocks =
        applicationForm.querySelectorAll(
            ".question"
        );


    for (
        const block
        of blocks
    ) {

        /*
            TEXT
        */

        const textarea =
            block.querySelector(
                "textarea.answer"
            );


        if (textarea) {

            if (
                textarea.required &&
                !textarea.value.trim()
            ) {

                showError(
                    "Please answer every required question."
                );


                textarea.focus();


                return false;

            }


            continue;

        }


        /*
            FILE
        */

        const fileInput =
            block.querySelector(
                ".file-input"
            );


        if (fileInput) {

            if (
                fileInput.required &&
                fileInput.files.length === 0
            ) {

                showError(
                    "Please upload all required files."
                );


                fileInput.focus();


                return false;

            }


            continue;

        }


        /*
            MULTIPLE CHOICE
        */

        const radio =
            block.querySelector(
                'input[type="radio"]'
            );


        if (radio) {

            const required =
                block.querySelector(
                    'input[data-required="true"]'
                );


            if (
                required &&
                !block.querySelector(
                    'input[type="radio"]:checked'
                )
            ) {

                showError(
                    "Please answer every required question."
                );


                radio.focus();


                return false;

            }

        }

    }


    return true;

}


/*
    ERROR
*/

function showError(
    message
) {

    if (!errorMessage) {
        return;
    }


    errorMessage.textContent =
        message;


    errorMessage.classList.add(
        "visible"
    );

}


/*
    CLEAR ERROR
*/

function clearError() {

    if (!errorMessage) {
        return;
    }


    errorMessage.textContent =
        "";


    errorMessage.classList.remove(
        "visible"
    );

}


/*
    HTML ESCAPE
*/

function escapeHTML(
    value
) {

    return String(value)
        .replace(
            /[&<>"']/g,
            character => ({

                "&":
                    "&amp;",

                "<":
                    "&lt;",

                ">":
                    "&gt;",

                '"':
                    "&quot;",

                "'":
                    "&#039;"

            }[character])
        );

}

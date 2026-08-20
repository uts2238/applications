window.APPLICATIONS = {

    dev: {

        title: "Developer Application",

        badge: "DEV",

        questions: {

            ["1"]: {
                type: "text",
                required: true,

                question:
                    "What programming languages do you know?",

                example:
                    "Example: Luau, Python and JavaScript."
            },


            ["2"]: {
                type: "multiple",
                required: true,

                question:
                    "How experienced are you?",

                choices: [
                    "Beginner",
                    "Intermediate",
                    "Experienced",
                    "Professional"
                ]
            },


            ["3"]: {
                type: "text",
                required: true,

                question:
                    "What have you worked on before?",

                example:
                    "Example: I've made UI systems, gameplay systems and Roblox games."
            },


            ["4"]: {
                type: "file",
                required: false,

                question:
                    "Upload examples of your work.",

                example:
                    "Screenshots, videos, projects or other examples.",

                accept: [
                    "image/*",
                    "video/*",
                    ".zip",
                    ".rar",
                    ".txt"
                ]
            }

        }

    },


    mod: {

        title: "Moderator Application",

        badge: "MOD",

        questions: {

            ["1"]: {
                type: "text",
                required: true,

                question:
                    "What will you do if a member says the n word?",

                example:
                    "Example: I would follow the server rules and take the appropriate moderation action."
            },


            ["2"]: {
                type: "multiple",
                required: true,

                question:
                    "How active are you?",

                choices: [
                    "Less than 1 hour a day",
                    "1-3 hours a day",
                    "3-6 hours a day",
                    "6+ hours a day"
                ]
            },


            ["3"]: {
                type: "text",
                required: true,

                question:
                    "Why do you want to become a moderator?",

                example:
                    "Example: I want to help keep the community enjoyable and deal with problems fairly."
            },


            ["4"]: {
                type: "file",
                required: false,

                question:
                    "Upload any relevant moderation examples.",

                example:
                    "Optional screenshots or other relevant files.",

                accept: [
                    "image/*",
                    ".png",
                    ".jpg",
                    ".jpeg"
                ]
            }

        }

    },


    valueList: {

        title: "Value List Application",

        badge: "VALUE LIST",

        questions: {

            ["1"]: {
                type: "multiple",
                required: true,

                question:
                    "How familiar are you with trading?",

                choices: [
                    "Not very familiar",
                    "Somewhat familiar",
                    "Very familiar",
                    "Expert"
                ]
            },


            ["2"]: {
                type: "text",
                required: true,

                question:
                    "How would you determine the value of an item?",

                example:
                    "Example: I'd look at demand, rarity, recent trades and the current market."
            },


            ["3"]: {
                type: "text",
                required: true,

                question:
                    "What would you do if you disagreed with another valuer?",

                example:
                    "Example: I'd discuss the evidence with them and try to reach a fair conclusion."
            },


            ["4"]: {
                type: "file",
                required: false,

                question:
                    "Upload any value lists or work you've made.",

                example:
                    "Optional screenshots or other relevant files.",

                accept: [
                    "image/*",
                    ".png",
                    ".jpg",
                    ".jpeg",
                    ".pdf"
                ]
            }

        }

    }

};

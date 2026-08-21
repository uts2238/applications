window.APPLICATIONS = {

    partner: {

        title: "Partner Application",
        badge: "CC",

        questions: {

            1: {
                type: "text",
                required: true,
                question: "What is your Discord server called?",
                example: "Example: My Community"
            },

            2: {
                type: "text",
                required: true,
                question: "What is the invite link to your server?",
                example: "Example: discord.gg/example"
            },

            3: {
                type: "text",
                required: true,
                question: "What is your server about?",
                example: "Tell us what your community is focused on."
            },

            4: {
                type: "multiple",
                required: true,
                question: "How many members does your server have?",
                choices: [
                    "Under 100",
                    "100-500",
                    "500-1,000",
                    "1,000+"
                ]
            },

            5: {
                type: "text",
                required: true,
                question: "Why do you want to partner with us?"
            },

            6: {
                type: "text",
                required: true,
                question: "What can you offer our community?"
            },

            7: {
                type: "text",
                required: true,
                question: "What can we offer your community?"
            },

            8: {
                type: "text",
                required: true,
                question: "How active is your server?"
            },

            9: {
                type: "multiple",
                required: true,
                question: "Does your server have active moderation?",
                choices: [
                    "Yes",
                    "No"
                ]
            },

            10: {
                type: "text",
                required: true,
                question: "Who owns the server?"
            },

            11: {
                type: "text",
                required: true,
                question: "How long has the server existed?"
            },

            12: {
                type: "text",
                required: true,
                question: "What makes your server different?"
            },

            13: {
                type: "multiple",
                required: true,
                question: "Does your server contain NSFW content?",
                choices: [
                    "No",
                    "Yes"
                ]
            },

            14: {
                type: "text",
                required: true,
                question: "How did you find our community?"
            },

            15: {
                type: "text",
                required: true,
                question: "Have you partnered with other servers before?"
            },

            16: {
                type: "text",
                required: true,
                question: "What would you expect from this partnership?"
            },

            17: {
                type: "text",
                required: true,
                question: "How would you advertise the partnership?"
            },

            18: {
                type: "text",
                required: true,
                question: "Is there anything else we should know?"
            },

            19: {
                type: "file",
                required: false,
                question: "Upload any screenshots or other relevant information.",
                accept: [
                    "image/*",
                    ".png",
                    ".jpg",
                    ".jpeg"
                ]
            },

            20: {
                type: "text",
                required: true,
                question: "Do you agree to follow our partnership requirements?"
            }

        }
    },


    dev: {

        title: "Developer Application",
        badge: "DEV",

        questions: {

            1: {
                type: "text",
                required: true,
                question: "What kind of things do you enjoy building?",
                example: "Tell us about the type of systems, games or projects you like making."
            },

            2: {
                type: "multiple",
                required: true,
                question: "How experienced are you with Luau?",
                choices: [
                    "Beginner",
                    "Intermediate",
                    "Experienced",
                    "Professional"
                ]
            },

            3: {
                type: "text",
                required: true,
                question: "How long have you been using Luau?"
            },

            4: {
                type: "text",
                required: true,
                question: "What have you built before?"
            },

            5: {
                type: "text",
                required: true,
                question: "What is your strongest area of development?"
            },

            6: {
                type: "text",
                required: true,
                question: "What is something difficult you have programmed?"
            },

            7: {
                type: "text",
                required: true,
                question: "How do you usually debug something that is not working?"
            },

            8: {
                type: "multiple",
                required: true,
                question: "How comfortable are you working with other developers?",
                choices: [
                    "Not very comfortable",
                    "Somewhat comfortable",
                    "Very comfortable",
                    "Extremely comfortable"
                ]
            },

            9: {
                type: "text",
                required: true,
                question: "How would you handle a disagreement with another developer?"
            },

            10: {
                type: "text",
                required: true,
                question: "What do you think makes code maintainable?"
            },

            11: {
                type: "text",
                required: true,
                question: "Have you worked with Roblox RemoteEvents and RemoteFunctions?"
            },

            12: {
                type: "text",
                required: true,
                question: "Have you worked with DataStores or profile systems?"
            },

            13: {
                type: "text",
                required: true,
                question: "How would you prevent a simple client-side exploit?"
            },

            14: {
                type: "text",
                required: true,
                question: "How active can you be?"
            },

            15: {
                type: "text",
                required: true,
                question: "What would you do if you introduced a bug into a live game?"
            },

            16: {
                type: "text",
                required: true,
                question: "Why do you want to join the development team?"
            },

            17: {
                type: "text",
                required: true,
                question: "What would you like to work on?"
            },

            18: {
                type: "text",
                required: true,
                question: "Do you have experience using Git or other version control?"
            },

            19: {
                type: "file",
                required: false,
                question: "Upload examples of your work.",
                accept: [
                    "image/*",
                    "video/*",
                    ".zip",
                    ".rar",
                    ".txt"
                ]
            },

            20: {
                type: "text",
                required: true,
                question: "Why should we choose you?"
            }

        }
    },


    mod: {

        title: "Moderator Application",
        badge: "MOD",

        questions: {

            1: {
                type: "text",
                required: true,
                question: "What would you do if a member breaks a rule?"
            },

            2: {
                type: "multiple",
                required: true,
                question: "How active are you?",
                choices: [
                    "Less than 1 hour a day",
                    "1-3 hours a day",
                    "3-6 hours a day",
                    "6+ hours a day"
                ]
            },

            3: {
                type: "text",
                required: true,
                question: "Why do you want to become a moderator?"
            },

            4: {
                type: "text",
                required: true,
                question: "What would you do if someone repeatedly broke the rules?"
            },

            5: {
                type: "text",
                required: true,
                question: "How would you handle an argument between two members?"
            },

            6: {
                type: "text",
                required: true,
                question: "What would you do if a friend broke a rule?"
            },

            7: {
                type: "text",
                required: true,
                question: "What does being a good moderator mean to you?"
            },

            8: {
                type: "multiple",
                required: true,
                question: "How comfortable are you enforcing rules?",
                choices: [
                    "Not comfortable",
                    "Somewhat comfortable",
                    "Comfortable",
                    "Very comfortable"
                ]
            },

            9: {
                type: "text",
                required: true,
                question: "What would you do if someone used a slur?"
            },

            10: {
                type: "text",
                required: true,
                question: "What would you do if someone was advertising another server?"
            },

            11: {
                type: "text",
                required: true,
                question: "How would you respond to someone insulting you?"
            },

            12: {
                type: "text",
                required: true,
                question: "What would you do if another moderator abused their permissions?"
            },

            13: {
                type: "text",
                required: true,
                question: "How would you deal with false reports?"
            },

            14: {
                type: "text",
                required: true,
                question: "How familiar are you with Discord moderation?"
            },

            15: {
                type: "text",
                required: true,
                question: "What moderation tools have you used?"
            },

            16: {
                type: "text",
                required: true,
                question: "How would you handle a situation you were unsure about?"
            },

            17: {
                type: "text",
                required: true,
                question: "How active are you on Discord?"
            },

            18: {
                type: "text",
                required: true,
                question: "What are some qualities a moderator should have?"
            },

            19: {
                type: "file",
                required: false,
                question: "Upload any relevant moderation examples.",
                accept: [
                    "image/*",
                    ".png",
                    ".jpg",
                    ".jpeg"
                ]
            },

            20: {
                type: "text",
                required: true,
                question: "Why should we choose you?"
            }

        }
    },


    valueList: {

        title: "Value List Application",
        badge: "VAL",

        questions: {

            1: {
                type: "multiple",
                required: true,
                question: "How familiar are you with trading?",
                choices: [
                    "Not very familiar",
                    "Somewhat familiar",
                    "Very familiar",
                    "Expert"
                ]
            },

            2: {
                type: "text",
                required: true,
                question: "How would you determine the value of an item?"
            },

            3: {
                type: "text",
                required: true,
                question: "What factors affect an item's value?"
            },

            4: {
                type: "text",
                required: true,
                question: "How important is demand when determining value?"
            },

            5: {
                type: "text",
                required: true,
                question: "How would you handle an item with very few trades?"
            },

            6: {
                type: "text",
                required: true,
                question: "How would you determine whether a trade is fair?"
            },

            7: {
                type: "text",
                required: true,
                question: "What sources would you use when researching values?"
            },

            8: {
                type: "text",
                required: true,
                question: "What would you do if two sources had different values?"
            },

            9: {
                type: "text",
                required: true,
                question: "How would you react to a sudden change in demand?"
            },

            10: {
                type: "text",
                required: true,
                question: "How often should values be reviewed?"
            },

            11: {
                type: "text",
                required: true,
                question: "What makes a value list reliable?"
            },

            12: {
                type: "text",
                required: true,
                question: "How would you identify manipulated trades?"
            },

            13: {
                type: "text",
                required: true,
                question: "What would you do if you made an incorrect value?"
            },

            14: {
                type: "text",
                required: true,
                question: "What would you do if another valuer disagreed with you?"
            },

            15: {
                type: "multiple",
                required: true,
                question: "How confident are you when evaluating trades?",
                choices: [
                    "Not confident",
                    "Somewhat confident",
                    "Confident",
                    "Very confident"
                ]
            },

            16: {
                type: "text",
                required: true,
                question: "Have you created value lists before?"
            },

            17: {
                type: "text",
                required: true,
                question: "What trading communities have you been part of?"
            },

            18: {
                type: "text",
                required: true,
                question: "How active can you be?"
            },

            19: {
                type: "file",
                required: false,
                question: "Upload previous value lists or examples of your work.",
                accept: [
                    "image/*",
                    ".png",
                    ".jpg",
                    ".jpeg",
                    ".pdf"
                ]
            },

            20: {
                type: "text",
                required: true,
                question: "Why should we choose you as a valuer?"
            }

        }
    },


    tester: {

        title: "Tester Application",
        badge: "TEST",

        questions: {

            1: {
                type: "text",
                required: true,
                question: "What makes you interested in testing?"
            },

            2: {
                type: "multiple",
                required: true,
                question: "How experienced are you with testing games?",
                choices: [
                    "Beginner",
                    "Some experience",
                    "Experienced",
                    "Very experienced"
                ]
            },

            3: {
                type: "text",
                required: true,
                question: "What would you look for when testing a new feature?"
            },

            4: {
                type: "text",
                required: true,
                question: "How would you report a bug?"
            },

            5: {
                type: "text",
                required: true,
                question: "What information should a useful bug report contain?"
            },

            6: {
                type: "text",
                required: true,
                question: "How would you reproduce a bug?"
            },

            7: {
                type: "text",
                required: true,
                question: "What would you do if you found a game-breaking bug?"
            },

            8: {
                type: "text",
                required: true,
                question: "How would you test a feature you know very little about?"
            },

            9: {
                type: "multiple",
                required: true,
                question: "How often could you test?",
                choices: [
                    "Occasionally",
                    "A few times a week",
                    "Daily",
                    "Multiple times a day"
                ]
            },

            10: {
                type: "text",
                required: true,
                question: "What is the difference between a bug and a feature request?"
            },

            11: {
                type: "text",
                required: true,
                question: "How would you test an update before release?"
            },

            12: {
                type: "text",
                required: true,
                question: "What would you do if a developer disagreed with your bug report?"
            },

            13: {
                type: "text",
                required: true,
                question: "How good are you at noticing small details?"
            },

            14: {
                type: "text",
                required: true,
                question: "Have you tested Roblox games before?"
            },

            15: {
                type: "text",
                required: true,
                question: "What platforms can you test on?"
            },

            16: {
                type: "text",
                required: true,
                question: "How would you test something that works differently for different players?"
            },

            17: {
                type: "text",
                required: true,
                question: "What would make you report a bug as high priority?"
            },

            18: {
                type: "text",
                required: true,
                question: "How active can you be?"
            },

            19: {
                type: "file",
                required: false,
                question: "Upload examples of previous bug reports or testing work.",
                accept: [
                    "image/*",
                    "video/*",
                    ".txt",
                    ".pdf"
                ]
            },

            20: {
                type: "text",
                required: true,
                question: "Why should we choose you as a tester?"
            }

        }
    }

};

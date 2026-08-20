/*
    QUESTION CONFIGURATION

    You can have up to 150 questions
    in EACH application.

    Example:

    ["4"]: {
        question: "What would you do?",
        example: "Example: I would..."
    }
*/

window.APPLICATIONS = {

    dev: {

        title: "Developer Application",

        badge: "DEV APPS",

        questions: {

            ["1"]: {
                question: "What programming languages do you know?",
                example: "Example: Luau, Lua, Python, JavaScript..."
            },

            ["2"]: {
                question: "What Roblox development experience do you have?",
                example: "Example: I've been developing Roblox games for 2 years..."
            },

            ["3"]: {
                question: "What have you created before?",
                example: "Example: I've created systems, UI, maps and gameplay mechanics..."
            }

        }

    },


    mod: {

        title: "Moderator Application",

        badge: "MOD APPS",

        questions: {

            ["1"]: {
                question: "What will you do if a member says the n word?",
                example: "Example: I would follow the server rules, document the incident and take the appropriate moderation action..."
            },

            ["2"]: {
                question: "How would you handle a member breaking the rules?",
                example: "Example: I would remain calm, check the rules and apply the appropriate punishment..."
            },

            ["3"]: {
                question: "Why should we choose you as a moderator?",
                example: "Example: I am active, fair and experienced with moderation..."
            }

        }

    },


    valueList: {

        title: "Value List Application",

        badge: "VALUE LIST APPS",

        questions: {

            ["1"]: {
                question: "How experienced are you with item values?",
                example: "Example: I've followed the market for several months and understand rarity, demand and trading..."
            },

            ["2"]: {
                question: "How would you determine the value of an item?",
                example: "Example: I would compare recent trades, demand, rarity and current market trends..."
            },

            ["3"]: {
                question: "What would you do if you disagreed with another valuer?",
                example: "Example: I would calmly discuss the evidence and try to reach a decision based on the available data..."
            }

        }

    }

};

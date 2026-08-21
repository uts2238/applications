window.APPLICATIONS = {

    dev: {

        title: "Developer Application",
        badge: "DEV",

        questions: {

            ["1"]: {
                type: "text",
                required: true,

                question:
                    "A player touches a part and you want it to deal 25 damage. How would you do that in Luau?",

                example:
                    "Example: Explain what event you'd use and where the code should run."
            },

            ["2"]: {
                type: "multiple",
                required: true,

                question:
                    "How would you rate your Luau skills?",

                choices: [
                    "Beginner",
                    "Decent",
                    "Good",
                    "Very good",
                    "Really good"
                ]
            },

            ["3"]: {
                type: "text",
                required: true,

                question:
                    "What have you made in Roblox before?",

                example:
                    "Games, systems, scripts, UI, tools, plugins, anything like that."
            },

            ["4"]: {
                type: "file",
                required: false,

                question:
                    "Got anything you've made? Send it here.",

                example:
                    "Screenshots, videos, place files, scripts, projects, etc.",

                accept: [
                    "image/*",
                    "video/*",
                    ".zip",
                    ".rar",
                    ".txt",
                    ".lua",
                    ".luau"
                ]
            },

            ["5"]: {
                type: "text",
                required: true,

                question:
                    "How long have you been scripting in Roblox?"
            },

            ["6"]: {
                type: "text",
                required: true,

                question:
                    "What's the difference between a LocalScript and a normal server Script?"
            },

            ["7"]: {
                type: "text",
                required: true,

                question:
                    "What are RemoteEvents used for?"
            },

            ["8"]: {
                type: "text",
                required: true,

                question:
                    "A script suddenly stops working and gives an error. What do you normally do first?"
            },

            ["9"]: {
                type: "text",
                required: true,

                question:
                    "What's the difference between :WaitForChild() and just looking for an object directly?"
            },

            ["10"]: {
                type: "text",
                required: true,

                question:
                    "If you had to save a player's coins and inventory, how would you approach it?"
            },

            ["11"]: {
                type: "text",
                required: true,

                question:
                    "What would you do if your code worked perfectly in Studio but broke when multiple players joined?"
            },

            ["12"]: {
                type: "text",
                required: true,

                question:
                    "How would you stop an exploiter from giving themselves a unit or currency?"
            },

            ["13"]: {
                type: "text",
                required: true,

                question:
                    "Have you used ModuleScripts before? If yes, what did you use them for?"
            },

            ["14"]: {
                type: "text",
                required: true,

                question:
                    "What's the biggest or most complicated system you've made?"
            },

            ["15"]: {
                type: "text",
                required: true,

                question:
                    "You open someone else's huge script and it's messy as hell. How would you go about changing it without breaking everything?"
            },

            ["16"]: {
                type: "multiple",
                required: true,

                question:
                    "How much time can you usually spend working on the game?",

                choices: [
                    "Less than 1 hour a day",
                    "1-3 hours a day",
                    "3-6 hours a day",
                    "6+ hours a day"
                ]
            },

            ["17"]: {
                type: "text",
                required: true,

                question:
                    "If you don't know how to make something, what do you do?"
            },

            ["18"]: {
                type: "text",
                required: true,

                question:
                    "Someone asks you to make a system but their explanation is confusing. What would you do?"
            },

            ["19"]: {
                type: "text",
                required: true,

                question:
                    "Why do you want to work on this game?"
            },

            ["20"]: {
                type: "text",
                required: true,

                question:
                    "Anything else you want us to know about you or your development experience?"
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
                    "What would you do if someone started spamming slurs in chat?"
            },

            ["2"]: {
                type: "multiple",
                required: true,

                question:
                    "How active are you usually?",

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
                    "Why do you want to become a moderator?"
            },

            ["4"]: {
                type: "file",
                required: false,

                question:
                    "Have you moderated anywhere before? Send proof if you have any.",

                example:
                    "Screenshots, previous staff roles, moderation logs, etc.",

                accept: [
                    "image/*",
                    ".png",
                    ".jpg",
                    ".jpeg"
                ]
            },

            ["5"]: {
                type: "text",
                required: true,

                question:
                    "Have you been a moderator or staff member anywhere before? If so, where?"
            },

            ["6"]: {
                type: "multiple",
                required: true,

                question:
                    "How would you describe yourself as a moderator?",

                choices: [
                    "Very strict",
                    "Usually strict",
                    "Fair",
                    "Pretty relaxed",
                    "Very relaxed"
                ]
            },

            ["7"]: {
                type: "text",
                required: true,

                question:
                    "Two people start arguing and both are insulting each other. What do you do?"
            },

            ["8"]: {
                type: "text",
                required: true,

                question:
                    "Your friend breaks a rule. What do you do?"
            },

            ["9"]: {
                type: "text",
                required: true,

                question:
                    "Another moderator gives someone a punishment you think is unfair. What do you do?"
            },

            ["10"]: {
                type: "text",
                required: true,

                question:
                    "Someone keeps breaking the same rule after being warned multiple times. What would you do?"
            },

            ["11"]: {
                type: "text",
                required: true,

                question:
                    "Someone is clearly trying to annoy you so you'll punish them. How do you handle it?"
            },

            ["12"]: {
                type: "text",
                required: true,

                question:
                    "Someone reports another player but doesn't provide any proof. What do you do?"
            },

            ["13"]: {
                type: "text",
                required: true,

                question:
                    "What would you do if you weren't sure whether something actually broke a rule?"
            },

            ["14"]: {
                type: "text",
                required: true,

                question:
                    "Someone gets punished and starts complaining about it in chat. How would you handle them?"
            },

            ["15"]: {
                type: "multiple",
                required: true,

                question:
                    "How comfortable are you with making punishments on your own?",

                choices: [
                    "Not comfortable",
                    "A little comfortable",
                    "Comfortable",
                    "Very comfortable"
                ]
            },

            ["16"]: {
                type: "text",
                required: true,

                question:
                    "What do you think makes someone a good moderator?"
            },

            ["17"]: {
                type: "text",
                required: true,

                question:
                    "What's something a moderator should never do?"
            },

            ["18"]: {
                type: "text",
                required: true,

                question:
                    "What would you do if a member was being annoying but technically hadn't broken any rules?"
            },

            ["19"]: {
                type: "text",
                required: true,

                question:
                    "Why should we pick you instead of someone else?"
            },

            ["20"]: {
                type: "text",
                required: true,

                question:
                    "Is there anything else you want us to know?"
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
                    "I trade a lot"
                ]
            },

            ["2"]: {
                type: "text",
                required: true,

                question:
                    "How would you decide what an item is worth?"
            },

            ["3"]: {
                type: "text",
                required: true,

                question:
                    "What would you do if you disagreed with another valuer?"
            },

            ["4"]: {
                type: "file",
                required: false,

                question:
                    "Have you made a value list before? Send it here if you have one.",

                example:
                    "Screenshots, files, spreadsheets, etc.",

                accept: [
                    "image/*",
                    ".png",
                    ".jpg",
                    ".jpeg",
                    ".pdf",
                    ".xlsx",
                    ".csv"
                ]
            },

            ["5"]: {
                type: "text",
                required: true,

                question:
                    "How long have you been trading?"
            },

            ["6"]: {
                type: "multiple",
                required: true,

                question:
                    "How often do you trade?",

                choices: [
                    "Rarely",
                    "Sometimes",
                    "Often",
                    "Every day"
                ]
            },

            ["7"]: {
                type: "text",
                required: true,

                question:
                    "What can make an item's value go up?"
            },

            ["8"]: {
                type: "text",
                required: true,

                question:
                    "What can make an item's value go down?"
            },

            ["9"]: {
                type: "text",
                required: true,

                question:
                    "How important is demand when valuing something?"
            },

            ["10"]: {
                type: "text",
                required: true,

                question:
                    "How would you decide if a trade is a W, F, or L?"
            },

            ["11"]: {
                type: "text",
                required: true,

                question:
                    "An item suddenly becomes extremely popular. What happens to its value?"
            },

            ["12"]: {
                type: "text",
                required: true,

                question:
                    "You find two completely different values for the same item. How would you figure out which one is closer to the real value?"
            },

            ["13"]: {
                type: "multiple",
                required: true,

                question:
                    "Which of these matters the most when valuing an item?",

                choices: [
                    "Rarity",
                    "Demand",
                    "Trade history",
                    "All of them"
                ]
            },

            ["14"]: {
                type: "text",
                required: true,

                question:
                    "What would you do if you personally owned an item that you were responsible for valuing?"
            },

            ["15"]: {
                type: "text",
                required: true,

                question:
                    "Someone claims an item is worth 10x more than your value. How would you check whether they're right?"
            },

            ["16"]: {
                type: "text",
                required: true,

                question:
                    "What would you do if the community strongly disagreed with a value you set?"
            },

            ["17"]: {
                type: "text",
                required: true,

                question:
                    "How would you keep your values from being affected by your own trades?"
            },

            ["18"]: {
                type: "multiple",
                required: true,

                question:
                    "How confident are you when judging trades?",

                choices: [
                    "Not confident",
                    "Somewhat confident",
                    "Confident",
                    "Very confident"
                ]
            },

            ["19"]: {
                type: "text",
                required: true,

                question:
                    "Why do you want to work on the value list?"
            },

            ["20"]: {
                type: "text",
                required: true,

                question:
                    "Why should we trust you to help decide item values?"
            }

        }

    }

};

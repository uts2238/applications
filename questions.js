window.APPLICATIONS = {

    /*
    ============================================================
    DEVELOPER
    ============================================================
    */

    dev: {

        title: "Developer Application",
        badge: "DEV",

        questions: {

            ["1"]: {
                type: "text",
                required: true,
                question: "How long have you been programming in Luau?",
                example: "Example: I've been using Luau for around 2 years."
            },

            ["2"]: {
                type: "multiple",
                required: true,
                question: "How would you rate your Luau knowledge?",
                choices: [
                    "Beginner",
                    "Intermediate",
                    "Advanced",
                    "Very Advanced"
                ]
            },

            ["3"]: {
                type: "text",
                required: true,
                question: "What types of Roblox systems have you made?",
                example: "Example: Inventory systems, trading, data saving, combat and UI systems."
            },

            ["4"]: {
                type: "text",
                required: true,
                question: "How comfortable are you working with RemoteEvents and RemoteFunctions?",
                example: "Example: I'm comfortable using them and making sure the server validates important requests."
            },

            ["5"]: {
                type: "text",
                required: true,
                question: "How would you prevent a client from giving themselves items?",
                example: "Example: I would keep important checks on the server and never trust values sent by the client."
            },

            ["6"]: {
                type: "text",
                required: true,
                question: "What is the difference between a LocalScript and a server Script?",
                example: "Example: LocalScripts run on the client while server Scripts run on the server."
            },

            ["7"]: {
                type: "multiple",
                required: true,
                question: "How comfortable are you debugging Roblox scripts?",
                choices: [
                    "Not very comfortable",
                    "Decent",
                    "Very comfortable",
                    "I regularly debug complex systems"
                ]
            },

            ["8"]: {
                type: "text",
                required: true,
                question: "What would you check if a script suddenly stopped working?",
                example: "Example: I'd check the output, recent changes, references, events and whether the script is actually running."
            },

            ["9"]: {
                type: "text",
                required: true,
                question: "Have you worked with DataStoreService or another data-saving system?",
                example: "Example: Yes, I've worked with DataStoreService and profile-based systems."
            },

            ["10"]: {
                type: "text",
                required: true,
                question: "How would you handle a player disconnecting while an important transaction is happening?",
                example: "Example: I'd make sure the server handles the transaction safely and that data isn't duplicated or lost."
            },

            ["11"]: {
                type: "text",
                required: true,
                question: "Have you worked with ModuleScripts?",
                example: "Example: Yes, I use modules to organize configuration and reusable systems."
            },

            ["12"]: {
                type: "multiple",
                required: true,
                question: "How comfortable are you working with Roblox UI?",
                choices: [
                    "Basic",
                    "Decent",
                    "Advanced",
                    "Very Advanced"
                ]
            },

            ["13"]: {
                type: "text",
                required: true,
                question: "What is one system you are most proud of making?",
                example: "Example: A full trading system with item validation and data saving."
            },

            ["14"]: {
                type: "text",
                required: true,
                question: "How do you normally organize a larger project?",
                example: "Example: I separate systems into modules and keep configuration separate from the main logic."
            },

            ["15"]: {
                type: "text",
                required: true,
                question: "What would you do if another developer disagreed with your implementation?",
                example: "Example: I'd compare both approaches and choose whichever is safer, cleaner or easier to maintain."
            },

            ["16"]: {
                type: "text",
                required: true,
                question: "How do you make sure your code doesn't become unnecessarily slow?",
                example: "Example: I avoid unnecessary loops, repeated expensive operations and excessive remote requests."
            },

            ["17"]: {
                type: "multiple",
                required: true,
                question: "How often are you available to work on the game?",
                choices: [
                    "Occasionally",
                    "A few times a week",
                    "Most days",
                    "Daily"
                ]
            },

            ["18"]: {
                type: "text",
                required: true,
                question: "What would you do if you found a serious exploit in the game?",
                example: "Example: I'd report it privately and explain how it works instead of abusing it."
            },

            ["19"]: {
                type: "text",
                required: true,
                question: "Why do you want to develop for us?",
                example: "Example: I like the project and want to help build new systems and improve the game."
            },

            ["20"]: {
                type: "file",
                required: false,
                question: "Upload examples of your development work.",
                example: "Screenshots, videos, projects or other examples of your work.",
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


    /*
    ============================================================
    MODERATOR
    ============================================================
    */

    mod: {

        title: "Moderator Application",
        badge: "MOD",

        questions: {

            ["1"]: {
                type: "text",
                required: true,
                question: "Why do you want to become a moderator?",
                example: "Example: I want to help keep the community fair and enjoyable."
            },

            ["2"]: {
                type: "multiple",
                required: true,
                question: "How active are you normally?",
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
                question: "What would you do if someone was breaking the rules?",
                example: "Example: I'd check what happened and take the appropriate action based on the rules."
            },

            ["4"]: {
                type: "text",
                required: true,
                question: "What would you do if someone repeatedly spammed the server?",
                example: "Example: I'd warn them if appropriate and escalate the punishment if they continued."
            },

            ["5"]: {
                type: "text",
                required: true,
                question: "What would you do if someone used a racial slur?",
                example: "Example: I'd follow the moderation guidelines and take the appropriate action."
            },

            ["6"]: {
                type: "multiple",
                required: true,
                question: "How familiar are you with moderation commands?",
                choices: [
                    "Not familiar",
                    "Somewhat familiar",
                    "Very familiar",
                    "Extremely familiar"
                ]
            },

            ["7"]: {
                type: "text",
                required: true,
                question: "How would you handle two members arguing with each other?",
                example: "Example: I'd separate the situation from personal opinions and deal with any rule breaking fairly."
            },

            ["8"]: {
                type: "text",
                required: true,
                question: "What would you do if your friend broke a rule?",
                example: "Example: I'd treat them the same way I would treat anyone else."
            },

            ["9"]: {
                type: "text",
                required: true,
                question: "What does being a good moderator mean to you?",
                example: "Example: Being fair, calm, consistent and knowing when to step in."
            },

            ["10"]: {
                type: "text",
                required: true,
                question: "What would you do if you weren't sure whether someone broke a rule?",
                example: "Example: I'd check the rules or ask another staff member before taking serious action."
            },

            ["11"]: {
                type: "multiple",
                required: true,
                question: "How would you describe your patience?",
                choices: [
                    "Low",
                    "Average",
                    "Good",
                    "Very good"
                ]
            },

            ["12"]: {
                type: "text",
                required: true,
                question: "How would you respond to someone insulting you while you are moderating?",
                example: "Example: I'd stay professional and focus on the actual situation."
            },

            ["13"]: {
                type: "text",
                required: true,
                question: "What would you do if another moderator made an unfair punishment?",
                example: "Example: I'd privately discuss it with them or bring it to a higher staff member if necessary."
            },

            ["14"]: {
                type: "text",
                required: true,
                question: "How would you deal with false reports?",
                example: "Example: I'd investigate the report instead of immediately punishing the accused person."
            },

            ["15"]: {
                type: "multiple",
                required: true,
                question: "How often would you be available for moderation?",
                choices: [
                    "Occasionally",
                    "A few times a week",
                    "Most days",
                    "Every day"
                ]
            },

            ["16"]: {
                type: "text",
                required: true,
                question: "What would you do if a member tried to bait you into breaking the rules?",
                example: "Example: I'd ignore the bait and continue handling the situation professionally."
            },

            ["17"]: {
                type: "text",
                required: true,
                question: "How would you handle a situation that suddenly became chaotic?",
                example: "Example: I'd stay calm, deal with the most important issue first and ask for help if needed."
            },

            ["18"]: {
                type: "text",
                required: true,
                question: "Have you moderated another community before?",
                example: "Example: Yes, I have moderated a Roblox and Discord community."
            },

            ["19"]: {
                type: "text",
                required: true,
                question: "Why should we choose you over another applicant?",
                example: "Example: I'm active, fair and willing to put time into helping the community."
            },

            ["20"]: {
                type: "file",
                required: false,
                question: "Upload any relevant moderation examples.",
                example: "Optional screenshots or other examples of previous moderation work.",
                accept: [
                    "image/*",
                    ".png",
                    ".jpg",
                    ".jpeg"
                ]
            }

        }

    },


    /*
    ============================================================
    VALUE LIST
    ============================================================
    */

    valueList: {

        title: "Value List Application",
        badge: "VALUE LIST",

        questions: {

            ["1"]: {
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

            ["2"]: {
                type: "text",
                required: true,
                question: "How would you determine the value of an item?",
                example: "Example: I'd consider demand, rarity, availability and recent trades."
            },

            ["3"]: {
                type: "text",
                required: true,
                question: "What is the difference between value and demand?",
                example: "Example: Value is the estimated worth while demand represents how much people actually want the item."
            },

            ["4"]: {
                type: "text",
                required: true,
                question: "What would make you increase an item's value?",
                example: "Example: Strong demand, limited supply and consistently good trades."
            },

            ["5"]: {
                type: "text",
                required: true,
                question: "What would make you decrease an item's value?",
                example: "Example: Falling demand, oversupply or consistently bad trades."
            },

            ["6"]: {
                type: "multiple",
                required: true,
                question: "How often do you trade?",
                choices: [
                    "Rarely",
                    "Sometimes",
                    "Frequently",
                    "Almost every day"
                ]
            },

            ["7"]: {
                type: "text",
                required: true,
                question: "How would you check whether a trade is reliable evidence?",
                example: "Example: I'd compare it with multiple recent trades rather than relying on one trade."
            },

            ["8"]: {
                type: "text",
                required: true,
                question: "What would you do if one trade was much higher than the usual value?",
                example: "Example: I'd investigate it before using it to change the item's value."
            },

            ["9"]: {
                type: "text",
                required: true,
                question: "How important is demand when valuing an item?",
                example: "Example: Very important because an item can be rare but still have low demand."
            },

            ["10"]: {
                type: "text",
                required: true,
                question: "How would you handle an item whose value is changing quickly?",
                example: "Example: I'd monitor recent trades and avoid making a large change based on limited information."
            },

            ["11"]: {
                type: "multiple",
                required: true,
                question: "How confident are you when judging trades?",
                choices: [
                    "Not very confident",
                    "Somewhat confident",
                    "Very confident",
                    "Extremely confident"
                ]
            },

            ["12"]: {
                type: "text",
                required: true,
                question: "What would you do if another valuer disagreed with you?",
                example: "Example: I'd compare our evidence and discuss why we reached different conclusions."
            },

            ["13"]: {
                type: "text",
                required: true,
                question: "How would you spot a potentially manipulated trade?",
                example: "Example: I'd look for unusual values, suspicious patterns and whether the trade is consistent with other trades."
            },

            ["14"]: {
                type: "text",
                required: true,
                question: "Should a rare item always have a high value? Why?",
                example: "Example: No. Rarity alone doesn't guarantee demand."
            },

            ["15"]: {
                type: "text",
                required: true,
                question: "How would you compare two items with similar rarity?",
                example: "Example: I'd compare demand, trade history, availability and how often each item is actually wanted."
            },

            ["16"]: {
                type: "multiple",
                required: true,
                question: "How often do you keep up with the trading market?",
                choices: [
                    "Rarely",
                    "Sometimes",
                    "Most days",
                    "Every day"
                ]
            },

            ["17"]: {
                type: "text",
                required: true,
                question: "What information would you want before changing an item's value?",
                example: "Example: Recent trades, demand, supply and other current market information."
            },

            ["18"]: {
                type: "text",
                required: true,
                question: "What would you do if you realized you made a mistake on the value list?",
                example: "Example: I'd correct it and explain what changed if necessary."
            },

            ["19"]: {
                type: "text",
                required: true,
                question: "Why do you want to work on the value list?",
                example: "Example: I enjoy trading and want to help make the values useful and accurate."
            },

            ["20"]: {
                type: "file",
                required: false,
                question: "Upload any value lists or trading work you've made.",
                example: "Optional screenshots, spreadsheets or previous value lists.",
                accept: [
                    "image/*",
                    ".png",
                    ".jpg",
                    ".jpeg",
                    ".pdf"
                ]
            }

        }

    },


    /*
    ============================================================
    TESTER
    ============================================================
    */

    test: {

        title: "Tester Application",
        badge: "TEST",

        questions: {

            ["1"]: {
                type: "text",
                required: true,
                question: "Why do you want to become a tester?",
                example: "Example: I enjoy finding bugs and helping developers improve games."
            },

            ["2"]: {
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

            ["3"]: {
                type: "text",
                required: true,
                question: "What would you do after finding a bug?",
                example: "Example: I'd reproduce it, record the steps and report exactly what happened."
            },

            ["4"]: {
                type: "text",
                required: true,
                question: "What information should a good bug report contain?",
                example: "Example: Steps to reproduce, expected result, actual result and useful screenshots or videos."
            },

            ["5"]: {
                type: "text",
                required: true,
                question: "How would you reproduce a bug that only happens sometimes?",
                example: "Example: I'd try different conditions and repeat the same actions until I could identify a pattern."
            },

            ["6"]: {
                type: "multiple",
                required: true,
                question: "How good are you at finding small bugs?",
                choices: [
                    "Not very good",
                    "Decent",
                    "Good",
                    "Very good"
                ]
            },

            ["7"]: {
                type: "text",
                required: true,
                question: "What would you do if you found a bug that could give players an unfair advantage?",
                example: "Example: I'd report it privately instead of abusing it."
            },

            ["8"]: {
                type: "text",
                required: true,
                question: "How would you test a new feature?",
                example: "Example: I'd test normal usage, unusual inputs and edge cases."
            },

            ["9"]: {
                type: "text",
                required: true,
                question: "What is an edge case?",
                example: "Example: A situation that isn't part of normal usage but could still cause something to break."
            },

            ["10"]: {
                type: "text",
                required: true,
                question: "How would you test a new unit or character?",
                example: "Example: I'd test its attacks, animations, targeting, stats and interactions with other systems."
            },

            ["11"]: {
                type: "multiple",
                required: true,
                question: "How often can you test new updates?",
                choices: [
                    "Occasionally",
                    "A few times a week",
                    "Most days",
                    "Daily"
                ]
            },

            ["12"]: {
                type: "text",
                required: true,
                question: "What would you do if you couldn't reproduce someone else's bug report?",
                example: "Example: I'd ask for more information and try different conditions."
            },

            ["13"]: {
                type: "text",
                required: true,
                question: "How would you test an update without accidentally ruining your progress?",
                example: "Example: I'd use a test environment or test account when possible."
            },

            ["14"]: {
                type: "text",
                required: true,
                question: "What makes a bug report easy for a developer to understand?",
                example: "Example: Clear steps, exact details and evidence instead of just saying that something is broken."
            },

            ["15"]: {
                type: "multiple",
                required: true,
                question: "How patient are you when testing repetitive things?",
                choices: [
                    "Not very patient",
                    "Somewhat patient",
                    "Patient",
                    "Very patient"
                ]
            },

            ["16"]: {
                type: "text",
                required: true,
                question: "What would you do if you found a bug but weren't sure whether it was actually a bug?",
                example: "Example: I'd test it further and ask a developer or another tester if needed."
            },

            ["17"]: {
                type: "text",
                required: true,
                question: "Have you tested Roblox games or systems before?",
                example: "Example: Yes, I've helped test several Roblox games for bugs."
            },

            ["18"]: {
                type: "text",
                required: true,
                question: "What type of bugs are you best at finding?",
                example: "Example: UI bugs, gameplay bugs and issues caused by unusual player actions."
            },

            ["19"]: {
                type: "text",
                required: true,
                question: "Why should we choose you as a tester?",
                example: "Example: I'm patient, pay attention to details and give developers useful reports."
            },

            ["20"]: {
                type: "file",
                required: false,
                question: "Upload examples of bugs you've found or testing you've done.",
                example: "Optional screenshots, videos or bug reports.",
                accept: [
                    "image/*",
                    "video/*",
                    ".png",
                    ".jpg",
                    ".jpeg",
                    ".mp4",
                    ".webm",
                    ".txt",
                    ".pdf"
                ]
            }

        }

    },


    /*
    ============================================================
    CONTENT CREATOR
    ============================================================
    */

    cc: {

        title: "Content Creator Application",
        badge: "CC",

        questions: {

            ["1"]: {
                type: "text",
                required: true,
                question: "What type of content do you create?",
                example: "Example: Roblox gameplay videos, update videos, guides and Shorts."
            },

            ["2"]: {
                type: "text",
                required: true,
                question: "What platforms do you post on?",
                example: "Example: YouTube and TikTok."
            },

            ["3"]: {
                type: "text",
                required: true,
                question: "What is your main creator account?",
                example: "Example: Your YouTube, TikTok, Twitch or other creator profile."
            },

            ["4"]: {
                type: "multiple",
                required: true,
                question: "How often do you normally upload?",
                choices: [
                    "Less than once a week",
                    "1-2 times a week",
                    "3-6 times a week",
                    "Daily"
                ]
            },

            ["5"]: {
                type: "text",
                required: true,
                question: "How many followers or subscribers do you have?",
                example: "Example: 12,000 YouTube subscribers."
            },

            ["6"]: {
                type: "text",
                required: true,
                question: "How many views does your content normally get?",
                example: "Example: Most of my videos get between 2,000 and 8,000 views."
            },

            ["7"]: {
                type: "text",
                required: true,
                question: "Who is your main audience?",
                example: "Example: Roblox players who enjoy tower defense games."
            },

            ["8"]: {
                type: "text",
                required: true,
                question: "Why do you want to create content about our game?",
                example: "Example: I already enjoy the game and think it would make good content."
            },

            ["9"]: {
                type: "text",
                required: true,
                question: "What kind of content would you make about the game?",
                example: "Example: Update videos, gameplay, challenges, guides and Shorts."
            },

            ["10"]: {
                type: "multiple",
                required: true,
                question: "Which platform is your strongest?",
                choices: [
                    "YouTube",
                    "TikTok",
                    "Twitch",
                    "Other"
                ]
            },

            ["11"]: {
                type: "text",
                required: true,
                question: "What makes a video enjoyable to watch?",
                example: "Example: Good pacing, entertaining commentary and an interesting idea."
            },

            ["12"]: {
                type: "multiple",
                required: true,
                question: "How would you rate your editing skills?",
                choices: [
                    "Basic",
                    "Decent",
                    "Good",
                    "Advanced"
                ]
            },

            ["13"]: {
                type: "text",
                required: true,
                question: "What is the best-performing piece of content you've made?",
                example: "Example: A Roblox video that reached 75,000 views."
            },

            ["14"]: {
                type: "text",
                required: true,
                question: "Have you made content for Roblox games before?",
                example: "Example: Yes, I've made videos for multiple Roblox games."
            },

            ["15"]: {
                type: "text",
                required: true,
                question: "How do you normally come up with content ideas?",
                example: "Example: I look at updates, trends and things my audience enjoys."
            },

            ["16"]: {
                type: "text",
                required: true,
                question: "What makes your content different from other creators?",
                example: "Example: I focus on fast-paced videos and unusual challenges."
            },

            ["17"]: {
                type: "multiple",
                required: true,
                question: "How comfortable are you with voice commentary?",
                choices: [
                    "I don't use commentary",
                    "Somewhat comfortable",
                    "Comfortable",
                    "Very comfortable"
                ]
            },

            ["18"]: {
                type: "text",
                required: true,
                question: "How do you handle negative feedback?",
                example: "Example: I don't take it personally and use useful feedback to improve."
            },

            ["19"]: {
                type: "text",
                required: true,
                question: "Why should we choose you as a content creator?",
                example: "Example: I consistently create content and have an active audience."
            },

        ["20"]: {
            type: "file",
            required: false,
            question: "Upload examples of your content.",
            example: "Screenshots, videos or other examples of your work are optional.",
            accept: [
                "image/*",
                "video/*",
                ".mp4",
                ".mov",
                ".webm"
            ]
        }
    }
};

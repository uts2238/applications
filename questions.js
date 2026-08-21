window.APPLICATIONS = {

    /*
        =========================
        DEVELOPER
        =========================
    */

    dev: {

        title: "Developer Application",
        badge: "DEV",

        questions: {

            ["1"]: {
                type: "text",
                required: true,
                question: "How did you get into development, and what made you want to apply here?",
                example: "Example: I started making Roblox games a few years ago because I wanted to learn how games worked."
            },

            ["2"]: {
                type: "multiple",
                required: true,
                question: "How would you rate your Luau experience?",
                choices: [
                    "I'm still learning",
                    "I know the basics",
                    "I'm comfortable building systems",
                    "I'm highly experienced"
                ]
            },

            ["3"]: {
                type: "text",
                required: true,
                question: "What parts of Roblox development are you best at?",
                example: "Example: I'm mainly good at scripting, data systems and gameplay mechanics."
            },

            ["4"]: {
                type: "text",
                required: true,
                question: "What is the biggest or most complicated system you've made?",
                example: "Example: I made a tower defense system with targeting, upgrades, abilities and saved player data."
            },

            ["5"]: {
                type: "text",
                required: true,
                question: "What Roblox projects have you worked on before?",
                example: "Example: I've worked on two tower defense games and a simulator."
            },

            ["6"]: {
                type: "text",
                required: true,
                question: "How do you normally approach fixing a bug you can't immediately find?",
                example: "Example: I'd reproduce it, check the output, isolate the affected system and test possible causes."
            },

            ["7"]: {
                type: "multiple",
                required: true,
                question: "How comfortable are you working with existing code?",
                choices: [
                    "I'd rather write everything myself",
                    "I can make small changes",
                    "I'm comfortable modifying existing systems",
                    "I'm very comfortable working in large codebases"
                ]
            },

            ["8"]: {
                type: "text",
                required: true,
                question: "How do you keep your code organized?",
                example: "Example: I separate systems into modules, keep names consistent and avoid putting everything into one script."
            },

            ["9"]: {
                type: "text",
                required: true,
                question: "Have you worked with DataStores or player data systems?",
                example: "Example: Yes, I've used DataStoreService and ProfileService for inventories and player progression."
            },

            ["10"]: {
                type: "text",
                required: true,
                question: "Have you worked with RemoteEvents or RemoteFunctions? If so, how do you use them safely?",
                example: "Example: I use them for client-server communication and validate important requests on the server."
            },

            ["11"]: {
                type: "text",
                required: true,
                question: "How would you stop a client from giving itself an item through a RemoteEvent?",
                example: "Example: I'd make the server verify the player's permissions and whether the requested item is actually obtainable."
            },

            ["12"]: {
                type: "multiple",
                required: true,
                question: "How often are you normally available to work?",
                choices: [
                    "A few times a week",
                    "Most days",
                    "Every day",
                    "It depends on my schedule"
                ]
            },

            ["13"]: {
                type: "text",
                required: true,
                question: "How do you handle feedback on something you've made?",
                example: "Example: I listen to the feedback, figure out whether it improves the system and make changes where necessary."
            },

            ["14"]: {
                type: "text",
                required: true,
                question: "What would you do if another developer disagreed with your approach?",
                example: "Example: I'd explain my reasoning, listen to theirs and choose whichever solution makes more sense."
            },

            ["15"]: {
                type: "text",
                required: true,
                question: "What is something in your development skills that you are currently trying to improve?",
                example: "Example: I'm currently trying to get better at optimizing larger systems."
            },

            ["16"]: {
                type: "multiple",
                required: true,
                question: "How comfortable are you with deadlines?",
                choices: [
                    "I struggle with them",
                    "Usually fine",
                    "Very comfortable",
                    "I regularly work with strict deadlines"
                ]
            },

            ["17"]: {
                type: "text",
                required: true,
                question: "What would you do if you were given a task you didn't know how to complete?",
                example: "Example: I'd research it, experiment with a small version first and ask for help if I got stuck."
            },

            ["18"]: {
                type: "text",
                required: true,
                question: "What makes someone a good developer on a team?",
                example: "Example: Communication, reliability, clean work and being willing to help other developers."
            },

            ["19"]: {
                type: "text",
                required: true,
                question: "Why should we choose you over another developer with similar skills?",
                example: "Example: I'm reliable, I communicate well and I'm willing to put time into making systems properly."
            },

            ["20"]: {
                type: "file",
                required: false,
                question: "Upload examples of your development work.",
                example: "You can upload screenshots, videos, projects or other work that shows your skills.",
                accept: [
                    "image/*",
                    "video/*",
                    ".zip",
                    ".rar",
                    ".txt",
                    ".pdf"
                ]
            }

        }

    },


    /*
        =========================
        MODERATOR
        =========================
    */

    mod: {

        title: "Moderator Application",
        badge: "MOD",

        questions: {

            ["1"]: {
                type: "text",
                required: true,
                question: "Why do you want to become a moderator?",
                example: "Example: I want to help keep the community active, welcoming and enjoyable."
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
                question: "What do you think makes a good moderator?",
                example: "Example: Being fair, calm, active and consistent with the rules."
            },

            ["4"]: {
                type: "text",
                required: true,
                question: "What would you do if someone was repeatedly breaking the rules after being warned?",
                example: "Example: I'd follow the punishment guidelines and escalate the punishment if necessary."
            },

            ["5"]: {
                type: "text",
                required: true,
                question: "What would you do if a member used a racial slur?",
                example: "Example: I'd check the rules, collect the necessary context and take the appropriate action."
            },

            ["6"]: {
                type: "text",
                required: true,
                question: "What would you do if two members started arguing?",
                example: "Example: I'd try to calm things down and step in if they started breaking rules."
            },

            ["7"]: {
                type: "multiple",
                required: true,
                question: "How comfortable are you dealing with difficult members?",
                choices: [
                    "Not very comfortable",
                    "Somewhat comfortable",
                    "Very comfortable",
                    "Extremely comfortable"
                ]
            },

            ["8"]: {
                type: "text",
                required: true,
                question: "What would you do if a friend of yours broke a rule?",
                example: "Example: I'd treat them the same way as everyone else and follow the rules."
            },

            ["9"]: {
                type: "text",
                required: true,
                question: "What would you do if you accidentally punished someone who wasn't actually breaking a rule?",
                example: "Example: I'd review what happened, admit the mistake and correct the punishment."
            },

            ["10"]: {
                type: "text",
                required: true,
                question: "How would you handle someone trying to provoke you?",
                example: "Example: I wouldn't argue back. I'd stay calm and deal with the situation according to the rules."
            },

            ["11"]: {
                type: "multiple",
                required: true,
                question: "How familiar are you with Discord moderation?",
                choices: [
                    "Very little",
                    "Some experience",
                    "Very familiar",
                    "I have moderated servers before"
                ]
            },

            ["12"]: {
                type: "text",
                required: true,
                question: "Have you moderated another community before?",
                example: "Example: Yes, I moderated a server with around 1,000 members."
            },

            ["13"]: {
                type: "text",
                required: true,
                question: "What would you do if another moderator was abusing their permissions?",
                example: "Example: I'd save evidence and report it to someone with higher authority."
            },

            ["14"]: {
                type: "text",
                required: true,
                question: "How would you deal with a member who keeps making false reports?",
                example: "Example: I'd explain that reports need to be genuine and take action if they continued abusing the system."
            },

            ["15"]: {
                type: "text",
                required: true,
                question: "What would you do if you weren't sure whether something broke a rule?",
                example: "Example: I'd check the rules or ask a senior moderator before taking serious action."
            },

            ["16"]: {
                type: "multiple",
                required: true,
                question: "How would you describe your temperament while moderating?",
                choices: [
                    "Very relaxed",
                    "Usually calm",
                    "Serious when necessary",
                    "Very strict"
                ]
            },

            ["17"]: {
                type: "text",
                required: true,
                question: "How would you handle criticism from a member about a punishment you gave?",
                example: "Example: I'd explain the reason for the punishment without turning it into an argument."
            },

            ["18"]: {
                type: "text",
                required: true,
                question: "What is more important when moderating: being strict or being fair? Explain.",
                example: "Example: Being fair is more important because punishments should be based on what actually happened."
            },

            ["19"]: {
                type: "text",
                required: true,
                question: "Why do you think you would be a good fit for the moderation team?",
                example: "Example: I'm active, patient and comfortable dealing with problems without starting arguments."
            },

            ["20"]: {
                type: "file",
                required: false,
                question: "Upload any relevant moderation experience.",
                example: "Screenshots or other evidence of previous moderation work are optional.",
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
        =========================
        VALUE LIST
        =========================
    */

    valueList: {

        title: "Value List Application",
        badge: "VALUE LIST",

        questions: {

            ["1"]: {
                type: "multiple",
                required: true,
                question: "How experienced are you with trading?",
                choices: [
                    "Very little",
                    "Some experience",
                    "Very experienced",
                    "I trade regularly"
                ]
            },

            ["2"]: {
                type: "text",
                required: true,
                question: "How would you decide the value of an item?",
                example: "Example: I'd look at demand, rarity, availability, previous trades and what people are currently offering."
            },

            ["3"]: {
                type: "text",
                required: true,
                question: "What is the difference between an item's value and its demand?",
                example: "Example: Value is its overall worth while demand describes how badly people currently want it."
            },

            ["4"]: {
                type: "text",
                required: true,
                question: "What makes an item difficult to value?",
                example: "Example: Very few trades, changing demand or an item that rarely appears on the market."
            },

            ["5"]: {
                type: "text",
                required: true,
                question: "How would you handle an item that has almost no recent trades?",
                example: "Example: I'd look at similar items and older trades instead of making up a value."
            },

            ["6"]: {
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

            ["7"]: {
                type: "text",
                required: true,
                question: "What would you do if your value estimate was proven wrong?",
                example: "Example: I'd look at the new information and adjust the value rather than refusing to change it."
            },

            ["8"]: {
                type: "text",
                required: true,
                question: "How do you keep up with changes in the trading market?",
                example: "Example: I watch recent trades, community discussions and changes in demand."
            },

            ["9"]: {
                type: "text",
                required: true,
                question: "How would you determine whether a trade is actually fair?",
                example: "Example: I'd compare the current values and demand of everything involved instead of only looking at rarity."
            },

            ["10"]: {
                type: "text",
                required: true,
                question: "What would you do if two experienced valuers gave completely different values?",
                example: "Example: I'd compare the evidence behind both values and figure out which one is better supported."
            },

            ["11"]: {
                type: "multiple",
                required: true,
                question: "Which factor do you think matters most when valuing an item?",
                choices: [
                    "Rarity",
                    "Demand",
                    "Recent trades",
                    "A combination of factors"
                ]
            },

            ["12"]: {
                type: "text",
                required: true,
                question: "Why shouldn't rarity alone determine an item's value?",
                example: "Example: An extremely rare item can still have low demand and therefore trade for less than expected."
            },

            ["13"]: {
                type: "text",
                required: true,
                question: "How would you handle a sudden change in an item's demand?",
                example: "Example: I'd watch new trades and update the value once there was enough evidence."
            },

            ["14"]: {
                type: "text",
                required: true,
                question: "What would you do if someone tried to convince you to artificially raise an item's value?",
                example: "Example: I'd refuse and keep the value based on actual market evidence."
            },

            ["15"]: {
                type: "text",
                required: true,
                question: "How important are recent trades when creating a value?",
                example: "Example: They're very important because they show what people are actually willing to trade."
            },

            ["16"]: {
                type: "multiple",
                required: true,
                question: "How often do you normally trade?",
                choices: [
                    "Rarely",
                    "Sometimes",
                    "Frequently",
                    "Almost every day"
                ]
            },

            ["17"]: {
                type: "text",
                required: true,
                question: "What would you do if the community strongly disagreed with a value you published?",
                example: "Example: I'd look at their evidence and reconsider the value if the criticism was valid."
            },

            ["18"]: {
                type: "text",
                required: true,
                question: "How would you explain a value to someone who thinks it is wrong?",
                example: "Example: I'd explain the trades and market information that led to the value."
            },

            ["19"]: {
                type: "text",
                required: true,
                question: "Why do you think you'd be a good addition to the value list team?",
                example: "Example: I trade often, understand market trends and I'm willing to change my opinion when the evidence changes."
            },

            ["20"]: {
                type: "file",
                required: false,
                question: "Upload any value lists, trade records or other relevant work.",
                example: "Screenshots or files showing your previous work are optional.",
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
        =========================
        TESTER
        =========================
    */

    test: {

        title: "Tester Application",
        badge: "TEST",

        questions: {

            ["1"]: {
                type: "text",
                required: true,
                question: "Why do you want to become a tester?",
                example: "Example: I enjoy finding bugs and helping developers make their games better."
            },

            ["2"]: {
                type: "multiple",
                required: true,
                question: "How experienced are you with game testing?",
                choices: [
                    "Very little",
                    "Some experience",
                    "Very experienced",
                    "I regularly test games"
                ]
            },

            ["3"]: {
                type: "text",
                required: true,
                question: "What makes a good tester?",
                example: "Example: Being observant, patient and able to explain problems clearly."
            },

            ["4"]: {
                type: "text",
                required: true,
                question: "How would you report a bug you found?",
                example: "Example: I'd include what happened, how to reproduce it and what I expected to happen."
            },

            ["5"]: {
                type: "text",
                required: true,
                question: "What information should a useful bug report contain?",
                example: "Example: Steps to reproduce, what happened, what should happen and any useful screenshots or videos."
            },

            ["6"]: {
                type: "text",
                required: true,
                question: "What would you do if you found a bug that only happened sometimes?",
                example: "Example: I'd try to find what conditions cause it and record everything that seems relevant."
            },

            ["7"]: {
                type: "multiple",
                required: true,
                question: "How patient are you when testing repetitive things?",
                choices: [
                    "Not very patient",
                    "Somewhat patient",
                    "Very patient",
                    "I don't mind repetitive testing"
                ]
            },

            ["8"]: {
                type: "text",
                required: true,
                question: "How would you test a new feature before saying it is ready?",
                example: "Example: I'd test normal use, unusual situations and try to break the feature intentionally."
            },

            ["9"]: {
                type: "text",
                required: true,
                question: "What is the difference between a bug and something you simply don't like?",
                example: "Example: A bug is something that doesn't work as intended, while a personal dislike isn't necessarily an issue."
            },

            ["10"]: {
                type: "text",
                required: true,
                question: "What would you do if a developer told you that a bug you reported wasn't important?",
                example: "Example: I'd explain why I think it matters and provide evidence rather than arguing."
            },

            ["11"]: {
                type: "multiple",
                required: true,
                question: "How comfortable are you recording bugs with screenshots or videos?",
                choices: [
                    "Not comfortable",
                    "Somewhat comfortable",
                    "Very comfortable",
                    "I regularly document bugs"
                ]
            },

            ["12"]: {
                type: "text",
                required: true,
                question: "How would you test something that you have no instructions for?",
                example: "Example: I'd figure out what the feature appears to be designed to do and test different ways of using it."
            },

            ["13"]: {
                type: "text",
                required: true,
                question: "What would you do if you discovered a serious bug that could affect players?",
                example: "Example: I'd report it immediately with clear reproduction steps instead of sharing it publicly."
            },

            ["14"]: {
                type: "text",
                required: true,
                question: "How would you make sure another tester can reproduce your bug?",
                example: "Example: I'd write clear numbered steps and mention the conditions required for it to happen."
            },

            ["15"]: {
                type: "text",
                required: true,
                question: "What types of bugs do you usually look for first?",
                example: "Example: Game-breaking bugs, exploits, crashes and issues that affect normal gameplay."
            },

            ["16"]: {
                type: "multiple",
                required: true,
                question: "How often could you realistically test?",
                choices: [
                    "A few times a week",
                    "Most days",
                    "Every day",
                    "Whenever testing is needed"
                ]
            },

            ["17"]: {
                type: "text",
                required: true,
                question: "What would you do if you couldn't reproduce a bug someone else reported?",
                example: "Example: I'd ask for more information and try different conditions before deciding it isn't real."
            },

            ["18"]: {
                type: "text",
                required: true,
                question: "How would you prioritize multiple bugs at once?",
                example: "Example: I'd deal with game-breaking and security issues first, then work down to smaller problems."
            },

            ["19"]: {
                type: "text",
                required: true,
                question: "Why should we trust you with access to unfinished features?",
                example: "Example: I understand that unreleased features and bugs should stay private."
            },

            ["20"]: {
                type: "file",
                required: false,
                question: "Upload examples of bug reports or testing you've done.",
                example: "Screenshots, videos or previous bug reports are optional.",
                accept: [
                    "image/*",
                    "video/*",
                    ".txt",
                    ".pdf",
                    ".zip"
                ]
            }

        }

    },


    /*
        =========================
        CONTENT CREATOR
        =========================
    */

    cc: {

        title: "Content Creator Application",
        badge: "CC",

        questions: {

            ["1"]: {
                type: "text",
                required: true,
                question: "What kind of content do you make?",
                example: "Example: I make Roblox gameplay videos, updates and short-form content."
            },

            ["2"]: {
                type: "text",
                required: true,
                question: "Where do you currently post your content?",
                example: "Example: YouTube and TikTok."
            },

            ["3"]: {
                type: "text",
                required: true,
                question: "Send your main content channel or profile.",
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
                question: "What is your usual average number of views per post?",
                example: "Example: Most of my videos get around 2,000-5,000 views."
            },

            ["6"]: {
                type: "text",
                required: true,
                question: "What is your current follower or subscriber count?",
                example: "Example: 8,500 YouTube subscribers."
            },

            ["7"]: {
                type: "text",
                required: true,
                question: "What type of audience watches your content?",
                example: "Example: Mostly Roblox players interested in tower defense games."
            },

            ["8"]: {
                type: "text",
                required: true,
                question: "Why do you want to create content for us?",
                example: "Example: I already make content in this community and think I could help bring more players in."
            },

            ["9"]: {
                type: "text",
                required: true,
                question: "What kind of content would you make about the game or community?",
                example: "Example: Update videos, gameplay, guides, challenges and short clips."
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
                question: "What do you think makes a video perform well?",
                example: "Example: A strong opening, good editing, a clear idea and keeping viewers interested."
            },

            ["12"]: {
                type: "text",
                required: true,
                question: "How comfortable are you promoting something to your audience?",
                example: "Example: I'm comfortable mentioning updates, events and new content naturally in my videos."
            },

            ["13"]: {
                type: "text",
                required: true,
                question: "Have you worked with another game, server or community as a creator before?",
                example: "Example: Yes, I've previously made sponsored videos for two Roblox games."
            },

            ["14"]: {
                type: "text",
                required: true,
                question: "What would you do if a sponsored or requested video performed badly?",
                example: "Example: I'd look at what went wrong and try a different approach rather than giving up."
            },

            ["15"]: {
                type: "multiple",
                required: true,
                question: "How comfortable are you editing your own content?",
                choices: [
                    "I don't edit",
                    "Basic editing",
                    "Comfortable editing",
                    "Advanced editing"
                ]
            },

            ["16"]: {
                type: "text",
                required: true,
                question: "What makes your content different from other creators?",
                example: "Example: I focus on fast-paced videos and try to make each video have a clear idea."
            },

            ["17"]: {
                type: "text",
                required: true,
                question: "How would you handle negative comments about the game or community?",
                example: "Example: I'd avoid unnecessary arguments and respond professionally when a response is actually needed."
            },

            ["18"]: {
                type: "text",
                required: true,
                question: "How active are you on social media outside of uploading?",
                example: "Example: I'm active every day and regularly interact with comments and my community."
            },

            ["19"]: {
                type: "text",
                required: true,
                question: "Why should we choose you as a content creator?",
                example: "Example: I have an active audience that already enjoys this type of content and I'm consistent with uploads."
            },

            ["20"]: {
                type: "file",
                required: false,
                question: "Upload examples of your best content.",
                example: "You can upload screenshots, videos or other examples of your work.",
                accept: [
                    "image/*",
                    "video/*",
                    ".mp4",
                    ".mov",
                    ".webm"
                ]
            }

        }

    }

};

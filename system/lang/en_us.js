var en_us = {
    command: {
        syntax: {
            status: "/status",
            attack: "/attack",
            note: "/note {note sentence: text} {color: text} {size:number}",
            help: "/help"
        },
        description: {
            status: "Prints the status of the game",
            attack: "Attacks the enimy",
            note: "add note on screen",
            help: "Prints all commands"
        },
        others: {
            unknown: "unknown command",
            invalid_syntax: "syntax error",
            description: "|    description:",
            syntax: "|    syntax:"
        }
    },
    menu: {
        invalid_syntax: ">invalid answer",
        not_yet: ">not open yet",
        start: {
            new_game: "start a new game(1)",
            choose_chapter: "choose chapter(2)",
            author_list: "authuor list(3)",
            buy_coffee: "buy me a coffee(4)"
        },
        chapter_choose: {
            1: "chapter one(1)",
            2: "chapter two(2)",
            3: "chapter three(3)",
            4: "chapter four(4)",
            back: "main menu(5)"
        },
        profile: {
            choose_username: "choose a username",
            wellcom: "wellcom{username}"
        }
    },
    chapter_1: {
        text: {
            1: "in a village",
            2: "someone said that",
            3: "Flowers in a greenhouse don't grow.",
            4: "A teenager used it as a warning.",
            5: "He swears he's going to win everyone.",
            6: "Adventure",
            7: "begins."
        }
    }
}

export {en_us}
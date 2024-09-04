var zh_tw = {
    command: {
        syntax: {
            status: "/status",
            attack: "/attack",
            note: "/note {筆記文字: 文字} {顏色: 文字(英文)} {文字大小:數字}",
            help: "/help"
        },
        description: {
            status: "表示現在狀態",
            attack: "進行攻擊",
            note: "在文字區域上添加注記",
            help: "顯示所有命令"
        },
        others: {
            unknown: "未知的命令",
            invalid_syntax: "語法不符",
            description: "|    簡介:",
            syntax: "|    語法:"
        }
    },
    menu: {
        invalid_syntax: ">不是符合規則的回答",
        not_yet: ">尚未開放",
        start: {
            new_game: "開始新遊戲(1)",
            choose_chapter: "選擇章節(2)",
            author_list: "製作人員列表(3)",
            buy_coffee: "抖內(4)"
        },
        chapter_choose: {
            1: "進入第一章(1)",
            2: "進入第二章(2)",
            3: "進入第三章(3)",
            4: "進入第四章(4)",
            back: "返回主選單(5)"
        },
        profile: {
            choose_username: "選擇用戶名",
            wellcom: "歡迎{username}"
        }
    },
    chapter_1: {
        text: {
            1: "在一個村莊裡",
            2: "有人說過",
            3: "溫室裡的花朵無法成長",
            4: "一位少年以此為戒",
            5: "他發誓他要贏果所有人",
            6: "冒險",
            7: "就此展開"
        }
    }
}

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

export {zh_tw, en_us}
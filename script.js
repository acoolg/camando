var consoleText = document.getElementById('contole');
var input = document.getElementById('input-field')
var health = 200
var inbattle = true
var sayque = new Array()
const startString = ">"
var speechDelay = 800
var inStarterMenu = false
var canType = true
var inChapterMenu = false
var array = []
var lang = {}
var command = []
var everyCommandList = undefined
var username = ""

fetch("lang/cn-tw.json")
    .then(async (data) => {
        lang = await data.json()
        console.log(lang)
        setupCommand(lang)
        console.log(command)
        everyCommandList = listEveryCommandList()
})

function setupCommand(lang) {
    command = [
        {
            name: "status",
            syntax: lang.command.syntax.status,
            description: lang.command.description.status,
            action: function(input1, input2, input3) {
                printstats()
            },
        },
        {
            name: "attack",
            syntax:lang.command.syntax.attack,
            description: lang.command.description.attack,
            action: function(input1, input2, input3) {
                attack()
            },
        }, {
            name: "note",
            syntax:lang.command.syntax.note,
            description: lang.command.description.note,
            action: function(input1, input2, input3) {
                consoleText.innerHTML += `<p style="color:${input2};">${input1}</p>`
            },
        }, {
            name: "help",
            syntax:lang.command.syntax.help,
            description: lang.command.description.help,
            action: function(input1, input2, input3) {
                instantSay(" ")
                command.forEach(e => {
                    instantSay(`${e.name}`)
                    instantSay(lang.command.others.description + e.description)
                    instantSay(lang.command.others.syntax + e.syntax)
                    instantSay("&nbsp;")
                })
            },
        }
    ]
}

function listEveryCommandList() {
    var result = []
    console.log(command)
    command.forEach(e => {
        result.push(e.name)
    })
    console.log(result)
    return result
}


function runcommandmain(input) {
    var data = input.slice(1)
    var dataComponents = data.split(" ")
    var commandType = dataComponents[0]

    console.log(dataComponents);

    everyCommandList.forEach(commandWord => {
        if(commandWord == commandType){
            console.log(command[everyCommandList.indexOf(commandWord)]);
            
            command[everyCommandList.indexOf(commandWord)].action(dataComponents[1], dataComponents[2], dataComponents[3])
            return ""
        }
    })
    

}

function credit() {
    var contribut = [
        "acoolg",
        ""
    ]
    var times = 0
    var intervalId = setInterval(() => {
        canType = false
        // 当遍历完数组后，停止计时器并调用 startMenu
        if (times >= contribut.length) {
            clearInterval(intervalId);
            clearConsole()
            startMenu();
        } else {
            const nowContent = contribut[times];
            story(nowContent);
            times++;
        }
    }, speechDelay);
}

function check(text) {
    if (text.startsWith(text)) {
        return true
    } else {
        return false
    }
}

function handleChapter(imput) {
    switch (imput) {
        case "1":
            clearConsole()
            chapter1()
            inChapterMenu = false
            break;
        case "5":
            clearConsole()
            startMenu()
            inChapterMenu = fals
            break
        default:
            clearConsole()
            chapterMenu()
            instantSay(lang.menu.invalid_syntax)
            break;
    }
}

function handleMenu(ans) {
    inStarterMenu = false
    switch(ans){
        case "1":
            clearConsole()
            chapter1()
            break
        case "2":
            clearConsole()
            chapterMenu()
            break
        case "3":
            clearConsole()
            credit()
            break
        case "4":
            clearConsole()
            startMenu()
            instantSay(lang.menu.not_yet)
            break
        default:
            clearConsole()
            startMenu()
            instantSay(lang.menu.invalid_syntax)
            break
    }
}

function story(text) {
    sayque.push(text)
}

function submit() {
    if(canType){
        let inputValue = input.value + '';
        input.value = '';
        input.focus();
        if(inStarterMenu){
            handleMenu(inputValue)
            return ""
        } else if (inChapterMenu) {
            handleChapter(inputValue)
            return ""
        }
        if(inputValue.startsWith("/")) {
            instantSay(inputValue);
            runcommandmain(inputValue)
            
        } else{
            instantSay("#" + input.value);
        }
    }
}

function clearConsole() {
    console.innerHTML = '';
}

function printstats() {
    story(`health: ${health}`)
}


setInterval(function() {
    if (sayque.length == 0) {
        console.log("nothing")
        canType = true;
    } else {
        consoleText.innerHTML += `<p>${startString + sayque[0]}</p>`
        sayque.shift()
        canType = false;
    }

}, speechDelay)

function startMenu() {
    clearConsole()
    consoleText.innerHTML += `
<pre>
 ██████╗ ██████╗ ███╗   ███╗███╗   ███╗ █████╗ ███╗   ██╗██████╗  ██████╗ 
██╔════╝██╔═══██╗████╗ ████║████╗ ████║██╔══██╗████╗  ██║██╔══██╗██╔═══██╗
██║     ██║   ██║██╔████╔██║██╔████╔██║███████║██╔██╗ ██║██║  ██║██║   ██║
██║     ██║   ██║██║╚██╔╝██║██║╚██╔╝██║██╔══██║██║╚██╗██║██║  ██║██║   ██║
╚██████╗╚██████╔╝██║ ╚═╝ ██║██║ ╚═╝ ██║██║  ██║██║ ╚████║██████╔╝╚██████╔╝
 ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝  ╚═════╝ 
</pre>
    `
    instantSayAtCenter("開始新遊戲(1)")// start game
    instantSayAtCenter("選擇章節(2)") // choose chapter
    instantSayAtCenter("製作人員列表(3)")//auther list
    instantSayAtCenter("抖內(4)")// buy us coffee
    inStarterMenu = true
}

function chapterMenu() {
    clearConsole()
    consoleText.innerHTML += `
<pre>
  ▄████▄   ██░ ██  ▒█████   ▒█████    ██████  ▓█████    
 ▒██▀ ▀█ ▒▓██░ ██ ▒██▒  ██▒▒██▒  ██▒▒██    ▒  ▓█   ▀    
 ▒▓█    ▄░▒██▀▀██ ▒██░  ██▒▒██░  ██▒░ ▓██▄    ▒███      
▒▒▓▓▄ ▄██ ░▓█ ░██ ▒██   ██░▒██   ██░  ▒   ██▒ ▒▓█  ▄    
░▒ ▓███▀  ░▓█▒░██▓░ ████▓▒░░ ████▓▒░▒██████▒▒▒░▒████    
░░ ░▒ ▒    ▒ ░░▒░▒░ ▒░▒░▒░ ░ ▒░▒░▒░ ▒ ▒▓▒ ▒ ░░░░ ▒░     
   ░  ▒    ▒ ░▒░ ░  ░ ▒ ▒░   ░ ▒ ▒░ ░ ░▒  ░ ░░ ░ ░      
 ░         ░  ░░ ░░ ░ ░ ▒  ░ ░ ░ ▒  ░  ░  ░      ░      
 ░ ░       ░  ░  ░    ░ ░      ░ ░        ░  ░   ░      
</pre>
    `
    instantSayAtCenter("進入第一章(1)") // chapter 1
    instantSayAtCenter("進入第二章(2)") // chapter 2
    instantSayAtCenter("進入第三章(3)") // chapter 3
    instantSayAtCenter("進入第四章(4)") // chapter 4
    instantSayAtCenter("返回主選單(5)") // back to menu
    inChapterMenu = true
}

function chapter1() {
    consoleText.innerHTML += `
<pre>
         ▄▄                                                              
        ███                              ██                              
         ██                              ██                         ▄▄▄  
 ▄██▀██  ███████▄   ▄█▀██▄  ▀████████▄ ██████   ▄▄█▀██ ▀███▄███    ▀███  
██▀  ██  ██    ██  ██   ██    ██   ▀██   ██    ▄█▀   ██  ██▀ ▀▀      ██  
██       ██    ██   ▄█████    ██    ██   ██    ██▀▀▀▀▀▀  ██          ██  
██▄     ▄██    ██  ██   ██    ██   ▄██   ██    ██▄    ▄  ██          ██  
 █████▀ ████  ████ ▄████▀██▄  ██████▀    ▀████  ▀█████▀ ████▄      ▄████▄
                              ██                                         
                            ▄████▄                                       
  
</pre>`
    story("在一個村莊裡")
    story("有人說過")
    story("溫室裡的花朵終究無法成長")
    story("一位少年以此為戒")
    story("他發誓他要贏果所有人")
    story("冒險")
    story("就此展開")

}

function instantSay(text) {
    consoleText.innerHTML += `<p>${text}</p>`
}

function instantSayAtCenter(text) {
    consoleText.innerHTML += `<p class="center">${text}</p>`
}

function clearConsole() {
    consoleText.innerHTML = ""
}

window.onload = function() {
    setInterval((e) => {
        var inputValue = input.value
        var data = inputValue.slice(1)
        var dataComponents = data.split(" ")
        var commandType = dataComponents[0]
        var thereIsAWord = false
        document.getElementById("stntax").innerHTML = ""
        everyCommandList.forEach(commandWord => {
            if(commandWord.startsWith(commandType) && data != ""){
                document.getElementById("stntax").innerHTML += `<p>${command[everyCommandList.indexOf(commandWord)].syntax}</p>`
            }
        })
    }, 100);
    // document.getElementById('input-field').focus()
    startMenu()
}

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        submit()
    }
});



function replacePlaceholders(str) {
    return str.replace(/{(\w+)}/g, (match, p1) => {
        // 使用 eval() 來動態地解析變數名稱
        return eval(p1);
    });
}

var consoleText = document.getElementById('contole');
var input = document.getElementById('input-field')
var health = 200
var inbattle = true
var sayque = new Array()
const startString = ">"
var speechDelay = 800
var inStarterMenu = false
var cantype = true
// var everyCommandList = everyCommandList()

var command = [
    {
        name: "/status",
        description: "Prints the status of the game",
        action: function() {
            printstats()
        },
    },
    {
        name: "/attack",
        description: "Attacks the enimy",
        action: function() {
            attack()
        },
    }, {
        name: "/say",
        description: "Attacks the enimy",
        action: function() {
            story("rr")
        },
    }
]

// function everyCommandList() {
//     var result = []
//     command.forEach(e => {
//         result.push(e.name)
//     })
//     return result
// }


function runcommandmain(imput) {
    
}

function credit() {
    var contribut = [
        "acoolg",
        "slime",
        "christian",
        "matthew",
        "joseph",
        "michael",
        ""
    ]
    var times = 0
    var intervalId = setInterval(() => {
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

function handleMenu(ans) {
    inStarterMenu = false
    switch(ans){
        case "1":
            clearConsole()
            chapter1()
            break
        case "3":
            clearConsole()
            credit()
            break
    }
}

function story(text) {
    sayque.push(text)
}

function submit() {
    if(cantype){
        let inputValue = input.value + '';
        instantSay("#" + input.value);
        input.value = '';
        input.focus();
        if(inStarterMenu){
            handleMenu(inputValue)
        }
        if(inputValue.startsWith("/")) {
        runcommandmain(inputValue)
        }
    }
}

document.addEventListener('keydown', function(e) {
    if (e.key === "e") {
        submit();
    }
});

function clearConsole() {
    console.innerHTML = '';
}

function printstats() {
    story(`health: ${health}`)
}


setInterval(function() {
    if (sayque.length == 0) {
        console.log("nothing")
        cantype = true;
    } else {
        consoleText.innerHTML += `<p>${startString + sayque[0]}</p>`
        sayque.shift()
        cantype = false;
    }

}, speechDelay)

function startMenu() {
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
    instantSayCenter("開始新遊戲(1)")// start game
    instantSayCenter("選擇章節(2)") // choose chapter
    instantSayCenter("製作人員列表(3)")//auther list
    instantSayCenter("抖內(4)")// buy us coffie
    inStarterMenu = true
}

function chapter1() {
    consoleText.innerHTML += `
<pre>
        ▄▄                                                         
       ███                           ██                            
        ██                           ██                       ▄▄▄  
 ▄██▀██ ███████▄  ▄█▀██▄ ▀████████▄██████  ▄▄█▀██▀███▄███    ▀███  
██▀  ██ ██    ██ ██   ██   ██   ▀██  ██   ▄█▀   ██ ██▀ ▀▀      ██  
██      ██    ██  ▄█████   ██    ██  ██   ██▀▀▀▀▀▀ ██          ██  
██▄    ▄██    ██ ██   ██   ██   ▄██  ██   ██▄    ▄ ██          ██  
 █████▀████  ████▄████▀██▄ ██████▀   ▀████ ▀█████▀████▄      ▄████▄
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

function instantSayCenter(text) {
    consoleText.innerHTML += `<p class="center">${text}</p>`
}

function clearConsole() {
    consoleText.innerHTML = ""
}

window.onload = function() {
    input.focus
    startMenu()
}

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        submit()
    }
});
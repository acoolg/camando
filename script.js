var consoleText = document.getElementById('contole');
var input = document.getElementById('input-field')
var health = 200
var inbattle = true
var sayque = new Array()
const startString = ">"
var speechDelay = 500
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

function check(text) {
    if (text.startsWith(text)) {
        return true
    } else {
        return false
    }
}

function story(text) {
    sayque.push(text)
}

function submit() {
    let ninput = input.value + '';
    if(ninput.startsWith("/")) {
       runcommandmain(ninput)
    }
    story("#" + input.value);
    input.value = '';
    input.focus();
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
    } else {
        consoleText.innerHTML += `<p>${startString + sayque[0]}</p>`
        sayque.shift()
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
    instantSayc("開始新遊戲(1)")
    instantSayc("選擇章節(2)")
    instantSayc("製作人員列表(3)")
    instantSayc("抖內(4)")
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

function instantSayc(text) {
    consoleText.innerHTML += `<p class="center">${text}</p>`
}

function clearConsole() {
    consoleText.innerHTML = ""
}

window.onload = function() {
    input.focus
    startMenu()
}
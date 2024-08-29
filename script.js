var consoleText = document.getElementById('contole');
var input = document.getElementById('input-field')
var health = 200
var inbattle = true
var sayque = new Array()
const startString = ">"
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

}, 1000)

function chapter1() {
    consoleText.innerHTML += `
<pre>


 ██████╗ ██████╗ ███╗   ███╗███╗   ███╗ █████╗ ███╗   ██╗██████╗  ██████╗ 
██╔════╝██╔═══██╗████╗ ████║████╗ ████║██╔══██╗████╗  ██║██╔══██╗██╔═══██╗
██║     ██║   ██║██╔████╔██║██╔████╔██║███████║██╔██╗ ██║██║  ██║██║   ██║
██║     ██║   ██║██║╚██╔╝██║██║╚██╔╝██║██╔══██║██║╚██╗██║██║  ██║██║   ██║
╚██████╗╚██████╔╝██║ ╚═╝ ██║██║ ╚═╝ ██║██║  ██║██║ ╚████║██████╔╝╚██████╔╝
 ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝  ╚═════╝ 
                                                                                                                      
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
    story("")

}

setInterval(function() {
    let ninput = input.value + '';
}, 1)

chapter1()
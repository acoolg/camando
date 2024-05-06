var console = document.getElementById('contole');
var input = document.getElementById('input-field')
var health = 200
var inbattle = true

var command = [
    {
        name: "/status",
        description: "Prints the status of the game",
        action: function () {
            printstats()
        },
    },
    {
        name: "/attack",
        description: "Attacks the enimy",
        action: function () {
            attack()
        },
    }
]



function runcommandmain() {
    if (ninpit.startsWith("/status")) {
        printstats()
    }
}

function story(text) {
    console.innerHTML += `<p>` + text + `</p>`
}

function submit() {
    let ninput = input.value + '';
    runcommandmain();
    story("#" + input.value);
    input.value = '';
    input.focus();
}

document.addEventListener('keydown', function (e) {
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


function chapter1() {
    console.innerHTML += `
<pre>


                                                                             ▄▄                                       
                                                                           ▀███                                       
                                                                             ██                                       
 ▄██▀██  ▄██▀██▄▀████████▄█████▄ ▀████████▄█████▄  ▄█▀██▄ ▀████████▄    ▄█▀▀███     ▀██▀    ▄█    ▀██▀▄█▀██▄ ▀███▄███ 
██▀  ██ ██▀   ▀██ ██    ██    ██   ██    ██    ██ ██   ██   ██    ██  ▄██    ██       ██   ▄███   ▄█ ██   ██   ██▀ ▀▀ 
█▓      ██     ██ ▓█    ██    ██   ▓█    ██    ██  ▄███▓█   █▓    ██  █▓█    █▓        ██ ▄█  ██ ▄█   ▄███▓█   █▓     
█▓▄    ▄██     ▓█ ▓█    ▓█    ██   ▓█    ▓█    ██ █▓   ▓█   █▓    ▓█  ▀▓█    █▓         ███    █▓▓   █▓   ▓█   █▓     
▓▓      ▓█     ▓▓ ▓▓    ▓▓    ▓▓   ▓▓    ▓▓    ▓▓  ▓▓▓▓▒▓   ▓▓    ▓▓  ▓▓▓    ▓▓         ▓█▓▓   ▓▒▓    ▓▓▓▓▒▓   ▓▓     
▓▒▓    ▓▓▓▓   ▓▓▓ ▒▓    ▒▓    ▓▓   ▒▓    ▒▓    ▓▓ ▓▓   ▒▓   ▓▓    ▓▓  ▀▒▓    ▓▒         ▓▓▓    ▓▒▓   ▓▓   ▒▓   ▓▒     
 ▒ ▒ ▒   ▒ ▒ ▒ ▒▒ ▒▓▒  ▒▒▒   ▒▒▓▒▒ ▒▓▒  ▒▒▒   ▒▒▓▒▒▓▒ ▒ ▓▒▒ ▒▒▒  ▒▓▒ ▒ ▒ ▒ ▒ ▓ ▒         ▒      ▒    ▒▓▒ ▒ ▓▒▒ ▒▒▒    
                                                                                                                      
                                                                                                                      
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
    story("戰鬥開始了")
    
}

setInterval(function () {
    let ninput = input.value + '';
},1)

chapter1()

var console = document.getElementById('contole');
var input = document.getElementById('input-field')
var health = 200
var inbattle = false
function story(text) {
    console.innerHTML += `<p>` + text + `</p>`
}

function submit() {
    story("#" + input.value)
    input.value = ''
    input.focus()
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
       ███                           ██                            
        ██                           ██                       ▄▄▄  
▄██▀██ ███████▄  ▄█▀██▄  ▀████████▄██████  ▄▄█▀██▀███▄███    ▀███  
██▀  ██ ██    ██ ██   ██   ██   ▀██  ██   ▄█▀   ██ ██▀ ▀▀      ██  
██      ██    ██  ▄█████   ██    ██  ██   ██▀▀▀▀▀▀ ██          ██  
██▄    ▄██    ██ ██   ██   ██   ▄██  ██   ██▄    ▄ ██          ██  
 █████▀████  ████▄████▀██▄ ██████▀   ▀████ ▀█████▀████▄      ▄████▄
                           ██                                      
                          ▄████▄                                    
</pre>`
    story("戰鬥開始了")
    
}



chapter1()

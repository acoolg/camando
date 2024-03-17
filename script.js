var console = document.getElementById('contole');
var input = document.getElementById('input-field')

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
    story("Chapter 1")
}

chapter1()

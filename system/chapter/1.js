const chapter1 = function(element, lang) {
    element.tinnerHTML += `
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
    say(lang.chapter_1.text[1])
    say(lang.chapter_1.text[2])
    say(lang.chapter_1.text[3])
    say(lang.chapter_1.text[4])
    say(lang.chapter_1.text[5])
    say(lang.chapter_1.text[6])
    say(lang.chapter_1.text[7])
    function say(text){
        element.innerHTML += `<p>${text}</p>`;
    }
}

export {chapter1}
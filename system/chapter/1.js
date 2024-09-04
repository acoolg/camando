import * as main from "../../script.js"

export function chapter1() {
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
    main.story(language.chapter_1.text[1])
    main.story(language.chapter_1.text[2])
    main.story(language.chapter_1.text[3])
    main.story(language.chapter_1.text[4])
    main.story(language.chapter_1.text[5])
    main.story(language.chapter_1.text[6])
    main.story(language.chapter_1.text[7])

}
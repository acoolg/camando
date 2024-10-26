
export function createStarterMenu(lang, func) {
    return[
            `<pre>
          ██▓    ▄▄▄      ███▄    █  ▄████  █    ██  ▄▄▄      ▄████  ▓█████
         ▓██▒   ▒████▄    ██ ▀█   █  ██▒ ▀█ ██  ▓██▒▒████▄    ██▒ ▀█ ▓█   ▀
         ▒██░   ▒██  ▀█▄ ▓██  ▀█ ██▒▒██░▄▄▄▓██  ▒██░▒██  ▀█▄ ▒██░▄▄▄ ▒███  
         ▒██░   ░██▄▄▄▄██▓██▒  ▐▌██▒░▓█  ██▓▓█  ░██░░██▄▄▄▄██░▓█  ██ ▒▓█  ▄
        ▒░██████▒▓█   ▓██▒██░   ▓██░▒▓███▀▒▒▒█████▓ ▒▓█   ▓██▒▓███▀▒▒░▒████
        ░░ ▒░▓  ░▒▒   ▓▒█░ ▒░   ▒ ▒ ░▒   ▒ ░▒▓▒ ▒ ▒ ░▒▒   ▓▒█░▒   ▒ ░░░ ▒░ 
        ░░ ░ ▒  ░ ░   ▒▒ ░ ░░   ░ ▒░ ░   ░ ░░▒░ ░ ░ ░ ░   ▒▒  ░   ░ ░ ░ ░  
           ░ ░    ░   ▒     ░   ░ ░  ░   ░  ░░░ ░ ░   ░   ▒   ░   ░     ░  
        ░    ░        ░           ░      ░    ░           ░       ░ ░   ░  
            </pre>`,
            {
                label: lang.menu.start.new_game,
                action: function(){
                    func.clearConsole()
                    func.callAChapter(1)
                }
            },
            {
                label: lang.menu.start.choose_chapter,
                action: function(){
                    func.clearConsole()
                    func.chapterMenu()
                }
            },
            {
                label: lang.menu.start.author_list,
                action: function(){
                    func.clearConsole()
                    func.credit()
                }
            },
            {
                label: lang.menu.start.buy_coffee,
                action: function(){
                    func.instantSay(lang.menu.not_yet)
                }
            },
            {
                action: function() {
                    func.clearConsole()
                    func.menuToHtml(inMenu)
                }
            }
    ]
}
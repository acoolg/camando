// import figlet from "figlet";
import * as lang from "./system/lang_out.js"
import { chapter1 } from "./system/chapter/1.js"
import { commandSetUp } from "./system/commandmain.js";
import * as menu from "./system/menu/starter.js"
// var figlet = require("figlet");

const consoleText = document.getElementById('contole');
const input = document.getElementById('input-field')
const submitBtn = document.getElementById('submit-button')

var inbattle = false

var sayque = new Array()
const startString = ">"
var speechDelay = 800

// var inStarterMenu = false
var canType = true
// var inChapterMenu = false
// var inLangMenu = false
var inMenu = null

var startMenu = undefined

var language = {}
var command = []

var playerStatus = {
    health: 100,
    level: 1,
    exp: 0,
    maxExp: 100,
    inventory: []
}

const func = {
    story: story,
    clearConsole: clearConsole,
    menuToHtml: menuToHtml,
    instantSay: instantSay,
    callAChapter: callAChapter,
    consoleText: consoleText,
    sayque: sayque
}

var log = console.log

var ableMove = new Array
var ifNot = undefined

var everyCommandList = undefined
var username = ""
init(lang.zh_tw)

// this will do the translation
function init(languages) {
    language = languages

    command = commandSetUp(languages, consoleText)
    
    everyCommandList = listEveryCommandList()
}

// this sets up the menu
function everyMenuSetUp(lang) {
    startMenu = menu.createStarterMenu(lang, func)
}


// this will call a chapter
function callAChapter(witch){
    eval(`chapter${witch}(consoleText, lang, sayque, func)`)
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
            
            command[everyCommandList.indexOf(commandWord)].action(dataComponents.slice(1))
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
            inChapterMenu = false
            break
        default:
            clearConsole()
            chapterMenu()
            instantSay(language.menu.invalid_syntax)
            break;
    }
}

export function story(text) {
    sayque.push(text)
}

//                    ▄▄                          ▄▄        
//                   ▄██                          ██   ██   
//                    ██                               ██   
// ▄██▀██████  ▀███   ██▄████▄ ▀████████▄█████▄ ▀███ ██████ 
// ██   ▀▀ ██    ██   ██    ▀██  ██    ██    ██   ██   ██   
// ▀█████▄ ██    ██   ██     ██  ██    ██    ██   ██   ██   
// █▄   ██ ██    ██   ██▄   ▄██  ██    ██    ██   ██   ██   
// ██████▀ ▀████▀███▄ █▀█████▀ ▄████  ████  ████▄████▄ ▀████
//
function submit() {
    if(canType){
        let inputValue = input.value + '';
        input.value = '';
        input.focus();
        if(ableMove != []){
            for (let i = 0; i < ableMove.length; i++) {
                const e = ableMove[i];
                if (e.trigger === inputValue) {
                    e.action();
                    ableMove = [];
                    return;  // This exits the function
                }
            }
            log("sss")
            ableMove = []
            inMenu[inMenu.length - 1].action()
            return;
        }
        // if(inStarterMenu){
        //     handleMenu(inputValue)
        //     return ""
        // } else if (inChapterMenu) {
        //     handleChapter(inputValue)
        //     return ""
        // } else if(inLangMenu){
        //     handleLang(inputValue)
        //     return ""
        // }
        if(inputValue.startsWith("/")) {
            instantSay(inputValue);
            runcommandmain(inputValue)
        }
    }
}

export function clearConsole() {
    consoleText.innerHTML = '';
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

// function startMenu() {
//     clearConsole()
//     consoleText.innerHTML += `
// <pre>
//  ██████╗ ██████╗ ███╗   ███╗███╗   ███╗ █████╗ ███╗   ██╗██████╗  ██████╗ 
// ██╔════╝██╔═══██╗████╗ ████║████╗ ████║██╔══██╗████╗  ██║██╔══██╗██╔═══██╗
// ██║     ██║   ██║██╔████╔██║██╔████╔██║███████║██╔██╗ ██║██║  ██║██║   ██║
// ██║     ██║   ██║██║╚██╔╝██║██║╚██╔╝██║██╔══██║██║╚██╗██║██║  ██║██║   ██║
// ╚██████╗╚██████╔╝██║ ╚═╝ ██║██║ ╚═╝ ██║██║  ██║██║ ╚████║██████╔╝╚██████╔╝
//  ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝  ╚═════╝ 
// </pre>
//     `
//     instantSayAtCenter(language.menu.start.new_game)// start game
//     instantSayAtCenter(language.menu.start.choose_chapter) // choose chapter
//     instantSayAtCenter(language.menu.start.author_list)//auther list
//     instantSayAtCenter(language.menu.start.buy_coffee)// buy us coffee
//     inStarterMenu = true
// }

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
    instantSayAtCenter(language.menu.chapter_choose[1]) // chapter 1
    instantSayAtCenter(language.menu.chapter_choose[2]) // chapter 2
    instantSayAtCenter(language.menu.chapter_choose[3]) // chapter 3
    instantSayAtCenter(language.menu.chapter_choose[4]) // chapter 4
    instantSayAtCenter(language.menu.chapter_choose.back) // back to menu
    inChapterMenu = true
}

// main menu

function handleMenu(ans) {
    inStarterMenu = false
    switch(ans){
        case "1":
            clearConsole()
            chapter1(consoleText, language, sayque)
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
            instantSay(language.menu.not_yet)
            break
        default:
            clearConsole()
            startMenu()
            instantSay(language.menu.invalid_syntax)
            break
    }
}

// main menu end

export function instantSay(text) {
    consoleText.innerHTML += `<p>${text}</p>`
}

export function instantSayAtCenter(text) {
    consoleText.innerHTML += `<p class="center">${text}</p>`
}

window.onload = function() {
    setInterval((e) => {
        document.getElementById("stntax").innerHTML = ""
        var inputValue = input.value
        if(inputValue.startsWith("/")) {
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
        }
    }, 100);
    document.getElementById('input-field').focus()
    // languagesMenu()
    everyMenuSetUp(language)
    menuToHtml(startMenu)
}

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        submit()
    }
});

function languagesMenu(){
    consoleText.innerHTML = `<pre>
  ██▓    ▄▄▄      ███▄    █  ▄████  █    ██  ▄▄▄      ▄████  ▓█████
 ▓██▒   ▒████▄    ██ ▀█   █  ██▒ ▀█ ██  ▓██▒▒████▄    ██▒ ▀█ ▓█   ▀
 ▒██░   ▒██  ▀█▄ ▓██  ▀█ ██▒▒██░▄▄▄▓██  ▒██░▒██  ▀█▄ ▒██░▄▄▄ ▒███  
 ▒██░   ░██▄▄▄▄██▓██▒  ▐▌██▒░▓█  ██▓▓█  ░██░░██▄▄▄▄██░▓█  ██ ▒▓█  ▄
▒░██████▒▓█   ▓██▒██░   ▓██░▒▓███▀▒▒▒█████▓ ▒▓█   ▓██▒▓███▀▒▒░▒████
░░ ▒░▓  ░▒▒   ▓▒█░ ▒░   ▒ ▒ ░▒   ▒ ░▒▓▒ ▒ ▒ ░▒▒   ▓▒█░▒   ▒ ░░░ ▒░ 
░░ ░ ▒  ░ ░   ▒▒ ░ ░░   ░ ▒░ ░   ░ ░░▒░ ░ ░ ░ ░   ▒▒  ░   ░ ░ ░ ░  
   ░ ░    ░   ▒     ░   ░ ░  ░   ░  ░░░ ░ ░   ░   ▒   ░   ░     ░  
░    ░        ░           ░      ░    ░           ░       ░ ░   ░  
    </pre>`
    instantSayAtCenter("English(1)")
    instantSayAtCenter("繁體中文(2)")
    inLangMenu = true
}

async function handleLang(input){
    switch(input){
        case "1":
            init(lang.en_us)
            break
        case "2":
            init(lang.zh_tw)
            break
        default:
            instantSay(language.menu.invalid_syntax)
            break
    }
    inLangMenu = false
    setTimeout(function(){
        startMenu()
    }, 10)
}

function replacePlaceholders(str) {
    return str.replace(/{(\w+)}/g, (match, p1) => {
        // 使用 eval() 來動態地解析變數名稱
        return eval(p1);
        
    });
}

submitBtn.addEventListener('click', () => {
    submit()
})

// var menu = [
//     `<pre>
//   ██▓    ▄▄▄      ███▄    █  ▄████  █    ██  ▄▄▄      ▄████  ▓█████
//  ▓██▒   ▒████▄    ██ ▀█   █  ██▒ ▀█ ██  ▓██▒▒████▄    ██▒ ▀█ ▓█   ▀
//  ▒██░   ▒██  ▀█▄ ▓██  ▀█ ██▒▒██░▄▄▄▓██  ▒██░▒██  ▀█▄ ▒██░▄▄▄ ▒███  
//  ▒██░   ░██▄▄▄▄██▓██▒  ▐▌██▒░▓█  ██▓▓█  ░██░░██▄▄▄▄██░▓█  ██ ▒▓█  ▄
// ▒░██████▒▓█   ▓██▒██░   ▓██░▒▓███▀▒▒▒█████▓ ▒▓█   ▓██▒▓███▀▒▒░▒████
// ░░ ▒░▓  ░▒▒   ▓▒█░ ▒░   ▒ ▒ ░▒   ▒ ░▒▓▒ ▒ ▒ ░▒▒   ▓▒█░▒   ▒ ░░░ ▒░ 
// ░░ ░ ▒  ░ ░   ▒▒ ░ ░░   ░ ▒░ ░   ░ ░░▒░ ░ ░ ░ ░   ▒▒  ░   ░ ░ ░ ░  
//    ░ ░    ░   ▒     ░   ░ ░  ░   ░  ░░░ ░ ░   ░   ▒   ░   ░     ░  
// ░    ░        ░           ░      ░    ░           ░       ░ ░   ░  
//     </pre>`,
//     {
//         label: language.menu.start.new_game,
//         action: function(){
//             clearConsole()
//             chapter1(consoleText, language, sayque)
//         }
//     },
//     {
//         label: language.menu.start.choose_chapter,
//         action: function(){
//             clearConsole()
//             chapterMenu()
//         }
//     },
//     {
//         label: language.menu.start.author_list,
//         action: function(){
//             clearConsole()
//             credit()
//         }
//     },
//     {
//         label: language.menu.start.buy_coffee,
//         action: function(){
//             instantSay(language.menu.not_yet)
//         }
//     },
//     {
//         action: function() {
//             clearConsole()
//             menuToHtml(inMenu)
//         }
//     }
// ]

function menuToHtml(menu) {
    ableMove = []
    inMenu = menu
    log(menu[0])
    consoleText.innerHTML = menu[0]
    for(var i = 1; i < menu.length - 1; i++) {
        instantSayAtCenter(`${menu[i].label} (${i})`)
        ableMove.push(
            {
                trigger: `${i}`,
                action: menu[i].action
            }
        )
    }
}

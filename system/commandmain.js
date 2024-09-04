var lang = {}

var command = []

var everyCommandList = undefined

function listEveryCommandList() {
    var result = []
    console.log(command)
    command.forEach(e => {
        result.push(e.name)
    })
    console.log(result)
    return result
}

export function init(languages) {
    fetch(`lang/${languages}.json`)
        .then(async (data) => {
            lang = await data.json()
            console.log(lang)
            setupCommand(lang)
            console.log(command)
            everyCommandList = listEveryCommandList()
        })

    function setupCommand(lang) {
        command = [
            {
                name: "status",
                syntax: lang.command.syntax.status,
                description: lang.command.description.status,
                action: function (input1, input2, input3, input4, input5) {
                    printstats()
                },
            },
            {
                name: "attack",
                syntax: lang.command.syntax.attack,
                description: lang.command.description.attack,
                action: function (input1, input2, input3, input4, input5) {
                    attack()
                },
            }, {
                name: "note",
                syntax: lang.command.syntax.note,
                description: lang.command.description.note,
                action: function (input1, input2, input3, input4, input5) {
                    consoleText.innerHTML += `<p style="color:${input2};font-size:${input3}px;">${input1}</p>`
                },
            }, {
                name: "help",
                syntax: lang.command.syntax.help,
                description: lang.command.description.help,
                action: function (input1, input2, input3, input4, input5) {
                    instantSay(" ")
                    command.forEach(e => {
                        instantSay(`${e.name}`)
                        instantSay(lang.command.others.description + e.description)
                        instantSay(lang.command.others.syntax + e.syntax)
                        instantSay("&nbsp;")
                    })
                },
            }
        ]
    }
}
export function commandSetUp(lang, output) {
    // comand is not a miss spell, it's because there is a variable called command
    return [
        {
            name: "status",
            syntax: lang.command.syntax.status,
            description: lang.command.description.status,
            action: function (inputValue) {
                printstats()
            },
        },
        {
            name: "attack",
            syntax: lang.command.syntax.attack,
            description: lang.command.description.attack,
            action: function (inputValue) {
                attack()
            },
        }, {
            name: "note",
            syntax: lang.command.syntax.note,
            description: lang.command.description.note,
            action: function (inputValue) {
                output.innerHTML += `<p style="color:${inputValue[1]};font-size:${inputValue[2]}px;">${inputValue[0]}</p>`
            },
        }, {
            name: "help",
            syntax: lang.command.syntax.help,
            description: lang.command.description.help,
            action: function (inputValue) {
                instantSay(" ")
                comand.forEach(e => {
                    instantSay(`${e.name}`)
                    instantSay(lang.command.others.description + e.description)
                    instantSay(lang.command.others.syntax + e.syntax)
                    instantSay("&nbsp;")
                })
            },
        }
    ]
}
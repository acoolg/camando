var console = document.getElementById('contole');
var input = document.getElementById('input-field')

function story(text) {
    console.innerHTML += `<p>` + text + `</p>`
}
function submit() {
    story(input.value);
    input.value = ''
    console.log('a')
}

story("axaxaxaxaxax")
story("axaxaxaxaxax")
story("axaxaxaxaxax")
story("axaxaxaxaxax")
story("我xaxaxaxaxax")




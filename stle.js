const teste= ()=>{
    console.log("palavra teste")
}

let tese= teste()
console.log(tese)




function checkWord() {
    try {
        var input = document.getElementById('inputWord').value.toLowerCase();
        if (input === "banana") {
            throw 'Palavra liberada: ';
        } else {
            document.getElementById('message').textContent = 'Palavra negada: ' + input;
        }
    } catch (error) {
        document.getElementById('message').textContent = error;
    }
}
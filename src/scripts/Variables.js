
// ************************VAR

var global = "global var declarated ";
console.log('variable global1: ', global)
function nuevaFuncion() {
    var local = "local var declarated";
    console.log('variable global2: ', global)
    global = "global var local-declarated ";
}

nuevaFuncion()

console.log('variable global3: ', global)
//console.log('variable local ',local); // error: local is not defined
//console.log('variable test ',test); // global var declarated

var global = "global var re-declarated "; // se puede volver a re-declarar
console.log('variable global4: ', global)


// **************************LET

// let init = "init declarated and inizializated";
    let number = 4;

    if (number > 3) {
        let hello = "let inside block";
        console.log(hello);// "let inside bl"
    }
    console.log(hello) // hello is not defined   
                        
// Let se puede modificar su valor pero no volver a declarse en su mismo ambito.

    // let init = "first declaration";
    // let init = "re-declaration"; // error: Identifier 'init' has already been declared 
                        
// Pero se puede definir la misma variable en diferentes ambitos o contextos, esto se debe a que las variables son tratadas como variables diferentes porque estan en contextos distintos:

    let init = "first declaration"; // different context 
    let op = true
    if(op){
        let init = "re-declaration" // init is declarated in other context, inside if block
        console.log(init) // second declaration
    }
    console.log(init) // first declaration, the init variable inside if block doesn't 
// ********************* HOISTING CON VARIABLES VAR:

    console.log('Hoisting con Var sin declarar la variable: ', miVariable); // Intentamos acceder a la variable antes de declararla
    var miVariable = 10;
    console.log('Hoisting con Var declarando la variable y asignando valor: ', miVariable); // Accedemos a la variable después de declararla e inicializarla

// ********************* HOISTING CON VARIABLES LET Y CONST:

    // console.log(otraVariableLet); // Esto causará un ReferenceError 
    let otraVariableLet = 20; 
    console.log('Hoisting con Let declarando la variable y asignando valor: ', otraVariableLet); 

    // console.log(constante);  // Esto también causará un ReferenceError 
    const constante = 30;
    console.log('Hoisting con Let declarando la variable y asignando valor: ', constante);


// ********************* HOSTING CON FUNCIONES, FUNCTION:

    calcularPotenciaFunction(); // Llamamos a la función antes de su declaración
    function calcularPotenciaFunction() {
        console.log('Hoisting con Funcion, Function: ', Math.pow(2, 3)); // Output: 8
    }

    calcularPotenciaFunction(); // Llamamos a la función despues de su declaración

// HOSTING CON FUNCIONES, ARROW FUNCTION:
// ********************************* ATENCION ****************************
    
    // arrowFunctionVar(); // Error: TypeError: arrowFunctionVar is not a function
    var arrowFunctionVar = () => {
        console.log('Hoisting con Funciones, Arrow Function usando var: ',Math.pow(2, 3));
    };
    arrowFunctionVar();

    // arrowFunctionConst(); // Error: TypeError: arrowFunctionConst is not a function
    const arrowFunctionConst = () => {
        console.log('Arrow Function usando const: ',Math.pow(2, 3));
    };
    arrowFunctionConst(); 

    // arrowFunctionLet(); // Error: TypeError: arrowFunctionLet is not a function
    let arrowFunctionLet = () => {
        console.log('Hoisting con Funciones, Arrow Function usando let: ',Math.pow(2, 3));
    };
    arrowFunctionLet();    





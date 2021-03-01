var operandoa;
var operandob;
var operacion;


function init() {
    // RESULTADO 
    let resultado = document.getElementById('resultado');
    let igual = document.getElementById('igual');
    // OPERADORES 
    let suma = document.getElementById("suma");
    let resta = document.getElementById("resta");
    let multiplicacion = document.getElementById("multiplicacion");
    let division = document.getElementById("division");
    let borrar = document.getElementById("borrar");

    // NUMEROS
    const uno = document.getElementById("uno");
    const dos = document.getElementById("dos");
    const tres = document.getElementById("tres");
    const cuatro = document.getElementById("cuatro");
    const cinco = document.getElementById("cinco");
    const seis = document.getElementById("seis");
    const siete = document.getElementById("siete");
    const ocho = document.getElementById("ocho");
    const nueve = document.getElementById("nueve");
    const cero = document.getElementById("cero");




    uno.addEventListener("click", function() {
        resultado.textContent = resultado.textContent + "1";
    })
    dos.addEventListener("click", function() {
        resultado.textContent = resultado.textContent + "2";

    })
    tres.addEventListener("click", function() {
        resultado.textContent = resultado.textContent + "3";

    })
    cuatro.addEventListener("click", function() {
        resultado.textContent = resultado.textContent + "4";

    })
    cinco.addEventListener("click", function() {
        resultado.textContent = resultado.textContent + "5";

    })
    seis.addEventListener("click", function() {
        resultado.textContent = resultado.textContent + "6";

    })
    siete.addEventListener("click", function() {
        resultado.textContent = resultado.textContent + "7";

    })
    ocho.addEventListener("click", function() {
        resultado.textContent = resultado.textContent + "8";

    })
    nueve.addEventListener("click", function() {
        resultado.textContent = resultado.textContent + "9";

    })
    cero.addEventListener("click", function() {
            resultado.textContent = resultado.textContent + "0";

        })
        // BORRAR o LIMPIAR
    reset.addEventListener("click", function() {
        resultado.textContent = "";
    })

    suma.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    multiplicacion.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    division.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    igual.onclick = function(e) {
        operandob = resultado.textContent;
        resolver();
    }

}

function limpiar() {
    resultado.textContent = "";
}

function resetear() {
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver() {
    var res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;

        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;

        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;

        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
    }
    resetear();
    resultado.textContent = res;
}
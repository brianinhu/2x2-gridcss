
/* SUMA */
var boton = document.getElementById("btncalcular-s");

boton.addEventListener("click", () => {

    let n1 = parseInt(document.getElementById("num1").value);
    let n2 = parseInt(document.getElementById("num2").value);

    let respuesta = n1 + n2;

    document.getElementById("resultado-s").innerHTML = respuesta;
});
/* SUMA */

/* RESTA */
var boton = document.getElementById("btncalcular-r");

boton.addEventListener("click", () => {

    let n1 = parseInt(document.getElementById("num3").value);
    let n2 = parseInt(document.getElementById("num4").value);

    let respuesta = n1 - n2;

    document.getElementById("resultado-r").innerHTML = respuesta;
});
/* RESTA */

/* MULTIPLICACION */
var boton = document.getElementById("btncalcular-m");

boton.addEventListener("click", () => {

    let n1 = parseInt(document.getElementById("num5").value);
    let n2 = parseInt(document.getElementById("num6").value);

    let respuesta = n1 * n2;

    document.getElementById("resultado-m").innerHTML = respuesta;
});
/* MULTIPLICACION */

/* DIVISION */
var boton = document.getElementById("btncalcular-d");

boton.addEventListener("click", () => {

    let n1 = parseInt(document.getElementById("num7").value);
    let n2 = parseInt(document.getElementById("num8").value);

    let respuesta = n1 / n2;

    document.getElementById("resultado-d").innerHTML = respuesta;
});
/* DIVISION */
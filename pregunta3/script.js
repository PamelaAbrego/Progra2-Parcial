function agregarFila() {
    var numRows = document.getElementById("table1").getElementsByTagName('tr').length - 1;
    var tabla = document.getElementById("table1");
    var numero1 = parseInt(document.getElementById("n1").value);
    var numero2 = parseInt(document.getElementById("n2").value);

    var resultado = numero1 + numero2

    if (resultado == 10) {
        var status = "10=";
    } else {
        if (resultado <= 10) {
            var status = "10-";
        } else {
            var status = "10+";
        }
    }

    var row = tabla.insertRow(numRows + 1);
    var celda1 = row.insertCell(0);
    celda1.innerHTML = numero1;
    var celda2 = row.insertCell(1);
    celda2.innerHTML = numero2;
    var celda3 = row.insertCell(2);
    celda3.innerHTML = resultado;
    var celda4 = row.insertCell(3);
    celda4.innerHTML = status;
}

function sumarResultados() {
    var numRows = document.getElementById("table1").getElementsByTagName('tr').length - 1;
    var tabla = document.getElementById("table1");
    var suma = 0;
    for (var i = 1; i <= numRows; i++) {
        var numeroActual = tabla.rows[i].cells[2].innerHTML;
        var numero = parseInt(numeroActual);
        suma = suma + numero;
    }
    alert(suma)
}
function eleccion(num) {
    var rta = "";
    switch (num) {
        case '1':
            rta = ej1();
            break;
        case '2':
            $('#ejecutar').hide();
            $('#ej2').show();
            break;
        case '3':
            var user = prompt('Ingrese su nombre:', 'NN');
            var email = prompt('Ingrese su correo', 'example@example.com')
            rta = 'Hola ' + user + ', su correo es: ' + email;
            break;
        case '4':
            $('#ejecutar').hide();
            $('#ej4').show();
            break;
        case '5':
            rta = eje5();
            break;
        case '6':
            $('#ejecutar').hide();
            $('#ej6').show();
            break;
        case '7':
            $('#ejecutar').hide();
            $('#ej7').show();
            break;
        case '8':
            $('#ejecutar').hide();
            $('#ej8').show();
            break;
        case '9':
            rta = ej9();
            break;
        case '10':
            $('#ejecutar').hide();
            $('#ej10').show();
            break;
        case '11':
            rta = ej11();
            break;
        default:
            rta = "Ingrese una opcion valida";
            break;
    }
    document.getElementById("result").innerHTML = rta;
}

function ej1() {
    return "Nombre: Ana Milena Hernandez\nEdad: 25 años";
}

function ej2() {
    var nombre = $('#inNombre').val();
    var sueldo = $('#inSueldo').val();

    $('#ej2').hide();
    $('#ejecutar').show();

    document.getElementById("result").innerHTML = 'Nombre: ' + nombre + '\nSueldo: ' + sueldo;
}

function ej4() {
    var lado = $('#lado').val();
    var n1 = $('#n1').val();
    var n2 = $('#n2').val();
    var n3 = $('#n3').val();
    var n4 = $('#n4').val();
    var n5 = $('#n5').val();
    var n6 = $('#n6').val();
    var n7 = $('#n7').val();
    var n8 = $('#n8').val();
    var cantidad = parseInt($('#cantidad').val());
    var precio = parseInt($('#precio').val());

    lado = parseInt(lado) * 4;
    sumaA = parseInt(n1) + parseInt(n2);
    multA = parseInt(n3) * parseInt(n4);
    sumaB = parseInt(n5) + parseInt(n6) + parseInt(n7) + parseInt(n8);
    multB = parseInt(n5) * parseInt(n6) * parseInt(n7) * parseInt(n8);
    if (precio < 0) {
        alert("El precio unitario no puede ser negativo")
    } else if (cantidad <= 0) {
        alert("La cantidad no puede ser menor que 1")
    } else {
        document.getElementById("result").innerHTML = 'Solucion:\n1. Perimetro del cuadrado: '
            + lado + '\n2.a) Suma de los 2 primeros = ' + sumaA + ' Producto de los 2 ultimos = ' + multA
            + "\n2.b) Suma = " + sumaB + " Producto = " + multB + "\n3. Importe total = " + precio * cantidad;
    }
    $('#ej4').hide();
    $('#ejecutar').show();
}

function eje5() {
    var s = 0;
    var i = 0;
    var cr;
    do {
        var n = prompt('Ingrese la nota ' + (i + 1) + ' :', 0);
        n = parseInt(n);
        if (n >= 0 && n <= 5) {
            s += n;
            i++;
        } else {
            alert('Valor no valido, rango 0-5')
        }

    } while (i < 3);

    var c1 = prompt('Ingrese su clave ', '');
    var c2 = prompt('Confirme su clave ', '');
    if (c1 == c2) {
        cr = 'Clave correcta'
    } else {
        cr = 'Claves son diferentes'
    }
    return 'Promedio = ' + (s / 3) + '\n' + cr;
}

function ej6() {
    var r;
    var prom = 0;
    var n1 = parseInt($('#n1_6').val());
    var n2 = parseInt($('#n2_6').val());
    var n3 = parseInt($('#n3_6').val());
    var n5 = parseInt($('#n5_6').val());
    var n6 = parseInt($('#n6_6').val());
    var n7 = parseInt($('#n7_6').val());

    if (n1 > n2) {
        r = '1. Suma = ' + (n1 + n2) + ' Resta = ' + (n1 - n2);
    } else {
        r = '1. Multiplicación = ' + (n1 * n2) + ' Divición = ' + (n1 / n2);
    }

    prom = (n5 + n6 + n7) / 3;
    if (prom >= 3) {
        r += '\n2. Promedio ' + prom + ', APROVADO ^_^ .'
    } else {
        r += '\n2. Promedio ' + prom + ', REPROVADO T_T .'
    }

    if (num < 10) {
        r += '\nEl valor ingresado tiene un dígito';
    }
    else {
        r += '\nEl valor ingresado tiene dos dígitos';
    }
    document.getElementById("result").innerHTML = 'Solución:\n' + r;
    $('#ej6').hide();
    $('#ejecutar').show();
}

function ej7() {
    var r;
    var n1 = parseInt($('#n1_7').val());
    var n2 = $('#n2_7').val();
    var n5 = parseInt($('#n5_7').val());
    var n6 = parseInt($('#n6_7').val());
    var n7 = parseInt($('#n7_7').val());
    var n8 = parseInt($('#n8_7').val());
    var n9 = parseInt($('#n9_7').val());
    var t1 = $('#t1_7').val()

    if (n5 > n6) {
        if (n5 > n7) {
            r = '1.El numero mayor es ' + n5;
        } else {
            r = '1.El numero mayor es ' + n7;
        }
    } else {
        if (n6 > n7) {
            r = '1.El numero mayor es ' + n6;
        } else {
            r = '1.El numero mayor es ' + n7;
        }
    }

    if (n1 > 0) {
        r += '\n2.El numero es positivo';
    } else if (n1 < 0) {
        r += '\n2.El numero es negativo';
    } else {
        r += '\n2.El numero es cero';
    }

    r += '\n3.El numero tiene ' + n2.length + ' cifras.';

    var por = (n9 * 100) / n8

    if (por >= 90) {
        r += '\n4.Postulante ' + t1 + ': nivel superior';
    } else if (por >= 75 && por < 90) {
        r += '\n4.Postulante ' + t1 + ': nivel medio';
    } else if (por >= 50 && por < 75) {
        r += '\n4.Postulante ' + t1 + ': nivel regular';
    } else {
        r += '\n4.Postulante ' + t1 + ': fuera de nivel';
    }

    document.getElementById("result").innerHTML = 'Solución:\n' + r;
    $('#ej7').hide();
    $('#ejecutar').show();
}

function ej8() {
    var r;
    var n1 = parseInt($('#n1_8').val());
    var n2 = parseInt($('#n2_8').val());
    var n3 = parseInt($('#n3_8').val());
    var n4 = parseInt($('#n4_8').val());
    var n5 = parseInt($('#n5_8').val());
    var n6 = parseInt($('#n6_8').val());
    var n7 = parseInt($('#n7_8').val());
    var n8 = parseInt($('#n8_8').val());
    var n9 = parseInt($('#n9_8').val());
    var n10 = parseInt($('#n10_8').val());
    var n11 = parseInt($('#n11_8').val());
    var n12 = parseInt($('#n12_8').val());
    var n13 = parseInt($('#n13_8').val());

    if (n1 == 25 && n2 == 12) {
        r = '1.La fecha ingresada corresponde a navidad';
    } else {
        r = '1.La fecha ingresada NO corresponde a navidad';
    }

    if (n4 == n5 && n4 == n6) {
        r += '\n2.Rta = ' + (n3 + n4) * n5;
    } else {
        r += '\n2.Rta = Los numeros son diferentes';
    }

    if (n7 < 10 && n8 < 10 && n9 < 10) {
        r += '\n3.Los numeros son menores que 10';
    }

    if (n10 > 0 && n11 > 0) {
        r += '\n4.Coordenadas en el cuadrante 1';
    } else if (n10 < 0 && n11 > 0) {
        r += '\n4.Coordenadas en el cuadrante 2';
    } else if (n10 < 0 && n11 < 0) {
        r += '\n4.Coordenadas en el cuadrante 3';
    } else if (n10 > 0 && n11 < 0) {
        r += '\n4.Coordenadas en el cuadrante 4';
    }

    var aumento = 0;

    if (n12 < 500 && n13 >= 10) {
        aumento = n12 * 0.2;
    } else if (n12 < 500 && n13 < 10) {
        aumento = n12 * 0.05;
    }

    r += '\n5.Es sueldo es:' + (n12 + aumento);

    document.getElementById("result").innerHTML = 'Solución:\n' + r;
    $('#ej7').hide();
    $('#ejecutar').show();
}

function ej9() {
    var s, n;
    for (let i = 0; i < 3; i++) {
        n = prompt('Ingrese un numero', '0');
        if (n < 10) {
            s = 'Alguno de los números es menor a diez';
        }
    }
    return s;
}

function ej10() {
    var op = $('#lista').val(), r;

    switch (op) {
        case 'c':
            r = 'House';
            break;
        case 'm':
            r = 'Table';
            break;
        case 'p':
            r = 'Dog';
            break;
        case 'g':
            r = 'Cat';
            break;
        default:
            break;
    }

    document.getElementById("result").innerHTML = 'Traducción: ' + r;
    $('#ej10').hide();
    $('#ejecutar').show();
}

function ej11() {
    var s = '11', m = '8', n=0, cont = 2;
    for (let i = 2; i < 26; i++) {
        s += ' - '+(i*11);
    }
    do {
        n=8*cont;
        m += ' - '+n;
        cont++;
    } while (n<500);

    return 'Serie: '+s+'\nMultiplos de 8: '+m;
}
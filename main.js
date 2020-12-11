var a = parseInt(prompt('Introduce el valor de a'))
var b = parseInt(prompt('Introduce el valor de b'))
//var c = parseInt(prompt('Introduce el valor de c'))



if (!isNaN(a)  && !isNaN(b)) {
    document.writeln(a + '<br>')
    document.writeln(b + '<br>')
    quienEsMayor(a,b)
}else{
    alert('NO INGRESASTE UN NUMERO BIEN intenta nuevamente')
}

function quienEsMayor(a, b){
    if (a > b) {
        document.writeln('El numero mayor es = ' + a)
    } else if ( b > a) {
        document.writeln('El numero mayor es = ' + b)
    } else {
        document.writeln('Los numeros son iguales no le hagas al cuento')
    }
    
}



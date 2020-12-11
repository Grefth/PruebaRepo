var modelo
var color
var numeroSerie
var placa

function crearCarro(modelo, color, numeroSerie, placa) {
    this.modelo = modelo;
    this.color = color;
    this.numeroSerie = numeroSerie
    this.placa = placa
}

    var vento = new crearCarro('2018', 'blanco', 14280530, 'AWS-1228')
    var jetta = new crearCarro('2019', 'gris', 14280531, 'JTA-1229')
    var cacharrito = new crearCarro('2020', 'blanco', 14280532, 'MACH-1230')


var carros = [
    vento,
    jetta,
    cacharrito
];

console.log(carros[0]);




$("#btnInicio").click(function(){
    $("#texto").text("nuevo texto con JQUERY");
});

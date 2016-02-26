var peso = 100;
var altura = 2.0;

var tdPeso = document.getElementById("peso-2");
var tdAltura = document.getElementById("altura-2");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var paciente = {
	peso : peso,
	altura : altura
}

if (paciente.altura != 0){
	var imc = paciente.peso / (paciente.altura * paciente.altura);
	//var imc = paciente["peso"] / (paciente["altura"] * paciente["altura"]);

	var tdImc = document.getElementById("imc-2");
	tdImc.textContent = imc;

}else{
	console.log("Erro! altura não pode ser igual a zero.");
}

console.log(imc);
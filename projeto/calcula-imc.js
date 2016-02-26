
var trPacientes = document.getElementsByClassName("paciente"); // cria array de trs

for(var posicaoAtual = 0; posicaoAtual <= trPacientes.length - 1; posicaoAtual++){

	var pacienteTr = trPacientes[posicaoAtual];
	var tdNome = pacienteTr.getElementsByClassName("info-nome")[0]; //[0] para pegar sempre a posição atual
	var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
	var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];

	var paciente = {
		nome : tdNome.textContent,
		peso : tdPeso.textContent,
		altura: tdAltura.textContent
	}


	if (paciente.altura != 0){
		var imc = paciente.peso / (paciente.altura * paciente.altura);
		//var imc = paciente["peso"] / (paciente["altura"] * paciente["altura"]); //também pode-se usar esta notação

		var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
		tdImc.textContent = imc;
		console.log(imc);

	}else{

		console.log("Erro! altura não pode ser igual a zero.");
	}
}
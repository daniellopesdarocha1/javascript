var posicaoAtual = 0;

function percorreArray(trPacientes, comportamento){
	for(var posicaoAtual = 0; posicaoAtual <= trPacientes.length - 1; posicaoAtual++){
		var pacienteTrAtual = trPacientes[posicaoAtual];

		comportamento(pacienteTrAtual);
	}
}
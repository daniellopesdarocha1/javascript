var botao = document.getElementById("calcula-imcs");
//botao.onclick = calculaTodosImcs; // só aceita um evento para o botao

botao.addEventListener("click", function (){

	var trPacientes = document.getElementsByClassName("paciente"); // cria array de trs

	percorreArray(trPacientes, function(pacienteTr){
		var tdNome = pacienteTr.getElementsByClassName("info-nome")[0]; //[0] para pegar sempre a posição atual
		var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
		var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];

		var pacienteAtual = {
			nome : tdNome.textContent,
			peso : tdPeso.textContent,
			altura: tdAltura.textContent,
			pegaImc : function(){
					if (this.altura != 0){

						var imc = this.peso / (this.altura * this.altura);
						return imc;

					}else{

						console.log("Erro! altura não pode ser igual a zero.");

					}
			}
		};


		var imc = pacienteAtual.pegaImc();

		var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
		tdImc.textContent = imc;

		console.log(imc);

	});

});
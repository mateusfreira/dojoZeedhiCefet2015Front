
function Jogador (){
	var pontuacao = 0;
	var game = 0;
	var vantagem = false;

	this.setPontuacao = function(pontuacao){
		this.pontuacao = pontuacao;
	};

	this.getPontuacao = function(){
		return this.pontuacao;
	};

	this.incrementaPontuacao=function (pontuacao){
		this.pontuacao += pontuacao;
	};


	this.setGame=function (game){
		this.game = game;
	};

	this.getGame=function (){
		return this.game;
	};

	this.incrementaGame=function () {
		this.game++;
	};


	this.setVantagem=function (vantagem){
		this.vantagem = vantagem;
	};

	this.isVantagem=function(){
		return this.vantagem;
	};
}
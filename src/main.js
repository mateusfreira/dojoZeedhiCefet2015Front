

var Jogo = {

	p : [new Jogador(), new Jogador()],

	getPontuacao : function(){
		return this.p[0].getPontuacao() + ":" +	this.p[1].getPontuacao();
	},

	setPontuacoes : function(p1, p2) {
		this.p[0].setPontuacao(p1);
		this.p[1].setPontuacao(p2);
	},

	atualizaPontuacao : function(pontuador) {
		if(this.p[pontuador].getPontuacao() < 30){
			this.p[pontuador].incrementaPontuacao(15);
		}
		else if (this.p[pontuador].getPontuacao() == 30) {
			this.p[pontuador].incrementaPontuacao(10);
		}
		else if (this.p[pontuador].getPontuacao() == 40){
			if (this.p[0].getPontuacao() == this.p[1].getPontuacao()) {
				this.setVantagem(pontuador);	
			}
			else{
				this.ganhaGame(pontuador);
			}
		}

		return this.getPontuacao();
	},

	setGames : function (g1, g2) {
		this.p[0].setGame(g1);
		this.p[1].setGame(g2);
	},

	setVantagem : function(pontuador) {

		if (this.p[pontuador].isVantagem()) {
			this.ganhaGame(pontuador);
		}
		else {
			this.p[pontuador].setVantagem(true);
			if (this.p[0].isVantagem() && this.p[1].isVantagem()) {
				this.deuce();
			}
		}
	},

	deuce : function() {
		this.p[0].setVantagem(false);
		this.p[1].setVantagem(false);
	},

	ganhaGame : function(jogador) {
		this.p[jogador].incrementaGame();
		this.p[0].setPontuacao(0);
		this.p[1].setPontuacao(0);
		this.deuce();
	},

	getGames : function(){
		return this.p[0].getGame() + ":" + this.p[1].getGame();

	},
	
	quemVantagem : function(){
		if (this.p[0].isVantagem()){
			return 0;        
		}
		if(this.p[1].isVantagem()){
			return 1;
		} else return -1;
	}
};


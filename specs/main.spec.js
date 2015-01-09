describe("pontos", function() {

  beforeEach(function() {
    Jogo.setPontuacoes(0, 0);
    Jogo.setGames(0,0);
  });
  it("O deve começar como 0:0", function() {    
    expect(Jogo.getPontuacao()).toBe("0:0");
    expect(Jogo.getGames()).toBe("0:0");
  });

  it("Jogador p1 pontua com 0:0",function(){
    expect(Jogo.atualizaPontuacao(0)).toBe("15:0");
  });


  it("Jogador p1 pontua com 15:0",function(){
    Jogo.setPontuacoes(15, 0);
    expect(Jogo.atualizaPontuacao(0)).toBe("30:0");
  });

  it("Jogador p1 pontua com 30:0",function(){
    Jogo.setPontuacoes(30, 0);
    expect(Jogo.atualizaPontuacao(0)).toBe("40:0");
  });

  it("Jogador p2 pontua com 40:0",function(){
    Jogo.setPontuacoes(40, 0);
    expect(Jogo.atualizaPontuacao(1)).toBe("40:15");

  });
  
  it("Jogador p2 pontua com 40:30",function(){
    Jogo.setPontuacoes(40, 30);
    expect(Jogo.atualizaPontuacao(1)).toBe("40:40");
  });

  it("Jogador p2 pontua com 40:40", function(){
    Jogo.setPontuacoes(40, 40);
    expect(Jogo.atualizaPontuacao(1)).toBe("40:40");
    expect(Jogo.quemVantagem()).toBe(1);
  });
  it("Jogador p1 pontua com 40:30",function(){
    Jogo.setPontuacoes(40, 30);
    expect(Jogo.atualizaPontuacao(0)).toBe("0:0");
    expect(Jogo.getGames()).toBe("1:0");
  });
  it("Jogador p2 quando jogador p1 esta em vantagem", function(){
    Jogo.setPontuacoes(40, 40);
    Jogo.atualizaPontuacao(0);
    Jogo.atualizaPontuacao(1);
    expect(Jogo.quemVantagem()).toBe(-1);

  });
  it("Jogador p1 ganhar por vantagem", function(){
    Jogo.setPontuacoes(40, 40);
    Jogo.atualizaPontuacao(0);
    expect(Jogo.quemVantagem()).toBe(0);
    Jogo.atualizaPontuacao(0);
    expect(Jogo.getGames()).toBe("1:0");
  });

  /*it("O metodo soma deve divisao dois numeros", function() {
    expect(Calculadora.divisao(4,2)).toBe(2);
    expect(Calculadora.divisao(9,3)).not.toBe(4);
  });*/  
});
class VerifyWinner{
    constructor(c, placar){
        this.c = c;
        this.placar = placar;
    }

draw(){
       if (pontoJogador1 == 2 || pontoJogador2 == 2)
       {
        if (pontoJogador1 > pontoJogador2)
        {
            setTimeout(() => {
                textWinner="parabens voce ganhou pacoca";
                this.placar.resetScore();
            },1000);
        }
        else
        {
         setTimeout(() => {
            textWinner="parabens voce perdeu pacoca";
            this.placar.resetScore();
         },1000);
        }
       }

       this.c.font="70px arial";
       this.c.fillStyle = "black";
       this.c.fillText(textWinner, 100, this.c.canvas.height - 100,this.c.canvas.width);
    }
}
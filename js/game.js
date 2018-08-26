window.onload = function(){
    let player = 0;
    let pc = 0;

    //Botões
    //Pedra
    let btn_pedra = document.getElementById("btn_pedra");
    btn_pedra.onclick = function(){
        jogar("Pedra");
    };

    //Papel
    let btn_papel = document.getElementById("btn_papel");
    btn_papel.onclick = function(){
        jogar("Papel");
    };
    
    //Tesoura
    let btn_tesoura = document.getElementById("btn_tesoura");
    btn_tesoura.onclick = function(){
        jogar("Tesoura");
    }

    //Reiniciar
    let btn_reiniciar = document.getElementById("btn_reiniciar");
    btn_reiniciar.onclick = function(){
        reiniciar();
    }

    //Jogada do player
    function jogar(jogadaPlayer) {
        let jogadaPC = jogarPC();
        let resultado;

        //Coloca a jogada do player e do pc na tela
        document.getElementById("jogada_player").innerHTML = jogadaPlayer;
        document.getElementById("jogada_PC").innerHTML = jogadaPC;

        //Verifica quem ganhou  
        if(jogadaPlayer === jogadaPC)
            resultado = "Empate.";
        else if(jogadaPlayer === "Pedra" && jogadaPC === "Tesoura"
                || jogadaPlayer === "Papel" && jogadaPC === "Pedra"
                || jogadaPlayer === "Tesoura" && jogadaPC === "Papel"){
                    player++;
                    resultado = jogadaPlayer + " ganha de " + jogadaPC + 
                        ". Você venceu.";
                }
        else{
            pc++;
            resultado = jogadaPlayer + " perde para " + jogadaPC + 
                        ". Você perdeu."
        }


        document.getElementById("resultado").innerHTML = resultado;
        document.getElementById("placar_player").innerHTML = player;
        document.getElementById("placar_PC").innerHTML = pc;
    };

    //Jogada do PC
    function jogarPC(){
        let r = Math.floor(Math.random() * 3) + 1;

        if(r === 1)
            return "Pedra";
        else if(r === 2)
            return "Papel";
        else
            return "Tesoura";
    };

    function reiniciar() {
        //Reseta os placares, jogadas e resultado.
        document.getElementById("jogada_player").innerHTML = "Jogada";
        document.getElementById("jogada_PC").innerHTML = "Jogada";
        document.getElementById("resultado").innerHTML = "Faça sua jogada.";
        document.getElementById("placar_player").innerHTML = 0;
        document.getElementById("placar_PC").innerHTML = 0;
        player = 0;
        pc = 0;
    }; 
};
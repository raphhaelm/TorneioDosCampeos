let lut1 = document.querySelector('#lut1');
lut1.textContent = `Justin Gaethje`;

let lut2 = document.querySelector("#lut2");

let instrucao = document.querySelector('.instrucao');
let res = document.querySelector('.separador');
let btn = document.querySelector('#nextLevel');
let reset = document.querySelector('#btn');
let btnLutar = document.querySelector('.btn Lutar');

btn.disabled = true;
reset.disabled = true;
let pontos = 0

function modoLuta() {
for (pontos ; pontos <= 5; pontos++){
    let categoria = prompt(`Ataque com ?
    escolha de 1 a 4.
    1- Jiu-jitsu 2- Judô 3- Capoeira 4- Muay-thay`);

    if(pontos >= 2){
        res.textContent = "Classificado! ";
        instrucao.textContent = `Nocate! ${lut1.textContent} finaliza a luta e avança para proxima luta`;
        btn.disabled = false;
        btnLutar.disabled = true;
        break;
    } else if( pontos <= -3) {
        res.textContent = " ";
        instrucao.textContent = `GAME OVER!`;
        reset.disabled = false;
        break;
    }else if (categoria == 1) {
        instrucao.textContent = `${lut1.textContent} tenta aplicar uma chave de braço, criando problemas para o adversario.
            Ganhou 1 ponto`;
            pontos++;
        res.textContent = `Pontos = ${pontos}`;
        break;
    } else if (categoria == 2) {
        instrucao.textContent = `${lut1.textContent} chegou perto demais. O Brasileiro o agarra e arremessa ao chão.
        Perdeu 2 pontos`;
        pontos = pontos - 2;
        res.textContent = `Pontos = ${pontos}`;
        break; 
    } else if (categoria == 3) {
        instrucao.textContent = `Incrível, o brasileiro esbanja habilidade na capoeira.
        ${lut2.textContent} da show
        Perdeu 1 ponto.`;
        pontos = pontos - 1 
        res.textContent = `Pontos = ${pontos}`;
        break;
    } else if (categoria == 4) {
        instrucao.textContent = `O brasileiro tenta encarar uma luta franca e recebe um poderoso chuta. ${lut2.textContent} acerta em cheio. Será o fim?
        Ganhou 2  pontos.`;
        pontos = pontos + 2;
        res.textContent = `Pontos = ${pontos}`;
        break;        
    } else {
       modoLuta();
    }
}
}

function modoLutaFinal() {
    {
        for (pontos ; pontos <= 7; pontos++){
            let categoria = prompt(`Ataque com ?
            escolha de 1 a 4.
            1- Judô 2- Muay-thay 3- Box 4- Jiu-jitsu`);
        
            if(pontos >= 6){
                res.textContent = "CAMPEÃO!!!";
                instrucao.textContent = `Nocate! ${lut1.textContent} temos um novo Campeão!`;
                btn.disabled = false;
                btnLutar.disabled = true;
                break;
            } else if( pontos <= -3) {
                res.textContent = " ";
                instrucao.textContent = `GAME OVER! Não foi dessa vez. Tente novamente no próximo torneio`;
                reset.disabled = false;
                break;
            }else if (categoria == 1) {
                instrucao.textContent = `${lut1.textContent} tenta derrubar ${lut2.textContent} mas, não consegue. 
                Perdeu 1 ponto`;
                pontos = pontos - 1;
                res.textContent = `Pontos = ${pontos}`;
                break;
            } else if (categoria == 2) {
                instrucao.textContent = `${lut1.textContent} chuta a perna do
                ${lut2.textContent} Parece que doeu.
                Ganhou 1 ponto`;
                pontos++;
                res.textContent = `Pontos = ${pontos}`;
                break; 
            } else if (categoria == 3) {
                instrucao.textContent = `Bela troca de socos, mas no Box ${lut1.textContent} É O MELHOR.
                Ganhou 3 pontos.`;
                pontos = pontos + 3;
                res.textContent = `Pontos = ${pontos}`;
                break;
            } else if (categoria == 4) {
                instrucao.textContent = `${lut2.textContent} é o rei das finalizações, Você está em uma enrrascada.
                Perdeu 3 pontos`;
                pontos = pontos - 3;
                res.textContent = `Pontos = ${pontos}`;
                break;        
            } else {
               modoLuta();
            }
        }
        }
}




let lut1 = document.querySelector('#lut1');
lut1.textContent = `Rafael dos Anjos`;

let lut2 = document.querySelector("#lut2");

let instrucao = document.querySelector('.instrucao');
let res = document.querySelector('.separador');
let btn = document.querySelector('#nextLevel');
let reset = document.querySelector('#btn');
let btnLutar = document.querySelector('.btnLutar');

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
        instrucao.textContent = `${lut1.textContent} tenta aplicar uma chave de braço, porém ${lut2.textContent} é
            especialista em Jiu-jist e se defende bem.
            Perdeu 2 pontos`;
            pontos = pontos - 2;
        res.textContent = `Pontos = ${pontos}`;
        break;
    } else if (categoria == 2) {
        instrucao.textContent = `${lut1.textContent} usa a sua especialista. Osoto Gari, ponto para o brasileiro.
        Ganhou 2 pontos`;
        pontos = pontos + 2;
        res.textContent = `Pontos = ${pontos}`;
        break; 
    } else if (categoria == 3) {
        instrucao.textContent = `Incrível, o brasileiro esbanja habilidade na capoeira.
        ${lut1.textContent} da show
        Ganhou 1 ponto.`;
        pontos++;
        res.textContent = `Pontos = ${pontos}`;
        break;
    } else if (categoria == 4) {
        instrucao.textContent = `O brasileiro tenta encarar uma luta franca e recebe um poderoso chuta. ${lut2.textContent} acerta em cheio. Será o fim?
        Perdeu 1 ponto.`;
        pontos = pontos - 1;
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
            1- MMA 2- Luta Livre 3- Capoeira 4- Judô`);
        
            if(pontos >= 6){
                res.textContent = "CAMPEÃO!!!";
                instrucao.textContent = `Nocate! ${lut1.textContent} temos um novo Campeão!`;
                btn.disabled = false;
                btnLutar.disabled = true;
                break;
            } else if( pontos <= -2) {
                res.textContent = " ";
                instrucao.textContent = `GAME OVER! Não foi dessa vez. Tente novamente no próximo torneio`;
                reset.disabled = false;
                break;
            }else if (categoria == 1) {
                instrucao.textContent = `${lut1.textContent} se arrisca na modalidade MMA. ${lut2.textContent} gostou disso. 
                    Rafael perdeu 2 pontos`;
                    pontos = pontos - 2;
                res.textContent = `Pontos = ${pontos}`;
                break;
            } else if (categoria == 2) {
                instrucao.textContent = `${lut1.textContent} partiu para Luta-livre.
                ${lut2.textContent} não se intimida e acerta novamente.
                Rafael perde 1 ponto`;
                pontos = pontos - 1 ;
                res.textContent = `Pontos = ${pontos}`;
                break; 
            } else if (categoria == 3) {
                instrucao.textContent = `Incrível, o brasileiro esbanja habilidade na capoeira.
                ${lut1.textContent} da show
                Ganhou 1 ponto.`;
                pontos++;
                res.textContent = `Pontos = ${pontos}`;
                break;
            } else if (categoria == 4) {
                instrucao.textContent = `${lut1.textContent} Consegue segurar ${lut2.textContent} e o lança no tatami. Acerta em cheio. Será o fim?
                Ganho 2 pontos.`;
                pontos = pontos + 2;
                res.textContent = `Pontos = ${pontos}`;
                break;        
            } else {
               modoLuta();
            }
        }
        }
}




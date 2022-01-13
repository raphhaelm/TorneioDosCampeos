let lut1 = document.querySelector('#lut1');
lut1.textContent = `Charles do Bronxs`;

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
    1- Jiu-jitsu 2- MMA 3- Box 4- Muay-thay`);

    if(pontos >= 3){
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
        instrucao.textContent = `${lut1.textContent} aplica uma chave de braço e ${lut2.textContent} 
            sente o golpe. Será que quebrou?
            Ganho 2 pontos`;
            pontos = pontos + 2;
        res.textContent = `Pontos = ${pontos}`;
        break;
    } else if (categoria == 2) {
        instrucao.textContent = `${lut1.textContent} usa chutas e socos no estilo livre. Justin se defende mas acaba levando um golpe.
        Ganhou 1 ponto1`;
        pontos++;
        res.textContent = `Pontos = ${pontos}`;
        break; 
    } else if (categoria == 3) {
        instrucao.textContent = `Incrível, o brasileiro tenta Jebs. Especialidade de Justin.
        Perdeu 1 ponto.`;
        pontos = pontos -1 ;
        res.textContent = `Pontos = ${pontos}`;
        break;
    } else if (categoria == 4) {
        instrucao.textContent = `O brasileiro tenta encarar uma luta franca e recebe um poderoso chuta. ${lut2.textContent} acerta em cheio. Será o fim?
        Perdeu 2 ponto.`;
        pontos = pontos - 2;
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
            1- MMA 2- Judô 3- Capoeira 4- Jiu-jitsu`);
        
            if(pontos >= 6){
                res.textContent = "CAMPEÃO!!!";
                instrucao.textContent = `Nocate! ${lut1.textContent} o cinturão fica em casa`;
                btn.disabled = false;
                btnLutar.disabled = true;
                break;
            } else if( pontos <= -3) {
                res.textContent = " ";
                instrucao.textContent = `GAME OVER! Não foi dessa vez. Tente novamente no próximo torneio`;
                reset.disabled = false;
                break;
            }else if (categoria == 1) {
                pontos++;
                instrucao.textContent = `${lut1.textContent} se arrisca na modalidade MMA. ${lut2.textContent} gostou disso. 
                    do Bronxs Ganhou 1 ponto`;
                res.textContent = `Pontos = ${pontos}`;
                break;
            } else if (categoria == 2) {                
                pontos = pontos - 2 ;
                instrucao.textContent = `${lut1.textContent} chegou perto demais.
                ${lut2.textContent} o agarra e derruba.
                do Bronxs perde 2 pontos`;
                res.textContent = `Pontos = ${pontos}`;
                break; 
            } else if (categoria == 3) {
                pontos = pontos - 1;
                instrucao.textContent = `Incrível, ${lut2.textContent} acerta um chute na cabeça. Será o fim?
                Perdeu 2 pontos`;
                res.textContent = `Pontos = ${pontos}`;
                break;
            } else if (categoria == 4) {
                instrucao.textContent = `${lut1.textContent} Consegue aplicar um Armelock Voador no ${lut2.textContent}. Ele não tem como sair.
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




var forca = 7;
var fortalece = 7;
let valorForca = document.querySelector('.frc');
// Funcionando sem a repetição
function treinoRafael(stilo) {
    if (stilo == "Judô" && forca < 20) {
        forca = forca + 3;
        valorForca.textContent = (` ${forca}`);
        alert('Treine mais para este evento;');
        if (forca > 20) {
            alert('Você está pronto! This is TIME!')
        }
        return;
    } else if (stilo == "Jiujitsu" && forca <= 20) {
        forca = forca + 5;
        valorForca.textContent = (` ${forca}`);
        alert('Treine mais para este evento;');
        if (forca > 20) {
            alert('Você está pronto! This is TIME!')
        }
        return
    } else if (stilo == "Muaythay" && forca <= 20) {
        forca = forca + 4;
        valorForca.textContent = (` ${forca}`);
        alert('Treine mais para este evento;');
        if (forca > 20) {
            alert('Você está pronto! This is TIME!')
        }
        return
    } else if (stilo == "Capoeira" && forca <= 20) {
        forca = forca + 2;
        valorForca.textContent = (` ${forca}`);
        alert('Treine mais para este evento;');
        if (forca > 20) {
            alert('Você está pronto! This is TIME!')
        }
        return
    } else {
        fortalece = 7;
    }
}
let lut1 = document.querySelector('#lut1');
lut1.textContent = `Rafael dos Anjos`;

let lut2 = document.querySelector("#lut2");
console.log(lut2.textContent);
let winner = 0;

let instrucao = document.querySelector('.instrucao');
let res = document.querySelector('.separador');
let btn = document.querySelector('#nextLevel');
let reset = document.querySelector('#btn');


btn.disabled = true;
reset.disabled = true;
function figth(luta) {
    if (luta == 'muaythay' && winner <= 7) {
        winner--;
        instrucao.textContent = `${lut1.textContent} na trocação, mas ${lut2.textContent} devolve com chutes e cotoveladas violentas`;
        res.textContent = `Winner: ${winner}`;
        if(winner <= -1){
            reset.disabled = false;
            instrucao.textContent = `GAME OVER
            você foi derrotado pelo campeão`;
        }
        return winner;
    } else if (luta == 'capoeira' && winner <= 4) {
        winner++;
        instrucao.textContent = `${lut1.textContent} você é RIDICULO, ele acertou um rabo de arria na cabeça do ${lut2.textContent}`;
        res.textContent = `Winner: ${winner}`;
               return winner;
    } else if (luta == 'judo' && winner <= 6 && winner >= 2) {
        winner++;
        instrucao.textContent = `O ${lut2.textContent} é arremeçado com força no ring. Sera que acabou? ${lut1.textContent} da show `;
        res.textContent = `Winner: ${winner}`;
        if(winner >= 7 ){
            btn.disabled = false;
            instrucao.textContent = "É CAMPEÃO!";
        }
        return winner;
    } else if (luta == 'jiujitsu' && winner <= 6) {
        winner = winner -2;
        instrucao.textContent = `${lut1.textContent} se arrisca no Jiu-Jitsu, mas isso é um erro! ${lut2.textContent} é o Campeão em finalizoções`;
        res.textContent = `Winner: ${winner}`;
        if(winner <= -1){
            reset.disabled = false;
            instrucao.textContent = `GAME OVER 
            armelock voador meus amigos assim o, ${lut2.textContent} finaliza o adversario.`;
           
        }
        return winner;
    } else if (winner < 0 ){
        instrucao.textContent = `Você perdeu. Tente novamente`
    }
} console.log(winner);

// Aqui

function proximaLuta(){
    if(winner < 3 && winner > 0){
        instrucao.textContent = `Você ainda não venceu!`;
    } else if( winner < 0){
        instrucao.textContent = `LOSER! Você foi derrotado`;
    } else if (winner >= 3){
        document.getElementsByName('btn').disabled = false;
        instrucao.textContent = `Classifica para a Final!`;
    }
}

// function win(){
//     if(winner >= 3){
//         console.log('WIN');
//     } else if (winner < 0){
//         console.log('LOSER');
//     }
// }










// var judo = document.querySelector('#judo');
// var jiujitsu = document.querySelector('#jiujitsu');
// var muaythay = document.querySelector('#muaythay');
// var capoeira = document.querySelector('#capoeira');

// judo.onclick = function treinoRafael(){
//     forca = forca +3
//     console.log(forca);
// }
// jiujitsu.onclick = function treinoRafael(){
//     forca = forca +1
//     console.log(forca);
// }
// muaythay.onclick = function treinoRafael(){
//     forca = forca +1
//     console.log(forca);
// }
// capoeira.onclick = function treinoRafael(){
//     forca = forca +2
//     console.log(forca);
// }



// function treinoJudo(){
//     console.log(document.getElementsByTagName);
// }
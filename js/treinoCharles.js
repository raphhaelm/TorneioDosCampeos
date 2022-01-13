var forca = 7;
var fortalece = 7;
let valorForca = document.querySelector('.frc');

let btnLutar = document.querySelector('#btn Lutar');
btnLutar.disabled = true;
let botaoTreinar = document.querySelector('#btn Treinar');
btnTreinar.disabled = false;

function treino() {
    for (forca; forca <=12; forca++){
    let escolhaTreino = prompt(`Escolha o número da modalidade de treino
1 - Judô, 2 - Jiu-jitsu, 3 - Muay-thay ou 4 - Capoeira.`);
 if (forca > 9) {
    btnLutar.disabled = false;
    btnTreinar.disabled = true;
    alert(`This is TIME! Hora de Lutar!`);
    break;
    } else if (escolhaTreino == 1) {
        valorForca.textContent = (` ${forca}`);
        alert(`Muito bom. Treine mais para este evento; 
        Forca: ${forca}`);    
    } else if (escolhaTreino == 2) {
        valorForca.textContent = (` ${forca}`);
        alert(`Treine outra modalidade, assim vai ganhar força mais rápido.
        Forca: ${forca}`);
    } else if (escolhaTreino == 3) {
        valorForca.textContent = (` ${forca}`);
        alert(`Você tem muitas dificuldades nessa modalidade. Treine mais.
        Forca: ${forca}`);
    } else if (escolhaTreino == 4) {
        valorForca.textContent = (` ${forca}`);
        alert(`Bom treino, continue se preparando para luta.
        Forca: ${forca}`);

    }  else { treino(); }
    }
}

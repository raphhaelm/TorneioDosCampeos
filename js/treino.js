
let valorForca = document.querySelector('.frc');
let btnLutar = document.querySelector('#btnLutar');
btnLutar.disabled = true;
let botaoTreinar = document.querySelector('#btnTreinar');
btnTreinar.disabled = false;

function escolhaescolhaTreino(){
    for (var f=7; f<11;){
        var treino = prompt(`Escolha o número da modalidade de treino
        1 - Judô, 2 - Jiu-jitsu, 3 - Muay-thay ou 4 - Capoeira.`);
        if(treino == 1){
            f = f+2;
            valorForca.textContent = (` ${f}`);
            alert(`Muito bom. Treine mais para este evento; 
            Forca: ${f}`);
        }else if (treino == 2) {
            f++;
            valorForca.textContent = (` ${f}`);
            alert(`Treine outra modalidade, assim vai ganhar força mais rápido.
            Forca: ${f}`);
        } else if (treino == 3) {
            f++;
            valorForca.textContent = (` ${f}`);
            alert(`Você tem muitas dificuldades nessa modalidade. Treine mais.
            Forca: ${f}`);
        } else if (treino == 4) {
            f = f+2;
            valorForca.textContent = (` ${f}`);
            f++;
            alert(`Bom treino, continue se preparando para luta.
            Forca: ${f}`);
        }else {
            alert('Escolha um treino digitando 1, 2, 3 ou 4.');
         };
} 
btnLutar.disabled = false;
btnTreinar.disabled = true;
return alert(`This is TIME! Hora de Lutar!`);
}



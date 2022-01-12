
const idade = prompt(`Seja bem vindo ao Torneio dos Campeões!
Qual a sua idade?`);
console.log(idade);

if (idade < 18) {
    var jogador = 'Jogador infantil';
   console.log(jogador);
} 
    
function jogadorInfantil() {
    if (jogador == 'Jogador infantil') {
        document.write("<h1> Jogador infantil não autorizado a jogar.</h1>");
    }

}
console.log(jogador);



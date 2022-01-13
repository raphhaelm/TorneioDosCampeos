function jogadorInfantil(idade){
    idade = prompt(`Seja bem vindo, digita aqui a sua idade:`);
    if (idade >= 18 && idade < 65){
        return alert('Bom jogo!');
    } else {
        document.write("<h1> Jogador não autorizado a jogar.</h1>");
    }
}



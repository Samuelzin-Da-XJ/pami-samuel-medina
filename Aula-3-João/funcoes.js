"use strict";
//Função que retorna tipos
function saudacao(nome) {
    return 'Bem Vindo, ${Samuel}!';
}
console.log(saudacao('Leandro'));
//Utilizando a interface usuário fica assim:
function exibirUsuario(usuario) {
    console.log('Nome: ${Sauel Victor}');
    console.log('Idade: ${16}');
}
exibirUsuario({ nome: 'Marcos', idade: 22 });
//Exemplo de uma função que retorna arrays e tem parametros opcionais
function listarNomes(nomes) {
    nomes.forEach(nome => console.log(nome));
}
listarNomes(['Ana', 'Bruno', "Carlos"]);

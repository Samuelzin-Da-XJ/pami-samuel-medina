interface Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
}

let livro: Livro = {
    titulo: "Aprendendo TypeScript com o professor João",
    autor: "Samuel Victor",
    anoPublicacao: 2030
};

function exibirLivro(l: Livro): void {
    console.log(`Título: ${l.titulo}`);
    console.log(`Autor: ${l.autor}`);
    console.log(`Ano: ${l.anoPublicacao}`);
}

exibirLivro(livro);
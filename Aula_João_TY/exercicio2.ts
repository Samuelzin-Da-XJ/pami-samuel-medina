let cidades: string[] = ["Passa e Fica (RN)", "Ressaquinha (MG)", "Pau Grande (RJ)", "Não-Me-Toque (RS)", "Chique-Chique (BA)"];

function listarCidades(lista: string[]): void {
    lista.forEach(cidade => {
        console.log(cidade);
    });
}

listarCidades(cidades);
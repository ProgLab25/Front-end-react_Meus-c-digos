class livro {
    constructor(titulo, autor, anoPublicacao){

    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
    this.disponivel = true;
}
obterInformacoes(){
    return '${this.titulo} por ${this.autor}(${this.anoPublicacao})';
}
estaDisponivel(){
    return this.disponivel;
}
emprestar(){
    this.disponivel = false;
}
devolver(){
    this.disponivel = true;
}
}
const meuLivro = new livro("Dom Casmurro", "Machado de Assis", 1899);
console.log(meuLivro.obterInformacoes());
console.log("Disponível:", meuLivro.estaDisponivel());
meuLivro.emprestar();
console.log("Diaponível após empréstimo:", meuLivro.estaDisponivel());
meuLivro.devolver();
console.log("Disponível após devolução:", meuLivro.estaDisponivel());

function carregarLivrosTabela(){
    const livros=[
        new livro("Dom Casmurro", "Machado de Assis",1899),
        new Livro("","", ),
        new Livro("","", ),
        new Livro("","", ),

 ];      
}
livros[2].emprestar();
livros[3].emprestar();
let tableLivros = document.getElementById("livros-tbody");
for (let livro of livros){
    let row = document.createElement("tr");
    let titulo = document.createElement("td");
    titulo.textContent = livro.titulo;
    let autor = document.createElement("td");
    autor.textContent = livro.autor;
    let ano = document.createElement("td");
    ano.textContent = livro.anoPublicacao;
    let disponivel = document.createElement("td");
    btnEmprestar.textContent = "Emprestar";
    disponivel.textContent = livro.estaDisponivel()?"Sim":"Não";
    let tdEmprestar = document.createElement("td");

    let btnEmprestar = document.createElement("button");
    btnEmprestar.textContent = "Emprestar";
    btnEmprestar.disabled = !
    livro.estaDisponivel();
    btnEmprestar.addEventListener("clik",()=>{
        livro.emprestar()
        disponivel.textContent = "Não";
        btnEmprestar.disabled = true;
    });
    tdEmprestar.appendChild(btnEmprestar);
    row.appendChild(titulo);
    row.appendChild(autor);
    row.appendChild(ano);
    row.appendChild(disponivel);
    row.appendChild(tdEmprestar);
    tableLivros.appendChild(row);
  
}
document.addEventListener("DomContentLoaded", carregarLivrosTabela);

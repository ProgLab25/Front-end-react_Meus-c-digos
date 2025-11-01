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
        new Livro("O Alienista","Machado de Assis", 1900),
        new Livro("Os Sertões","Euclides da Cunha",1938),
        new Livro("Iracema","José de Alencar",1910),

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
    btnEmprestar.addEventListener("click",()=>{
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
 
class ItemBiblioteca {
    constructor(titulo, autor, anoPublicacao) {
     this.titulo = titulo;
     this.autor = autor;
     this.anoPublicacao = anoPublicacao;
     this.disponivel = true;
   }

    obterInformacoes() {
      return " Informações do item";
    }

    emprestar() {
      if (this.disponivel) {
        this.disponivel = false;
        return true;
      }
        return false;

    }
    devolver() {
        this.disponivel = true;
    }
    estaDisponivel() {
        return this.disponivel;
    } 
}

class Livro extends ItemBiblioteca {
    constructor(titulo, autor, anoPublicacao) {
        super(titulo, autor, anoPublicacao);
        this.isbn = isbn;
        this.genero = genero;
    }

    obterInformacoes() {
        return `Livro: ${this.titulo} - ${this.autor} (${this.anoPublicacao}) - ISBN: ${this.isbn} - Gênero: ${this.genero}`;
    }
}

class Revista extends ItemBiblioteca {
    constructor(titulo, editora, anoPublicacao, numeroEdicao) {
        super(titulo, editora, anoPublicacao);
        this.numeroEdicao = numeroEdicao;
    }
}
    
    obterInformacoes(); {
    return `Revista: ${this.titulo} - Edição ${this.numeroEdicao} (${this.anoPublicacao})`;
    }


  class Usuario {
    constructor(nome, id) {
        this.nome = nome;
        this.id = id;
        this.itensEmprestados = [];
  }

    emprestarItem(item) {
        if (item.emprestar()) {
            this.itensEmprestados.push(item);
            return true;
    }
        return false;
    }
  
    devolverItem(item) {
        const index = this.itensEmprestados.indexOf(item);
        if (index > -1) {
            item.devolver();
            this.itensEmprestados.splice(index, 1);
            return true;
        }
        return false;
    }
  }

const livro1 = new Livro("1984", "George Orwell", 1949, "978-85-359-0277-8", "Ficção");
const revista = new Revista("National Geographic", "National Geographic Society", 2023, 245);
const usuario1 = new Usuario("joão Silva", "USR001");
console.log(livro1.obterInformacoes());
console.log(revista.obterInformacoes());

usuario.emprestarItem(livro);
console.log("Livro disponível após empréstimo:", livro1.estaDisponivel());

class Emprestimo{
    #dataEmprestimo;
    #dataDevolucaoPrevista;

    constructor(){
        this.usuario = usuario;
        this.item = item;
        this.#dataEmprestimo = new Date();
        this.#dataDevolucaoPrevista = new Date();
        this.#dataDevolucaoPrevista.setDate(this.#dataEmprestimo.getDate() + 14);
        this.#dataDevolucaoPrevista = null;
    }
}
//Implemente getters para acesso controlado
get informacoes() {
//Retorne as informações do empréstimo 
    return `Emprestimo: ${this.item.titulo} para ${this.usuario.nome}`;
}

CalcularMulta(){
    const hoje = new Date();
    if (hoje > this.#dataDevolucaoPrevista && this.#dataDevolucao){
        const diasAtraso = Math.ceil((hoje - this.#dataDevolucaoPrevista) / (1000 * 60 * 60 * 24));
        return diasAtraso * 2;
    }
    return 0;
}

devolver () {
    this.#dataDevolucao = new Date();
    const multa = this.CalcularMulta();
    if (multa > 0) {
        this.usuario.adicionarMulta(multa);
    }
    this.item.devolver();
  }
}

class Biblioteca {
// Implemente o padrão Singleton
static #instancia;

construtor (){
    //Garanta que só exixte uma instância 
    if (Biblioteca.#instancia) {
        return Biblioteca.#instancia;
    }
    this.itens = [];
    this.usuarios = [];
    this.emprestimos = [];
    Biblioteca.#instancia = this;

} 
static get.Instancia() {
    //Retorne a instância única 
    if (Biblioteca.#instancia) {
        Biblioteca.#instancia = new Biblioteca();
    }
    return Biblioteca.#instancia;

}
//Métodos estáticos para funcionalidades utilitárias
static validarISBN(isbn){
    //valide o formato do ISBN (simplificado)
    return /^[9-0-]+$/.test(isbn) && isbn.length >=10;
}

//Métodos de instância
adicionarItem(item) {
//Adicione um item à biblioteca
    this.itens.push(item);
}
realizarEmprestimo(usuario, item) { 
//Implemente á lógica de empréstimo 
    if(usuario.podePegarEmprestimo() && item.estaDisponivel()){
        const emprestimo = new Emprestimo(usuario, item);
        this.emprestimos.push(emprestimo);
        item.emprestar();
        return emprestimo;   
    }
    return null;
}
//Getters para estátisticas             
get estatisticas(){
//Retorne estatísticas da biblioteca 
return{
    totalItens: this.itens.length,
    totalUsuarios: this.usuarios.length,
    emprestimosAtivos: this.emprestimos.filter(e => !e.#dataDevolucao).length,
   };
 }
}

//Classe usuário com encapsulamento
class Usuario {
    #multa = 0;
    #historicoEmprestimos = [];
    
    constructor(nome, id) {
//Implemente o construtor
        this.nome = nome;
        this.id = id;
    }
    //Gettes e setters 
    get multa() {
        return this.#multa;
    }

    adicionarMulta(valor) {
//Adicione multa ao usuário 
        this.#multa += valor;
    }
    pagarMulta(valor) {
//Permita pagar multa 
        this.#multa = Math.max(0, this.#multa - valor);
    }
//Método para verificar se o usuário pode pegar pode
    podePegarEmprestimo() {
 //Verifique se não tem multas e limites de empréstimos 
        return this.#multa === 0 && this.#historicoEmprestimos.length < 5;
    }
    adicionarEmprestimo(emprestimo) {
        this.#historicoEmprestimos.push(emprestimo);
    }
}

//Teste o sitema completo 
const biblioteca = Biblioteca.getInstancia();
const usuario = new Usuario ("Maria Santos", "USR002");
const livro = new Livro("Dom Casmurro", "Machado de Assis", 1899, "978-85-7232-144-9", "Romance");

biblioteca.adicionarItem(livro);
const emprestimo = biblioteca.realizarEmprestimo(usuario, livro);

console.log(emprestimo.informacoes);
console.log("Multa atual:", usuario.multa);
console.log("Estatísticas", biblioteca.estatisticas);


            




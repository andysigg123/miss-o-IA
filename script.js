const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Pergunta 1",
        alternativas: ["Alternativa 1","Alternativa 2"],
    },
    {
        enunciado: "Pergunta 2",
        alternativas: ["Alternativa 1","Alternativa 2"],
    },
    {
        enunciado: "Pergunta 3",
        alternativas: ["Alternativa 1”, “Alternativa 2"],
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";
        
function mostraPergunta() {
    if (atual >= perguntas.length){
        mostrarResultado()
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = " ";
    mostraAlternativas();
}  
function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
   const botaoAlternativas = 
   document.createElement("button");
   botaoAlternativas.textContent = alternativa.texto;
   botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
   caixaAlternativas.appendChild(botaoAlternativas);
  }
}
function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...bla bla bla bla";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
function respostaSelecionada (opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmação;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}   
mostraPergunta();

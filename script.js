const cards = [

    {

        pergunta:"O que é sustentabilidade?",

        resposta:"É usar os recursos naturais sem comprometer as futuras gerações.",

        comentario:"Quando cuidamos da natureza hoje, garantimos qualidade de vida para amanhã."

    },

    {

        pergunta:"Por que preservar as florestas?",

        resposta:"Elas ajudam a manter o clima, proteger rios e conservar espécies.",

        comentario:"As árvores absorvem gás carbônico e produzem oxigênio para todos."

    },

    {

        pergunta:"O que é reciclagem?",

        resposta:"É transformar materiais usados em novos produtos.",

        comentario:"Reciclar reduz o lixo e economiza recursos naturais."

    },

    {

        pergunta:"Como economizar água no campo?",

        resposta:"Com irrigação eficiente e proteção das nascentes.",

        comentario:"A água é um recurso essencial para a agricultura sustentável."

    },

    {

        pergunta:"O que é biodiversidade?",

        resposta:"É a variedade de seres vivos existentes em um ambiente.",

        comentario:"Quanto maior a biodiversidade, mais equilibrado é o ecossistema."

    },

    {

        pergunta:"O que é energia renovável?",

        resposta:"Energia obtida de fontes que se renovam naturalmente.",

        comentario:"Solar e eólica são exemplos importantes."

    },

    {

        pergunta:"Por que evitar queimadas?",

        resposta:"Porque elas prejudicam o solo, os animais e o clima.",

        comentario:"Queimadas liberam grandes quantidades de poluentes."

    },

    {

        pergunta:"O que significa consumo consciente?",

        resposta:"Comprar e utilizar apenas o necessário.",

        comentario:"Consumir menos reduz impactos ambientais."

    }

];


const curiosidades = [

    "Uma árvore adulta pode absorver cerca de 22 kg de CO₂ por ano. 🌳",

    "A reciclagem de uma tonelada de papel pode salvar aproximadamente 20 árvores. ♻️",

    "O Brasil possui uma das maiores biodiversidades do planeta. 🦜",

    "A energia solar é uma das fontes renováveis que mais cresce no mundo. ☀️"

];


const pergunta = document.getElementById("pergunta");

const resposta = document.getElementById("resposta");

const comentario = document.getElementById("comentario");

const textoComentario = document.getElementById("textoComentario");

const mostrarResposta = document.getElementById("mostrarResposta");

const acerto = document.querySelector(".acerto");

const erro = document.querySelector(".erro");

const acoes = document.getElementById("acoes");

const preenchimento = document.getElementById("preenchimento");

const contador = document.getElementById("contador");

const final = document.getElementById("final");

const flashcard = document.getElementById("flashcard");

const pontuacaoFinal = document.getElementById("pontuacaoFinal");

const curiosidadeTexto =
document.getElementById("curiosidadeTexto");


let atual = 0;

let pontos = 0;


curiosidadeTexto.innerText =

curiosidades[Math.floor(Math.random()*curiosidades.length)];


function carregarCard(){

    resposta.style.display="none";

    comentario.style.display="none";

    acoes.style.display="none";

    pergunta.innerText = cards[atual].pergunta;

    resposta.innerText = cards[atual].resposta;

    textoComentario.innerText = cards[atual].comentario;

    contador.innerText = `${atual+1}/${cards.length}`;

    preenchimento.style.width =

    ((atual)/cards.length)*100 + "%";

}


mostrarResposta.onclick = ()=>{

    resposta.style.display="block";

    acoes.style.display="flex";

};


function proximo(){

    atual++;

    if(atual >= cards.length){

        flashcard.style.display="none";

        final.style.display="block";

        pontuacaoFinal.innerText =

        `Você acertou ${pontos} de ${cards.length} questões!`;

        return;

    }

    carregarCard();

}


acerto.onclick = ()=>{

    pontos++;

    proximo();

};


erro.onclick = ()=>{

    comentario.style.display="block";

    setTimeout(proximo,3000);

};


carregarCard();

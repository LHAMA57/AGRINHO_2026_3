const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        card.classList.toggle("flip");

    });

});


const perguntas = [

    {
        pergunta: "Qual prática representa sustentabilidade?",
        alternativas: [
            "Desmatamento ilegal",
            "Reutilização da água da chuva",
            "Queimadas frequentes",
            "Desperdício de alimentos"
        ],
        correta: 1
    },

    {
        pergunta: "O que é biodiversidade?",
        alternativas: [
            "Variedade de seres vivos",
            "Tipo de solo agrícola",
            "Sistema de irrigação",
            "Método de reciclagem"
        ],
        correta: 0
    },

    {
        pergunta: "Qual é uma fonte de energia renovável?",
        alternativas: [
            "Carvão mineral",
            "Petróleo",
            "Energia solar",
            "Gasolina"
        ],
        correta: 2
    },

    {
        pergunta: "Por que devemos economizar água?",
        alternativas: [
            "Porque ela é um recurso limitado",
            "Para aumentar a poluição",
            "Não existe motivo",
            "Para prejudicar a agricultura"
        ],
        correta: 0
    }

];


const perguntaTexto =
document.getElementById("pergunta");

const resultado =
document.getElementById("resultado");

const alternativasContainer =
document.querySelector(".pergunta-box");

const contadorQuiz =
document.getElementById("contadorQuiz");

const botoes =
document.querySelectorAll(".alternativa");


let indice = 0;

let pontos = 0;


function carregarPergunta() {

    if (indice >= perguntas.length) {

        alternativasContainer.innerHTML = `

            <h2>🎉 Quiz Finalizado!</h2>

            <p>
                Você acertou ${pontos} de ${perguntas.length} perguntas!
            </p>

        `;

        return;
    }


    const atual = perguntas[indice];


    contadorQuiz.innerText =
    `Pergunta ${indice + 1} de ${perguntas.length}`;


    perguntaTexto.innerText =
    atual.pergunta;


    botoes.forEach((botao, i) => {

        botao.innerText =
        atual.alternativas[i];

        botao.onclick = () => verificar(i);

    });

}


function verificar(resposta) {

    if (resposta === perguntas[indice].correta) {

        resultado.innerHTML =
        "✅ Resposta correta!";

        resultado.style.color =
        "#4ADE80";

        pontos++;

    }

    else {

        resultado.innerHTML =
        "❌ Resposta incorreta!";

        resultado.style.color =
        "#EF4444";

    }


    setTimeout(() => {

        resultado.innerHTML = "";

        indice++;

        carregarPergunta();

    }, 1500);

}


carregarPergunta();

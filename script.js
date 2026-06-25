const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("click",()=>{

        card.classList.toggle("flip");

    });

});


const alternativas =
document.querySelectorAll(".alternativa");

const resultado =
document.getElementById("resultado");


alternativas.forEach(botao=>{

    botao.addEventListener("click",()=>{

        if(botao.classList.contains("correta")){

            resultado.innerHTML=
            "✅ Correto! Reutilizar água da chuva é uma prática sustentável.";

            resultado.style.color="#4ADE80";

        }

        else{

            resultado.innerHTML=
            "❌ Incorreto. Pense em ações que preservam os recursos naturais.";

            resultado.style.color="#EF4444";

        }

    });

});

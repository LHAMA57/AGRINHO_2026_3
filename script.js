*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial,sans-serif;
}

body{

    background:#E8F5E9;
    min-height:100vh;

}


header{

    text-align:center;
    padding:30px;

}

.banner{

    width:300px;
    margin-bottom:20px;

}


h1{

    color:#2E7D32;
    font-size:3rem;

}


header p{

    color:#558B2F;
    font-size:1.2rem;

}


.curiosidade{

    width:80%;
    margin:auto;
    background:white;

    padding:20px;

    border-left:8px solid #FFD54F;

    border-radius:15px;

    box-shadow:0 5px 15px rgba(0,0,0,0.1);

}


.progresso{

    width:80%;
    margin:30px auto;

}


.barra{

    height:20px;
    background:#ccc;

    border-radius:20px;

    overflow:hidden;

}


#preenchimento{

    width:0%;

    height:100%;

    background:#4CAF50;

    transition:1s;

}


#contador{

    display:block;

    margin-top:10px;

    text-align:right;

}


main{

    display:flex;

    justify-content:center;

}


#flashcard{

    width:700px;

    min-height:400px;

    background:white;

    padding:40px;

    border-radius:25px;

    box-shadow:0 10px 30px rgba(0,0,0,0.15);

    text-align:center;

}


#pergunta{

    color:#2E7D32;

    font-size:2rem;

}


#mostrarResposta{

    margin-top:40px;

    padding:15px 30px;

    border:none;

    background:#FFD54F;

    cursor:pointer;

    border-radius:15px;

    font-size:18px;

}


#resposta{

    margin-top:30px;

    display:none;

    font-size:1.3rem;

}


#acoes{

    margin-top:40px;

    display:none;

    gap:20px;

    justify-content:center;

}


#acoes button{

    padding:15px 30px;

    border:none;

    border-radius:15px;

    cursor:pointer;

    font-size:18px;

}


.acerto{

    background:#4CAF50;
    color:white;

}


.erro{

    background:#E53935;
    color:white;

}


#comentario{

    display:none;

    margin-top:30px;

    background:#FFF8E1;

    padding:20px;

    border-radius:15px;

}


#final{

    display:none;

    width:700px;

    background:white;

    padding:50px;

    border-radius:20px;

    text-align:center;

}

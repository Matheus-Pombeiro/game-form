// Obtém elementos da página
const principal = document.querySelector("#principal");                 // Tag main do HTML
const form = document.querySelector("form");                            // Form
const inRPG = document.querySelector("#inRPG");                         // RPG
const selectRPG = document.querySelector("#selectRPG");
const inGuerra = document.querySelector("#inGuerra");                   // Guerra
const selectGuerra = document.querySelector("#selectGuerra");
const inEsportes = document.querySelector("#inEsportes");               // Esportes
const selectEsportes = document.querySelector("#selectEsportes");
const inFavoritos = document.querySelector("#inFavoritos");             // Textarea games favoritos
const inCheckbox = document.querySelector("#inCheckbox");               // Checkbox
const submit = document.querySelector("#submit");                       // Submit
const novosDados = document.querySelector("#novosDados");               // Novos Dados

// Declara uma função para ouvir qual será o genero escolhido pelo usuário
const genero = () => {

    inRPG.addEventListener("click", () => {     // Escuta o click no gênero RPG

        selectRPG.className = "visivel";
        selectGuerra.className = "oculto";
        selectEsportes.className = "oculto";

    });

    inGuerra.addEventListener("click", () => {      // Escuta o click no gênero Guerra

        selectGuerra.className = "visivel";
        selectRPG.className = "oculto";
        selectEsportes.className = "oculto";

    });
  
    inEsportes.addEventListener("click", () => {        // Escuta o click no gênero Esportes

        selectEsportes.className = "visivel";
        selectRPG.className = "oculto";
        selectGuerra.className = "oculto";

    });
    
    let generoFavorito;     // Declara uma var para obter o gênero favorito do usuário

    // Obtém o gênero favorito selecionado pelo usuário
    if (inRPG.checked) {
        generoFavorito = "RPG";

    } else if (inGuerra.checked) {
        generoFavorito = "Guerra";

    } else if (inEsportes.checked) {
        generoFavorito = "Esportes";
    }

    return generoFavorito;      // Retorna o gênero favorito do usuário

};

// Declara uma função para processar a idade do usuário
const procData = (dataNasc) => {

    // Obtém a data atual (instacia objetos)
    const dataAtual = new Date();
    const auxData = new Date();

    const partesNasc = dataNasc.split("-");         // Separa a data, pois ela vem no formato yyyy-mm-dd
    auxData.setDate(Number(partesNasc[2]));         // Obtém o dia
    auxData.setMonth(Number(partesNasc[1]) - 1);    // Obtém o mês (no JS, o mês começa em 0 e vai até 11)
    auxData.setFullYear(Number(partesNasc[0]));     // Obtém o ano

    const auxIdade = dataAtual - auxData;           // Processa a diferença de tempo entre as datas em milissegundos

    let idade;      // Declara a variável idade

    const msgVazia = " X ";

    if (auxIdade >= 0) {                                                // Se a idade não for negativa...   
        idade = Math.floor((auxIdade / 86400000) / 365.25);             // Processa a idade (1 dia == 86.400.000 milissegundos)
        return idade;                                                   // Retorna a idade
    } else {                                                            // Senão...            
        alert("Data de Nascimento Inválida. Tente Novamente.");         // Exibe um alerta
        return msgVazia;                                                // Retorna uma mensagem vazia
    }

     

};

// Declara uma função para obter o jogo selecionado pelo usuário
const gameOpcoes = () => {

    const gameRPG = selectRPG.value;                // Obtém a opção do gênero RPG
    const gameGuerra = selectGuerra.value;          // Obtém a opção do gênero Guerra
    const gameEsportes = selectEsportes.value;      // Obtém a opção do gênero Esportes

    const msgVazia = " X "

    // Verifica a validade da opção selecionada pelo usuário e a retorna
    if (inRPG.checked && gameRPG !== "") {
        return gameRPG;

    } else if (inGuerra.checked && gameGuerra !== "") {
        return gameGuerra;

    } else if (inEsportes.checked && gameEsportes !== "") {
        return gameEsportes;

    } else {
        alert("Ops... Parece que você não selecionou um Game.");
        return msgVazia;
    }

};

// Declara uma função para processar e validar os games favoritos inseridos pelo usuário
const gamesFavoritos = (favoritos) => {

    const partes = favoritos.split(" ");        // Separa os dados inseridos pelo usuário afim de evitar bugs

    let msg;        // Declara uma var que irá receber uma mensagem de acordo com a existência de dados de favoritos

    // Retorna uma mensagem específica dependendo da existência de games favoritos ou não
    if (partes[0] !== "") {
        msg = "Fico Feliz em saber sobre os seus Games Favoritos";
        return msg;

    } else {
        msg = "Ahh... Você não possui Games Favoritos?";
        return msg;
    } 

};

// Declara uma função para validar a permissão do envio dos dados
const checkbox = () => {

    // O botão submit começa desabilitado
    submit.disabled = true;
    submit.style.background = "gray";
    submit.style.cursor = "default";

    // Escuta o click no checkbox
    inCheckbox.addEventListener("click", () => {

        // Habilita ou desabilita o submit dependendo do checkbox
        if (inCheckbox.checked) {
            submit.disabled = false;
            submit.enabled = true;
            submit.style.background = "#1c77ff";
            submit.style.cursor = "pointer";

        } else {
            submit.disabled = true;
            submit.style.background = "gray";
            submit.style.cursor = "default";

        }

    });

    // Escuta o passar do cursor do mouse sobre o submit
    submit.addEventListener("mouseover", () => {

        // Se o checkbox estiver marcado, estiliza o submit
        if (inCheckbox.checked) {
            submit.style.background = "#1968df";
        }
        
    });

    // Escuta o sair do cursor do mouse sobre o submit
    submit.addEventListener("mouseout", () => {

        // Se o checkbox estiver marcado, estiliza o submit
        if (inCheckbox.checked) {
            submit.style.background = "#1c77ff";
        }
        
    });

    // Escuta o click no botão submit
    submit.addEventListener("click", () => {

        // Se o checkbox estiver marcado, estiliza o submit
        if (inCheckbox.checked) {
            submit.style.background = "#1453b3";
         
        }

    });

};

// Declara uma função para imprimir a saída de dados para o usuário
const outDados = (nome, dataNasc, favoritos) => {

    const partesNome = nome.split(" ");     // Separa o nome em partes
    const primeiroNome = partesNome[0];     // Obtém o primeiro nome do usuário

    // Cria elementos HTML via JS
    const section = document.createElement("section");
    const h3 = document.createElement("h3");
    const h4 = document.createElement("h4");
    const pNome = document.createElement("p");
    const pIdade = document.createElement("p");
    const pGenero = document.createElement("p");
    const pGame = document.createElement("p");
    const pFavoritos = document.createElement("p");
    const pMsgFinal = document.createElement("p");
    const ghosts = document.createElement("img");

    // Cria elementos de texto
    const titulo = document.createTextNode(`Olá, ${primeiroNome}. É um prazer te conhecer!`);
    const subtitulo = document.createTextNode("Ficha do Gamer");
    const textoNome = document.createTextNode(`Nome: ${nome}`);
    const textoIdade = document.createTextNode(`Idade: ${procData(dataNasc)} ano(s)`);
    const textoGenero = document.createTextNode(`Gênero Favorito: ${genero()}`);
    const textoGame = document.createTextNode(`Game Selecionado: ${gameOpcoes()}`);
    const textoFavoritos = document.createTextNode(`${gamesFavoritos(favoritos)}`);
    const textoMsgFinal = document.createTextNode("Obrigado por falar comigo. Tenha um excelente dia!");
    

    ghosts.src = ("assets/ghosts.png");     // Atribui uma imagem a tag img

    h3.appendChild(titulo);     // Determina titulo como filho de h3
    h4.appendChild(subtitulo);  // Determina subtitulo como filho de h4

    // Determina os textos como filhos de ps
    pNome.appendChild(textoNome);
    pIdade.appendChild(textoIdade);
    pGenero.appendChild(textoGenero);
    pGame.appendChild(textoGame);
    pFavoritos.appendChild(textoFavoritos);
    pMsgFinal.appendChild(textoMsgFinal);      

    // Determina os filhos de section
    section.appendChild(h3);
    section.appendChild(h4);
    section.appendChild(pNome);
    section.appendChild(pIdade);
    section.appendChild(pGenero);
    section.appendChild(pGame);
    section.appendChild(pFavoritos);
    section.appendChild(pMsgFinal);
    section.appendChild(ghosts);

    principal.appendChild(section);     // Determina section como filha de principal

    // Estiliza os itens adicionados
    section.classList.add("caixa-conteudo");
    h3.classList.add("titulo-outdados");
    h4.classList.add("titulo-outdados");
    ghosts.classList.add("img-ghosts");

};

genero();       // Chama a função que determina o genero escolhido pelo usuário

checkbox();     // Chama a função que valida a permissão do envio dos dados

// Escuta quando o botão submit é clickado
form.addEventListener("submit", (e) => {

    e.preventDefault();     // Evita o envio automático do form

    const nome = form.inNome.value;         // Obtém o nome do usuário
    const dataNasc = form.inData.value;     // Obtém a data de nascimento do usuário
    const favoritos = inFavoritos.value;    // Obtém os jogos favoritos digitados pelo usuário

    outDados(nome, dataNasc, favoritos);        // Chama a função de saída dos dados com passagem de parâmetro

    // Desabilita o botão submit
    submit.enabled = false;  
    submit.disabled = true;
    submit.style.background = "gray";       // Estiliza o botão submit após desabilitado
    submit.style.cursor = "default";
    inCheckbox.checked = false;             // Retira a seleção do botão checkbox
    inCheckbox.disabled = true;

});

// Recarrega a página
novosDados.addEventListener("click", () => window.location.reload());
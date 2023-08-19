// Obtém elementos da página
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

    if (auxIdade >= 0) {                                                // Se a idade não for negativa...   
        idade = Math.floor((auxIdade / 86400000) / 365.25);       // Processa a idade (1 dia == 86.400.000 milissegundos)
    } else {                                                            // Senão...            
        alert("Data de Nascimento Inválida. Tente Novamente.");         // Exibe um alerta
    }

    return idade;       // Retorna a idade 

};

// Declara uma função para obter o jogo selecionado pelo usuário
const gameOpcoes = () => {

    const gameRPG = selectRPG.value;                // Obtém a opção do gênero RPG
    const gameGuerra = selectGuerra.value;          // Obtém a opção do gênero Guerra
    const gameEsportes = selectEsportes.value;      // Obtém a opção do gênero Esportes

    // Verifica a validade da opção selecionada pelo usuário e a retorna
    if (inRPG.checked && gameRPG !== "") {
        return gameRPG;

    } else if (inGuerra.checked && gameGuerra !== "") {
        return gameGuerra;

    } else if (inEsportes.checked && gameEsportes !== "") {
        return gameEsportes;

    } else {
        alert("Selecione uma opção válida");
        return;
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
    submit.disabled;
    submit.style.background = "gray";
    submit.style.cursor = "default";

    // Escuta o click no checkbox
    inCheckbox.addEventListener("click", () => {

        // Habilita ou desabilita o submit dependendo do checkbox
        if (inCheckbox.checked) {
            submit.enable;
            submit.style.background = "#1c77ff";
            submit.style.cursor = "pointer";

        } else {
            submit.disabled;
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
    const p =  document.createElement("p");
    const pacman = document.createElement("img");

    // Cria elementos de texto
    const titulo = document.createTextNode(`Olá, ${primeiroNome}. Seja Bem-vindo!`);
    const subtitulo = document.createTextNode("Ficha do Gamer");
    const texto = document.createTextNode(`Nome: ${nome}\n
                                            Idade: ${procData(dataNasc)}ano(s)\n
                                            Gênero Favorito: ${genero()}\n
                                            Game Selecionado: ${gameOpcoes()}\n
                                            ${gamesFavoritos(favoritos)}`);

};

genero();       // Chama a função que determina o genero escolhido pelo usuário

checkbox();     // Chama a função que valida a permissão do envio dos dados

// Escuta quando o botão submit é clickado
form.addEventListener("submit", (e) => {

    e.preventDefault();     // Evita o envio automático do form

    const nome = form.inNome.value;         // Obtém o nome do usuário
    const dataNasc = form.inData.value;     // Obtém a data de nascimento do usuário
    const favoritos = inFavoritos.value;    // Obtém os jogos favoritos digitados pelo usuário

    // console.log(dataNasc);
    // console.log(procData(dataNasc));
    // console.log(genero());
    // console.log(outDados(nome, dataNasc))
    // console.log(gameOpcoes());
    // console.log(gamesFavoritos(favoritos))

});
const amigos = [];

function limparCampo () {

    let inputName = document.getElementById( "amigo" );
    inputName.value = "";
}

function atualizarListaDeAmigos () {

    let lista = document.getElementById( "listaAmigos" );
    lista.innerHTML = "";

    for ( let i = 0; i < amigos.length; i++ ) {

        let novoNome = document.createElement( "li" );
        novoNome.textContent = amigos[ i ];
        lista.appendChild( novoNome );
    }
}

function adicionarAmigo () {

    let valueInputName = document.getElementById( "amigo" ).value;

    if ( valueInputName === "" ) {

        alert( "Por favor insira um nome !!" );
    } else {

        amigos.push( valueInputName );
        limparCampo();
        atualizarListaDeAmigos();

    }
}

function sortearAmigo () {

    if ( amigos.length === 0 ) {

        alert( "Primeiro digite os nomes dos seus amigos !!" );
    } else if ( amigos.length < 2 ) {

        alert( "Digite mais de um nome !!" );
    } else {

        let indexSorteado = Math.round( Math.random() * ( amigos.length - 1 ) );
        let amigoSorteado = amigos[ indexSorteado ];

        let lista = document.getElementById( "listaAmigos" );
        lista.innerHTML = "";

        let novoNome = document.createElement( "li" );
        novoNome.textContent = `A pessoa sorteada é: ${amigoSorteado}.`;
        lista.appendChild( novoNome );

    }
}
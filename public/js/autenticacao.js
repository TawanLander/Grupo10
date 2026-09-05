async function logar(array) {

    const buscar = await fetch('/usuarios/logar', {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            email: array.email,
            senha: array.senha
        })
    })

    if(!buscar.ok) return false
    const dados = await buscar.json();
    return dados;
}

function pegarDados() {
    const dados = document.querySelectorAll('input');

    if (dados.length === 2) {
        const login = {email: dados[0].value, senha: dados[1].value};

        if(analisarDados(login, 2)){
            logar(login);
        } else {
            // TODO: INFORMAR ERRO AO USUÁRIO
        }

    }
}

function analisarDados(json, quantity) {
    let acertos = 0;
    if(json.email){
            // TODO: VALIDAR CAMPOS
        acertos++;
    }
    if(json.senha){

        acertos++;
    }


    if(acertos === quantity) return true;
    return false;
}
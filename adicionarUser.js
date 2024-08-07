const users = require('./users')

function adicionarUser(usuario) {
    usuario.id = users.length + 1;
    let jaExiste = users.find(user => user.email === usuario.email);
    if (jaExiste) {
        console.log(`
                                        FECHANDO O PROGRAMA\n`)
        throw new Error('Já existe um contato com esse email');
    } else {
        users.push(usuario);
    }

}

module.exports = adicionarUser;




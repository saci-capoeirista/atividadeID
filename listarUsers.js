const users = require('./users');

function listarResidencias() {
    users.forEach((usuario, index) => {
        console.log(`${index+1}. ID: ${usuario.id}\n nome: ${usuario.nome}\n email: ${usuario.email}\n telefones+: ${usuario.telefones}\n`);
           })
}

module.exports = listarResidencias;
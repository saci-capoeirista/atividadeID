const users = require('./users');

function listarResidencias() {
    users.forEach((usuario, index) => {
        console.log(`${index+1}. ID: ${usuario.id} nome: ${usuario.nome}, email: ${usuario.email} numero: ${usuario.numero}`);
           })
}

module.exports = listarResidencias;
const users = require('./users')

function adicionarUser(usuario) {
    usuario.id = users.length + 1;
    users.push(usuario);
}

module.exports = adicionarUser;




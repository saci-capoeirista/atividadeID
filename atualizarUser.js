const users = require('./users');

function atualizarUser(id, novoUsuario) {
    const index = users.findIndex(users => users.id === id);
    if (index !== -1) {
        users[index] = { id, ...novoUsuario};
    }
}

module.exports = atualizarUser;
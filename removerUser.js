const users = require('./users');

function removerUser(id) {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users.splice(index, 1);
    }
}

module.exports = removerUser;

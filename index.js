const prompt = require('prompt-sync')();
const users = require('./users');
const listarUsers = require('./listarUsers')
const adicionarUser = require('./adicionarUser')
const atualizarUser = require('./atualizarUser')
const removerUser = require('./removerUser')

menu()

function menu() {
    console.log(`
1. Listar Contatos
2. Adicionar Contatos
3. Atualizar Contatos
4. Remover Contatos
5. Sair
`);
    let opcao = prompt('Escolha uma opção: ')
    let index;

    switch (opcao) {
        case '1':
            if (users.length == 0) {
                console.log('Nada encontrado!')
            } else {
                listarUsers();
                menu();
            }
            break;
        case '2':
            nome = prompt('nome: ');
            email = prompt('email: ');
            numero = prompt('Número: ');
            adicionarUser(({ nome, email, numero }));
            console.log('Usuário adicionado com sucesso!');
            menu();
            break;
        case '3':
            listarUsers();
            index = parseInt(prompt('Qual você deseja atualizar?: '))
            let novoNome = prompt('Digite o novo nome: ')
            let novoEmail = prompt('Digite a novo email: ')
            let novoNumero = prompt('Digite o novo número: ')
            atualizarUser(index, { nome: novoNome, email: novoEmail, numero: novoNumero })
            console.log('Atualizado com sucesso!!')
            menu()
            break;
        case '4':
            listarUsers()
            let id = parseInt(prompt('Número do usuário a remover: '))
            removerUser(id);
            console.log('Removido com sucesso!!')
            menu();
            break;
        case '5':
            console.log('Saindo do programa....')
            break;
    }
}
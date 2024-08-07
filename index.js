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
                menu()
            } else {
                listarUsers();
                menu();
            }
            break;
        case '2':
            nome = prompt('nome: ');
            let telefones = [];
            let telefone;
            while ((telefone = prompt('Telefone (ou deixe em branco para sair): '))) {
                telefones.push(telefone);
            }
            email = prompt('email: ');
            adicionarUser(({ nome, email, telefones }));
            console.log('Usuário adicionado com sucesso!');
            menu();
            break;
        case '3':
            listarUsers();
            index = parseInt(prompt('Qual você deseja atualizar?: '));
            let novoNome = prompt('Nome: ')
            let novosTelefones = [];
            let telefoneNovo;
            while ((telefoneNovo = prompt('Telefone (ou deixe em branco para sair): '))) {
                novosTelefones.push(telefoneNovo);
            }
            let novoEmail = prompt('email: ');
            atualizarUser(index, { id: index, nome: novoNome, email: novoEmail, telefones: telefoneNovo })
            console.log('Atualizado com sucesso!!')
            menu()
            break;
        case '4':
            listarUsers()
            let id = parseInt(prompt('Número do id do usuário a remover: '))
            removerUser(id);
            console.log('Removido com sucesso!!')
            menu();
            break;
        case '5':
            console.log('Saindo do programa....')
            break;
        default:
            console.log('OPÇÃO INVÁLIDA')
            menu()
    }
}
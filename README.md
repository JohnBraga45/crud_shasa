# Aplicativo To Do List

## Visão geral
O aplicativo To Do List é uma lista de tarefas simples que permite adicionar, editar, excluir e visualizar tarefas. Ele foi desenvolvido como um teste de emprego.

## Funcionalidades
- Adicionar uma nova tarefa à lista.
- Editar uma tarefa existente.
- Excluir uma tarefa da lista.
- Visualizar a lista de tarefas.

## Componentes
O aplicativo é composto pelos seguintes componentes:

### `TodoListScreen`
O componente principal que exibe a lista de tarefas e permite interagir com ela. Ele também é responsável por adicionar, editar e excluir tarefas.

Propriedades:
- Nenhuma.

### `TodoItem`
Componente que representa uma única tarefa na lista.

Propriedades:
- `item` (objeto): A tarefa a ser exibida.
- `onDelete` (função): Função chamada ao excluir a tarefa.
- `onUpdate` (função): Função chamada ao editar a tarefa.

### `TodoForm`
Componente que exibe um formulário para adicionar ou editar uma tarefa.

Propriedades:
- `onAdd` (função): Função chamada ao adicionar uma nova tarefa.
- `onUpdate` (função): Função chamada ao atualizar uma tarefa existente.
- `initialTitle` (string): Título inicial do campo de entrada.
- `editingId` (string): ID da tarefa sendo editada (opcional).

## Bibliotecas utilizadas
O aplicativo utiliza as seguintes bibliotecas:

- `react`: Biblioteca JavaScript para criar interfaces de usuário.
- `react-native`: Framework para desenvolvimento de aplicativos móveis.
- `react-native-vector-icons`: Biblioteca para ícones vetoriais.
- `react-native-async-storage`: Biblioteca para armazenamento de dados assíncrono.
- `expo`: Plataforma para desenvolvimento de aplicativos multiplataforma.
 

## Instalação
Para executar o aplicativo localmente, siga as etapas abaixo:

1. Clone o repositório do aplicativo.
2. Navegue até o diretório do aplicativo.
3. Execute o comando `npm install` para instalar as dependências.
4. Execute o comando `npm start` para iniciar o aplicativo.

Certifique-se de ter o ambiente de desenvolvimento React Native configurado corretamente antes de executar o aplicativo.

## Limitações e Melhorias Futuras
O aplicativo To Do List é uma versão básica e possui algumas limitações e áreas para melhorias futuras, como:

- Não há autenticação de usuário.
- A interface do usuário pode ser aprimorada com mais recursos visuais.
- A lista de tarefas não é persistente em um servidor, apenas no armazenamento local do dispositivo.
- Não há suporte para compartilhamento de tarefas ou colaboração entre usuários.

Essas são apenas algumas sugestões para melhorar o aplicativo. Dependendo dos requisitos e escopo do projeto, outras funcionalidades podem ser adicionadas.

## Conclusão
O aplicativo To Do List é um exemplo simples de um aplicativo de lista de tarefas. Ele oferece funcionalidades básicas para adicionar, editar, excluir e visualizar tarefas. O código fonte está disponível no repositório Git e pode ser usado como base para desenvolver aplicativos mais complexos.

Espero que essa documentação forneça uma visão geral clara do aplicativo e suas funcionalidades. Se você tiver alguma dúvida ou precisar de mais informações, não hesite em entrar em contato.

Desafio final

Neste módulo vamos aprender sobre
lógica de programação, javascript, API
Rest, NodeJS, Express, libs e como subir
uma aplicação back-end em produção.
O objetivo desta avaliação é verificar se
vamos atingir os conhecimentos
propostos para este módulo.
Módulo Back-end I

Desafio final

Aplicação Lista de Recados

● Caso você não tenha tido a aula de
express, mas já teve a base de
JavaScript faça as funções e códigos ;

● Assim que tiver a aula de express,
refatore os códigos criados
anteriormente para o express.
O que vamos fazer?

Desafio final

Aplicação Lista de Recados

● Vamos criar um back-end que contém
as seguintes funcionalidades:
○ Criação de conta
○ Login
○ CRUD* de recados

*CRUD (create, read, update e delete)
O que vamos fazer?

Importante !!!

As rotas e respostas devem seguir o
enunciado, caso contrário não será

aprovado .

Parte 1 - Configurando

Desafio final

● Faça as configurações iniciais do express ;

● Crie um recurso com a seguinte rota ' / '

Em caso de sucesso, retorna um status 200

Com a seguinte mensagem
('Bem vindo à aplicação')
O que vamos fazer?

Parte 2 - Pessoa Usuária

Desafio final

Regras Gerais
● Não pode ter mais de uma pessoa
usuária com o mesmo e-mail

● O login deve ser feito com e-mail e
senha

● Cada recado deve ser uma pessoa
usuária . Ou seja , uma pessoa pode
ter vários recados. Porém um recado
só pode ter uma pessoa.
O que vamos fazer?

Sign Up

Desafio final

● Sign Up - Criar pessoa usuária

Endereço : /signup

Dados :

- Id ( identificador único)
- Name
- Email
- Password
O que vamos fazer?

Desafio final

● Sign Up - Criar pessoa usuária

Cada pessoa usuário deve ser um
newUser

● Name, email, password devem ser
inseridos pela pessoa usuária e todos
esses itens precisam ser validados .

● Caso não passe um desses itens,
informe um status (400) .
O que vamos fazer?

Desafio final

● Sign Up - Criar pessoa usuária

Caso a pessoa seja criada com sucesso,
retornar um status (201) e a seguinte
mensagem :

" Seja bem vindo { NOME } ! Pessoa usuária
registrada com sucesso! "
O que vamos fazer?

Desafio final

● Sign Up - Criar pessoa usuária

Mensagens de verificação :

- Por favor, verifique se passou o nome .

- Por favor, verifique se passou o email .

- Email já cadastrado, insira outro .

- Por favor, verifique se passou a senha .
O que vamos fazer?

Desafio final

● Sign Up - Criar pessoa usuária

O identificador único, não deve ser inserido
pela a pessoa usuária ao criar .

Este item deve ser feito de forma
automatizada

● Você deve criar uma lista estática, que
armazene as pessoas usuárias , cujo o nome
seja users
O que vamos fazer?

Login

Desafio final

● Login - Acessar a pessoa usuária

Endereço : /login

Dados :

- Email
- Password
O que vamos fazer?

Desafio final

● Login - Acessar a pessoa usuária

Deve-se verificar se a pessoa usuária
inseriu os seguintes dados para fazer o
login :

- Email
- Password
O que vamos fazer?

Desafio final

● Login - Acessar a pessoa usuária

Caso o login seja realizado com sucesso,
retornar um status (200) e a seguinte
mensagem :

" Seja bem vindo { NOME } ! Pessoa usuária
logada com sucesso! "
O que vamos fazer?

Desafio final

● Login - Acessar a usuária

Caso a pessoa não tenha enviado email
ou password você deve retornar as
seguintes mensagens :

- Insira um e-mail válido

- Insira uma senha válida
O que vamos fazer?

Desafio final

● Login - Acessar a usuária

Além disso, só será possível fazer o login
caso o email esteja cadastrado no
sistema.

Caso contrário, retornar a seguinte
mensagem :

" Email não encontrado no sistema,
verifique ou crie uma conta"
O que vamos fazer?

Parte 3 - Mensagens

Criar Mensagens

Desafio final

● Criar mensagem - Create

Endereço : /massage

Dados :

- Id ( identificador único)
- Title ( título da mensagem )
- Description (descrição da

mensagem )
O que vamos fazer?

Desafio final

● Criar mensagem - Create

Caso o operação seja realizado com
sucesso, retornar um status (201) e a
seguinte mensagem :

" Mensagem criada com sucesso!
{MENSAGEM}"
O que vamos fazer?

Desafio final

● Criar mensagem - Create

Cada nova mensagem deve ser um
newMassage

● Title, description devem ser inseridos
pela pessoa usuária e todos esses itens
precisam ser validados .

● Caso não passe um desses itens,
informe um status (400) .
O que vamos fazer?

Desafio final

● Criar mensagem - Create

Além disso, só é possível criar uma nova
mensagem se o e-mail estiver registrado
no nosso sistema.

Caso o e-mail não esteja no nosso
sistema, deve retornar um status 404 e a
seguinte mensagem : " Email não
encontrado, verifique ou crie uma conta "
O que vamos fazer?

Desafio final

● Criar mensagem - Create

O id de cada mensagem deve ser
inserido automaticamente.
O que vamos fazer?

Ler Mensagens

Desafio final

● Ler mensagem - Create

Endereço :/massage/:email

Dados :

- Email

A pessoa só conseguirá ler todas as
mensagens se o e-mail estiver
cadastrado em nosso sistema.

O que vamos fazer?

Desafio final

● Ler mensagem - Create

Caso o operação seja realizado com
sucesso, retornar um status (200) e a
seguinte mensagem :

" Seja bem-vinde! {LISTA DE MENSAGENS}"
O que vamos fazer?

Desafio final

● Ler mensagem - Create

Caso o e-mail não esteja no nosso
sistema, deve retornar um status 404 e a
seguinte mensagem : " Email não
encontrado, verifique ou crie uma conta "
O que vamos fazer?

Atualizar Mensagens

Desafio final

● Atualizar mensagem - Update

Endereço /massage/:id

Dados :

- Title
- Description
O que vamos fazer?

Desafio final

● Atualizar mensagem - Update

Caso o operação seja realizado com
sucesso, retornar um status (200) e a
seguinte mensagem :

" Mensagem atualizada com sucesso
{ MENSAGENS ATUALIZADA}"
O que vamos fazer?

Desafio final

● Atualizar mensagem - Update

Caso o id da mensagem não seja
encontrado, retornar a seguinte mensagem :

" Por favor, informe um id válido da
mensagem"
O que vamos fazer?

Desafio final

● Atualizar mensagem - Update

Caso o operação seja realizado com
sucesso, retornar um status (200) e a
seguinte mensagem :

" Mensagem atualizada com sucesso !
{MENSAGEM ATUALIZADA}"
O que vamos fazer?

Deletar Mensagens

Desafio final

● Deletar mensagem - Delete

Endereço /massage/:id

Caso o id da mensagem não seja
encontrado no nosso banco, retorne a
seguinte mensagem :

" Mensagem não encontrada, verifique o
identificador em nosso banco"
O que vamos fazer?

Desafio final

● Deletar mensagem - Delete

Caso o operação seja realizado com
sucesso, retornar um status (200) e a
seguinte mensagem :

" Mensagem apagada com sucesso"
O que vamos fazer?

Critérios de Correção

O que será avaliado?

MAS AINDA NÃO SEI NADA
DE TAL COISA AINDA!!

Calma calma pessoal, nada de
desespero...

O que será avaliado?

O projeto não deve ser
incrementado com
nada mais do que está
sendo pedido.

O que será avaliado?

Será avaliado tudo que foi ensinado em
aula...

Além disso, prestem atenção nos seguintes
pontos:

1. Boas práticas
2. Código limpo
3. Utilização dos recursos da linguagem

A entrega

1. Repositório no Github para o
back-end

2. Link da aplicação no rodando no
servidor - Deploy

3. Documentação no postman com o
link do deploy

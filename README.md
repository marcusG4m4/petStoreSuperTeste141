# PetStore API Automation - SuperTest 🚀

Este repositório contém uma suite de testes de API para a [Swagger Petstore](https://petstore.swagger.io/), desenvolvida utilizando **SuperTest** e um framework de assertions (como Jest ou Mocha). O foco aqui é a validação robusta de endpoints REST de forma programática e veloz.

## 🛠️ Tecnologias e Ferramentas

* [Node.js](https://nodejs.org/) - Ambiente de execução.
* [SuperTest](https://github.com/ladjs/supertest) - Biblioteca para testar agentes HTTP.
* [Jest](https://jestjs.io/) (ou Mocha/Chai) - Framework de testes e assertions.
* [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Linguagem base.

## 📋 O que está sendo testado?

A automação cobre os principais fluxos da API PetStore:
- **Fluxo de Pets:** Criação, consulta por ID, atualização de status e remoção.
- **Fluxo de Loja (Store):** Validação de pedidos e inventário.
- **Fluxo de Usuário (User):** Criação de conta, login e manipulação de perfil.

## 🔧 Instalação

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/marcusG4m4/petStoreSuperTeste141.git](https://github.com/marcusG4m4/petStoreSuperTeste141.git)
    ```

2.  Instale as dependências do projeto:
    ```bash
    npm install
    ```

## 🚀 Como Executar os Testes

Para rodar todos os testes e visualizar o relatório no terminal:

```bash
npm test

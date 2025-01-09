# API AgilStore
API de automação do gerenciamento de produtos da AgilStore

-----------------------------------------------
# Sumário
* [Visão Geral](#visão-geral)
* [1. Introdução](#introdução)
    * [1.1. Tecnoligas](#tecnologias)
* [2. Configurações de Ambiente ](#2-configurações-ambiente)
* [3. Endpoint ](#3endpoints-da-api)
  * [Tabela de Endepoint da API](#tabela-de-endpoint-da-api)
* [Estrutura do Projeto](#estrutura-do-projeto)
-----------------------------------------------

# Visão Geral

- **Versão da API**: 1.0.0
- **Base URL**: 
    - Desenvolvimento : `http://localhost:3000/agilstore`     
- **Público-alvo**: Para equipe de gerenciamento de estoque dos produtos da AgilStore.

-----------------------------------------------
# 1. Introdução

A AgilStore, uma loja de eletrônicos,que ampliou seu catálogo para incluir smartphones, laptops e acessórios. Devido ao aumento e diversificação dos produtos, surgiu a necessidade de automatizar o controle de inventário, que atualmente é feito manualmente em planilhas, o que tem se mostrado ineficiente e propenso a erros. Diante disso, é necessário desenvolver uma aplicação para gerenciar o inventário de forma automatizada, permitindo adicionar, listar, atualizar e remover produtos.

Este projeto foi desenvolvido em Node.js com TypeScript e segue os princípios da Clean Architecture. A tipagem estática proporcionada pelo TypeScript ajuda a evitar erros comuns em tempo de execução e torna o código mais legível e fácil de manter. Para persistência de dados, foi utilizado o banco de dados SQLite, uma solução leve e eficiente para sistemas de pequeno e médio porte. O SQLite foi escolhido devido à sua simplicidade e facilidade de integração, durante o desenvolvimento.

## 1.1. Tecnologias

A API foi desenvolvida utilizando as seguintes tecnologias:

- [Node.js](https://nodejs.org/en)
- [Express](https://expressjs.com/)
- [Insomnia](https://insomnia.rest/download)
- [IDE VSCODE](https://code.visualstudio.com/download)
- [TypeScript](https://www.typescriptlang.org/)
- [SQLite](https://www.sqlite.org/) 

-----------------------------------------------
# 2. Configurações Ambiente 
### Testando a API AgilStore

Os passos necessários para testar localmente são:

- Instalar as ferramentas necessárias
- Clonar o projeto : `git clone https://github.com/heloisebastos/Gerenciamento-de-Produtos-da-Loja-AgilStore.git`
- Executar o seguintes comandos na raiz do diretório


  - Instalar o Express
    ````
    npm install express
    ````
  - Instale as dependências
    ````
    npm install
    ````
  - Executa o script start definido no package.json, utilizado para rodar a aplicação. 
    ```plaintext
      npm  start
    ```
  - Esse script é usado durante o desenvolvimento com o nodemon, que reinicia o servidor automaticamente ao detectar alterações
    ```plaintext
        npm run dev
    ```

-----------------------------------------------
  # 3.Endpoints 
   ### Tabela de endpoint da API 
  | Método | Rota                                | Função                                            |
  | ------ | ----------------------------------- | ------------------------------------------------- |
  | POST   | ${baseUrl}/product                 | Cadastra um novo produto              |
  | GET    |${baseUrl}/products              | Lista todos os produtos       |
  | GET    |${baseUrl}/product              | Lista os produtos  por nome ou id      |
  | PATCH    | ${baseUrl}/product/:id   | Atualiza um produto específico       |
  | DELETE    | ${baseUrl}/product/:id        | Deleta um produto especifico       |

###
  - [POST] /product
    - **Descrição**: Endpoint para cadastrar um novo produto. Requer o envio dos dados do post pelo body.

      ```plainttext
        http://localhost:3000/agilstore/product 
      ```
    - **Exemplo de body**:

      ```json
      {
        "name": "Tablet A25",
        "category": "Eletrônicos",
        "quantity": 5,
        "price": 2999.99
      }
      ```
  - [GET] /products
      - **Descrição**: Endpoint para listar todos os produtos

        ```plainttext
          http://localhost:3000/agilstore/products
        ```
  - [GET] /product
      - **Descrição**: Endpoint para listar produto por id ou parte do nome

        ```plainttext
          http://localhost:3000/agilstore/product?name=

          http://localhost:3000/agilstore/product?id=
        ```
  

  - [PATCH] /product/:id
      - **Descrição**: Endpoint para atualizar dados de um produto específico

        ```plainttext
          http://localhost:3000/agilstore/product/:id
        ```
  - [DELETE] /product/:id
      - **Descrição**: Endpoint para deletar os dados de um produto específico

        ```plainttext
          http://localhost:3000/agilstore/product/:id
        ```

## Estrutura do projeto

```plaintext
  📂api-agilstore
   └───src
      ├───application
      │   └───use-case -> casos de uso do sistema
      ├───domain
      │   ├───models -> entidades de domínio da aplicação 
      │   └───repositories -> interfaces de repositórios para abstrair o acesso a dados
      ├───infrastructure
      │   └───repositories -> comandam a persistência da aplicação
      └───interface
          ├───controllers -> controladores que recebem as requisições HTTP
          ├───routes -> rotas da aplicação
          └───utils -> classe utilitária para a aplicação


```

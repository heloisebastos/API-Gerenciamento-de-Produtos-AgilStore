# API AgilStore
API de automação do gerenciamento de produtos da loja AgilStore

-----------------------------------------------
# Sumário
* [1. Introdução](#introdução)
    * [1.1. Tecnoligas](#tecnologias)
* [2. Configurações de Ambiente de Desenvolvimento](#2-configurações-ambiente-de-desenvolvimento)


-----------------------------------------------
# 1. Introdução

A AgilStore, uma loja de eletrônicos,que ampliou seu catálogo para incluir smartphones, laptops e acessórios. Devido ao aumento e diversificação dos produtos, surgiu a necessidade de automatizar o controle de inventário, que atualmente é feito manualmente em planilhas, o que tem se mostrado ineficiente e propenso a erros. Diante disso, é necessário desenvolver uma aplicação para gerenciar o inventário de forma automatizada, permitindo adicionar, listar, atualizar e remover produtos.

Este projeto foi desenvolvido em Node.js, utilizando TypeScript para adicionar tipagem estática e facilitar a manutenção do código. A escolha pelo TypeScript foi feita para melhorar a qualidade do desenvolvimento e proporcionar maior segurança na detecção de erros.
## 1.1. Tecnologias 

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




  ## Endpoints da API

  | Método | Rota                                | Função                                            |
  | ------ | ----------------------------------- | ------------------------------------------------- |
  | POST   | /product                 | Operação para cadastrar um novo produto              |
  | GET    |/products              | Operação listar todos os produtos       |
  | GET    |/product              | Operação listar os produtos  por nome ou id      |
  | PATCH    | /product/:id   | Operação para atualizar um produto específico       |
  | DELETE    | /product/:id        | Operação para deletar um book especifico       |
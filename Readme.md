# API AgilStore
API de automação do gerenciamento de produtos da loja AgilStore

-----------------------------------------------
# Sumário
* [1. Introdução](#introdução)
    * [1.1. Tecnoligas](#tecnologias)
* [2. Configurações de Ambiente de Desenvolvimento](#2-configurações-ambiente-de-desenvolvimento)


-----------------------------------------------
# 1. Introdução
 Este projeto foi desenvolvido em Node.js, utilizando TypeScript para adicionar tipagem estática e facilitar a manutenção do código. A escolha pelo TypeScript foi feita para melhorar a qualidade do desenvolvimento e proporcionar maior segurança na detecção de erros.
## 1.1. Tecnologias 

-----------------------------------------------
# 2. Configurações Ambiente 
### Testando a API AgilStore

Os passos necessários para testar localmente são:

- Instalar as ferramentas necessárias
- Clonar o projeto
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

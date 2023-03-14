# Meli App

Aplicação que permite realizar a busca de produtos do Mercado Livre, assim como visualizar detalhes de um produto específico, seja selecionando o produto da lista ou buscando diretamente na barra de pesquisas do navegador, passando o id do produto que se deseja consultar.

## Instalação

Ao clonar o projeto, deve-se instalar suas dependências digitando o comando `yarn install` na pasta raiz e na pasta server.

## Testando a aplicação

Dentro da pasta raiz, digitar o comando `yarn test`.

## Iniciando o projeto

Rodar o comando `yarn dev` na pasta raiz para iniciar o projeto no modo de desenvolvimento. Esse comando vai inicializar tanto a UI quanto o servidor usado para fazer requisições à API do Mercado Livre.

Acessar [http://localhost:3000](http://localhost:3000) para ver a aplicação no browser.

## Rotas

### UI

- "/" - Permite acessar barra de pesquisa de produtos.
- "/items?search=:querySearch" - Realiza a busca dos produtos baseado no parâmetro de busca enviado.
- "/items/:id" - Busca um produto pelo seu id.


### Server

- GET "/items?q=:query" - Busca uma lista de dados de produtos da API do Mercado Livre

- GET "/items/:id" - Busca um determinado produto por seu id.

- GET "/items/:id/description" - Busca a descrição detalhada de um determinado produto pelo seu id.



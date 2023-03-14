# Meli App

Aplicação que permite realizar a busca de produtos do Mercado Livre, assim como visualizar detalhes de um produto específico, seja selecionando o produto da lista ou buscando diretamente na barra de pesquisas do navegador, passando o id do produto que se deseja consultar.

Esse projeto utiliza React Hooks, sendo mais simples de testar e reutilizar a lógica entre diferentes componentes.

## Instruções de Execução

### Instalação

Ao clonar o projeto, deve-se instalar suas dependências digitando o comando `yarn install` na pasta raiz e na pasta server.

### Testando a aplicação

Dentro da pasta raiz, digitar o comando `yarn test`.

### Iniciando o projeto

Rodar o comando `yarn dev` na pasta raiz para iniciar o projeto no modo de desenvolvimento. Esse comando vai inicializar tanto a UI quanto o servidor usado para fazer requisições à API do Mercado Livre.

Acessar [http://localhost:3000](http://localhost:3000) para ver a aplicação no browser.

Prezando pela qualidade e boas práticas, esse projeto utiliza o Husky. Ao dar push para o github é acionado o script de pre-push, que vai fazer o lint e rodar os testes unitários. Caso haja algum problema de lint ou algum teste falhe, não será possível fazer o push, dessa forma quem estiver desenvolvendo precisará consertar os erros encontrados antes de subir qualquer alteração.

### Rotas

#### UI

- "/" - Permite acessar barra de pesquisa de produtos.
- "/items?search=:querySearch" - Realiza a busca dos produtos baseado no parâmetro de busca enviado.
- "/items/:id" - Acessa diretamente a visão do detalhe do produto.


#### Server

- GET "/items?q=:query" - Busca uma lista de dados de produtos da API do Mercado Livre

- GET "/items/:id" - Busca um determinado produto por seu id.

- GET "/items/:id/description" - Busca a descrição detalhada de um determinado produto pelo seu id.


## Componentes da UI

- Header
    - O Header é o componente que está presente em todas as páginas da aplicação, contendo nele a navbar que renderiza o componente SearchBar. Dessa forma, a partir de todas as páginas é possível realizar a busca de produtos, fazendo com que o usuário não precise ficar navegando entre páginas para realizar outra busca. Também é possível voltar para a página Home ao clicar na logo do site.

- Loader
    - O componente Loader é renderizado enquanto se espera algum resultado das requisições feitas à API, servindo como retorno imediato para que o usuário não fique confuso sem saber o que está acontecendo na aplicação.

- SearchBar
    - A SearchBar é o componente que contém tanto o input onde o usuário digita o que deseja pesquisar, quanto o botão de pesquisar que redireciona para o resultado da busca ao ser clicado. É um componente separado que pode ser reutilizado em outras páginas ou componentes caso necessário, pois não depende especificamente de estar no Header. 

    - Além disso, esse componente utiliza o Hook customizado useProductsService, que vai buscando os produtos na API conforme o usuário vai pesquisando, e, estando na página Home, caso haja resultados encontrados baseado no texto da pesquisa, alguns desses resultados são mostrados para o usuário, permitindo que ele clique diretamente no nome do produto e seja redirecionado para os detalhes dele.

## Estrutura das páginas da UI

- Home
    - Renderiza o componente Header.

- NotFound
    - Caso a página solicitada não esteja mapeada nas rotas, o usuário é redirecionado para essa página que contém a informação de que a página não foi encontrada. 

- ProductsList
    - Essa página é chamada quando o usuário clica ou no ícone de pesquisa da SearchBar ou no nome do produto que aparece como sujestão conforme vai digitando na barra de pesquisa.

    - A estrutura está aninhada pois uma página se refere a outra.

    - Para cada produto encontrado ela chama a Product.

    - Product : Mostra thumbnail do produto, preço, título e local. Dentro dela é realizada a chamada para a página ProductDetails.
     
        - ProductDetails
            - Contém informações detalhadas de um produto, como nome, preço, imagem, descrição, quantidade vendida e condições de uso (novo ou usado). 



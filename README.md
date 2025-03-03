# Teste Front-End - React com Next.js e Tailwind CSS

Este repositório contém a implementação de um teste técnico de front-end, construído com **React**, **Next.js** e **Tailwind CSS**. O objetivo é demonstrar a capacidade de criar uma aplicação web responsiva e funcional, utilizando boas práticas de desenvolvimento.

### Estrutura do Projeto:

- **Página inicial**: `/`
- **Página de busca**: `/search`
- **Página de detalhes do hotel**: `/hotel/[id]`

A aplicação se comunica com uma **Fake API** que simula a listagem de hotéis e sugestões de destinos. A API está disponível localmente através do servidor, configurado com o repositório fornecido.

### Funcionalidades:

- Exibição de **sugestões de destinos** na página inicial.
- **Busca de hotéis** com filtros específicos.
- Exibição de **detalhes do hotel** em uma página dinâmica.

### Tecnologias Utilizadas:

- **React** e **Next.js** para a construção da aplicação.
- **Tailwind CSS** para o design responsivo e personalizável.
- **Fake API** para simulação de dados com as rotas `/suggestions`, `/hotels`, e `/hotels/[id]`.

### Como Rodar:
2. Instale as dependências e inicie o site local:
    ```bash
    npm install
    npm run dev
    ```


### Como Rodar o servidor:

1. Clone o repositório da Fake API:  
   [Fake API GitHub](https://github.com/enio-infotera/infotera-frontend-test-server)

2. Instale as dependências e inicie o servidor local:
    ```bash
    pnpm install
    pnpm run server
    ```

3. Acesse a aplicação em `http://localhost:3333`.


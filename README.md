# Documentação do Projeto: Livros Vai na Web

## Descrição
Este projeto é uma aplicação React que permite aos usuários visualizar livros doados e realizar doações de livros. Ele foi desenvolvido com React, React Router, Axios e Sass.

## Página "Quero Doar"
A página "Quero Doar" é um componente React que permite aos usuários preencher um formulário para cadastrar livros que desejam doar. Os dados do formulário são enviados para uma API externa, e o formulário é resetado após o envio bem-sucedido.

### Estrutura do Componente
#### Importações
- **queroDoar.module.scss**: Arquivo de estilos em SCSS para estilização do componente.
- **Frame.png**: Imagem de um livro exibida na página.
- **axios**: Biblioteca utilizada para realizar requisições HTTP.
- **useState**: Hook do React usado para gerenciar os estados do formulário.

#### Estados
O componente utiliza os seguintes estados para armazenar os dados do formulário:
- **titulo**: Armazena o título do livro.
- **categoria**: Armazena a categoria do livro.
- **autor**: Armazena o nome do autor do livro.
- **imagem_url**: Armazena o link da imagem do livro.

## Funcionamento do Formulário
### Campos do Formulário
O formulário contém os seguintes campos de entrada:
- **Título**: Campo de texto para o título do livro.
- **Categoria**: Campo de texto para a categoria do livro.
- **Autor**: Campo de texto para o nome do autor.
- **Link da Imagem**: Campo de texto para o URL da imagem do livro.

### Envio dos Dados
#### Função enviarDados:
- Envia os dados do formulário para a API `https://desafio-api-flask.onrender.com/doar` utilizando uma requisição POST.
- Exibe um alerta de sucesso ao usuário caso os dados sejam enviados corretamente.
- Reseta os campos do formulário após o envio.

#### Tratamento de Erros:
- Caso ocorra um erro durante o envio, uma mensagem de erro é exibida ao usuário com detalhes do problema.

## Código do Formulário
O formulário é renderizado no componente :

### Como Preencher o Formulário
Acesse a página "Quero Doar":
- Navegue até a página de doação no menu principal.

Preencha os campos:
- **Título**: Insira o título do livro.
- **Categoria**: Informe a categoria do livro (ex.: Ficção, Educação, etc.).
- **Autor**: Digite o nome do autor do livro.
- **Link da Imagem**: Cole o URL de uma imagem representando o livro.

Envie o formulário:
- Clique no botão "Doar".
- Se os dados forem enviados com sucesso, você verá um alerta confirmando a doação.

#### Erros no envio:
- Caso ocorra algum erro, uma mensagem será exibida com detalhes do problema.


## Tecnologias Utilizadas
- **React**: Para a construção da interface.
- **Axios**: Para realizar requisições HTTP.
- **Sass**: Para estilização com SCSS.

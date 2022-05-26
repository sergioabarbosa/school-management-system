# Smart-Management-System

<div align="center"><img src="https://user-images.githubusercontent.com/36240511/170484568-b46f7524-22a4-4723-979a-5546fbbe9ed4.png" width="200"></div>

Tabela de conteúdos
=================
   * [Sobre](#Sobre)
   * [Status do Projeto](#Status)
   * [Features](#Features)
   * [Instalação](#instalação)
   * [Como usar](#como-usar)
   * [Pré-Requisitos](#Pré-requisitos)
   * [Testes](#testes)
   * [Tecnologias](#Tecnologias)
   
   <hr>
   
   <h3>Sobre</h3>
   
   <div align="justify"><p text-align: justify>Deu vontade de teclar um pouco com os amigos? Webchat Socket está prontinho para lhe satisfazer. Webchat Socket utiliza um moderno sistema de troca de mensagens instântaneas, baseado no modelo de comunicação full-duplex, onde se abre um canal permanete de comunicação entre cliente e servidor. Assim seu papo estará sempre em dia e as notícias sempre bem atualizadas.
      Webchat Socket teve seu front-end simplesmente desenvolvido em HTML5 e JavaScript. Para o Back-end utilizamos Node.js, algumas bibliotecas suplementares, bem como, não poderia faltar, a biblioteaca Socket.io. Foi utilizado um Banco de Dados NoSQL MongoDB para armazenar as mensagens.
  
  Para acessar a demostração favor clique no link: https://sergiobarbosa-webchat.herokuapp.com/
  
<h1 align="left">
    <a href="https://nodejs.org/">🔗 Node</a>
</h1>
<p align="left">🚀 lib para construção de API's</p>

<h1 align="center">
    <a href="https://socket.io/">🔗 Socket.io</a>
</h1>
<p align="center">🚀 lib para utilização de Socket</p>
</div>

<hr>
<h3>Status</h3>

<h4 align="left"> 
  Node.js 🚀 Concluído
  
  <hr>
  
  ### Features

- [x] Envio e recebimento de mensagens
- [x] Alteração de nickname
- [x] Persisteência de dados
  
</h4>

<hr>

<h3>Instalação</h3>

<h3>Pré-Requisitos</h3>
### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

<div>

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <git@github.com:sergioabarbosa/webchat.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd webchat

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# O servidor inciará na porta:3000 - acesse <http://localhost:3333>
  
```
  <hr>
  
  ### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [HTML5](https://www.w3.org/)
- [Node.js](https://nodejs.org/en/)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/)
- [Socket](https://reactnative.dev/)
  
    <div>
  <img align="center" alt="Sérgio-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="center" alt="Sérgio-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
  <img align="center" alt="Sérgio-Node" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg">
  <img align="center" alt="Sérgio-git" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg">
  <img align="center" alt="Sérgio-socketio" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/socketio/socketio-original.svg">
   </div>
  
  <div align="justify">
  <h3>Como usar</h3>
  Com o servidor iniciado:
  
  - Com o projeto devidamente clonado e com as dependências instaladas(NPM) digite em seu terminal: npm start.
  - Acesse o endereço do site. Para acesso local digite em seu navegador: http://localhost:3000.
  - Em seguida digite seu nome de usuário(Nickname) no campo Nickname. Caso opte por enviar mensagens anonimanete deixe esse campo vazio que automaticamente será     gerado um token de acesso ao chat. Veja na imagem abaixo os campos:
    
  <div align="center"><img src="https://user-images.githubusercontent.com/36240511/152421474-e0134877-17ab-407e-845f-f867f690763f.png" width="750"></div>
  </div>
  
  <hr>
  
  <h3>Testes</h3>
  Teste 1 - Back-end: Conexão simultânea de clientes e troca de mensagens em chat público;
            -Será validado que todos os clientes que estão conectados ao chat podem enviar e receber mensagens;
  
  Teste 2 - Interface de Usuário para interação dos clientes;
            - Será validado que o front-end tem um campo de texto para preencher um nome de usuário e um botão para alterar o apelido (nickname);
  
  Teste 3 - Verifique se as mensagens são persistentes;
            - Será validado que o histórico de 30 mensagens irá aparecer quando o cliente se conectar;
  
  Execução dos testes:
  
 <p>Com o servidor rodando digite em seu terminal : npm test tests/teste[numero_do_teste]</p>
  <p>Exempĺos:</p>
   <p> > npm test tests/teste1;</p>
   <p> > npm test tests/teste2;</p>
   <p> > npm test tests/teste3.</p>
  
 <hr>
  
<h3>Author</h3>
  
<a href="https://blog.rocketseat.com.br/author/thiago/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/36240511?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Sérgio Barbosa</b></sub></a> <a href="" title="Rocketseat">🚀</a>


  Feito com ❤️ por Sérgio Barbosa👋🏽 Entre em contato!
  <p><img align="center" alt="Sérgio-React" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg">
  <img align="center" alt="Sérgio-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="center" alt="Sérgio-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
  <img align="center" alt="Sérgio-Python" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg">
  <img align="center" alt="Sérgio-Java" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg">
  <img align="center" alt="Sérgio-Node" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg">
  <img align="center" alt="Sérgio-git" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"></p>

   <div> 
  <a href="https://www.youtube.com/channel/UCm0-AxXlM28i6TGjJC6aWsA" target="_blank"><img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" target="_blank"></a>
  <a href="https://www.instagram.com/sergiobarbo/" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
 	<a href="https://www.twitch.tv/cangaceirobra" target="_blank"><img src="https://img.shields.io/badge/Twitch-9146FF?style=for-the-badge&logo=twitch&logoColor=white" target="_blank"></a>
 <a href="https://discord.gg/CANGACEIRO#2031" target="_blank"><img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" target="_blank"></a> 
  <a href = "mailto:sergio.alvesbarbosa@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
  <a href="https://www.linkedin.com/in/sergioabarbosa" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
 
 <img src="https://media.giphy.com/media/LnQjpWaON8nhr21vNW/giphy.gif" width="60"> <em><b>I love connecting with different people</b> so if you want to say <b>hi, I'll be happy to meet you more!</b> :)</em>
 
</div>

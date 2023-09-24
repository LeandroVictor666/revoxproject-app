# RevoxProject-APP

Esse é o respositorio da aplicação front-end do projeto "RevoX", RevoX é meu projeto de Rede Social
Minha pretenção com esse projeto é que ele seja trabalhado como SPA, inicialmente eu iria utilizar o NextJs, porém, como é uma social media, uma aplicação SPA faz mais sentido, já que o nextjs utiliza SSR, e esse website irá conter muitas interações do usuario
Na maioria se não todos os projetos que estão no meu repositorio representa um codigo do mundo real, e não algo didatico

Nesse projeto estou seguindo a arquitetura TDD e aplicando conceitos de Clean-Code.

---

# Tecnologias

## Front-End

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

---

## Back-End

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

---

# Como instalar o projeto

#### **_(Tenha o Node + NPM instalado na sua maquina)_**

### ***https://nodejs.org/en***

---

- 1. Primeiro faça o git clone ou apenas faça o download do projeto
- 2. Rode o comando 'npm run install' no seu terminal
- 3.  após ter executado o comando, execute o comando 'npm run dev', e o projeto estará rodando em modo desenvolvimento na sua maquina, só acessar a url local que o vite te apresentou no terminal! :)

---

# Como realizar a build do projeto

- 1. Execute todos os passos apresentados acima (o terceiro passo é opcional)
- 2. Agora, abra o arquivo 'tsconfig.json', na linha 19 (nesse momento que estou escrevendo essa doc): "noUnusedLocals": false,
- 3. Altere o "noUnusedLocals": false, para '"noUnusedLocals": true,' (**SEM AS ASPAS SIMPLES!**), isso é necessario pois (até esse momento que estou escrevendo a doc, recebi um erro ao importa o global.css, pois é um arquivo de estilo global, não utilizo nenhuma variavel dele em nenhum local, e o eslinter reclama disso, por PADRÃO o noUnusedLocal fica ativado pois eu prezo pela qualidade/padrões de codigo, e só desabilito ao realizar o BUILD do projeto.)
- 4. Agora rode o comando npm run build e seja feliz :D

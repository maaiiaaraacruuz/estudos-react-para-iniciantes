# React para Iniciantes: Página de Depoimentos :red_haired_woman: :person_red_hair: :older_woman:

### :link: Link para ver a aplicação: https://projeto-testemunhos-estudos.vercel.app/

O projeto consiste na criação de uma página de depoimentos em React, onde o objetivo é reproduzir o mais fiel possível o modelo existente na página do FreeCodeCamp, que é um canal do Youtube com diversos cursos de tecnologia.

<img src=https://github.com/maaiiaaraacruuz/estudos-react-para-iniciantes/blob/main/Projeto-Testemunhos/meu-app/depoimentos-react.png/>

Os depoimentos são de alunos, que em algum momento de suas vidas fizeram cursos no FreeCodeCamp.
<br>
<br>
## :dart: Problema de Negócio a ser resolvido:

<b>Do posto de vista de negócio<b>, a página tinha como objetivo mostrar para novos possíveis estudantes a opinião de outras pessoas sobre o canal, e convencê-las que o conteúdo de lá pode ajudá-las nesta jornada de aprendizado em Tech.
  
No fim das contas, "captar" novos estudantes através dos depoimentos.
  
<br>
  
## :computer: Problema de Tecnologia a ser resolvido:

<b>Do ponto de vista de tech<b>, era necessário criar um código dinâmico, ou seja, que se adaptasse ao longo do tempo para receber novos depoimentos e ser fácil a manutenção.

E foi aí que entrou o React, porque como o React é baseado em componentes, foi criado um componente único chamado Testemunhos, que serviria para todos os depoimentos, uma vez que o layout de todos eram iguais.

E para facilitar a personalização foi usado props justamente para deixar dinâmico o nome de cada pessoa, o cargo que ela ocupa, onde ela trabalha, etc, e não ter que mexer no componente principal, toda vez que surgir um depoimento novo.
<br>
<br>
  
## O que vou aprender com este projeto?
  
Com o projeto, você será capaz de entender inicialmente o que é o React, entender que ele é baseado em componentes (funcionais e de classe), conhecer a propriedade props para deixar o código dinâmico e a questão de importação e exportação de componentes. 
  
  
=======================================================================================

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

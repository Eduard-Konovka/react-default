# Лайт-сборка Create React App

Базовая сборка Create React App + Prettier + Husky + ESLint + Modern Normalize + deploy gh-pages

## Для установки сборки:

1. Копируем этот репозиторий себе.

2. Открываем в VSCode и запускаем в консоли команду `npm ci` чтобы установить загрузчики и плагины из перечня
   "package-lock.json".

3. Меняем под себя значения ключа в файле "package-lock.json":
   `"name": "react-default"` на `"name": "имя_вашего_проекта"` или просто `"name": ""`

4. Меняем под себя значения ключей в файле "package.json":
   1. `"name": "react-default"` на `"name": "имя_вашего_проекта"` или просто `"name": ""`;
   2. В параметрах "repository" - `"url": "git+https://github.com/Eduard-Konovka/react-default.git"` на
      `"url": "git+https://github.com/ваше_имя_на_ГитХабе/имя_вашего_проекта.git"`;
   3. В параметрах "bugs" - `"url": "https://github.com/Eduard-Konovka/react-default.git/issues"` на
      `"url": "https://github.com/ваше_имя_на_ГитХабе/имя_вашего_проекта.git/issues"`;
   4. `"author": "Eduard Konovka <ed098ua@gmail.com>"` на `"author": "Ваше_имя <ваш_e-mail>"` или просто `"author": ""`;
   5. `"homepage": "https://Eduard-Konovka.github.io/react-default"` на
      `"homepage": "https://ваше_имя_на_ГитХабе.github.io/имя_вашего_проекта"`.

## Команды скриптов в консоли bash:

Вас интересуют первых два скрипта: `npm start` и `npm run deploy` :)

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run deploy`

Deploy development files to GitHub.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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

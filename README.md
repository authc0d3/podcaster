# 🎙️ Podcaster

## A blazingly fast podcast SPA demo application

This project is a single page application built with TypeScript and React, using the iTunes API for podcast playback. Get stared and read more information in the sections below:

- [Get started](#🚀-get-started)
- [Technology stack](#⚛️-technology-stack)
- [Project architecture](#📐-project-architecture)
- [Testing](#🧪-testing)
- [Future improvements](#🏗️-future-improvements)
- [License](#📖-license)

## 🚀 Get started

This project uses [Vite](https://vitejs.dev/), a frontend tool that provides you with a fast and easily extensible development environment. To launch the application, you only need to have [Node.js](https://nodejs.org/) previously installed on your computer.

Once the project has been downloaded, open a terminal and install the dependencies by running the following command in the project root folder:

```console
npm install
```

### Run in dev mode

To start the project in development mode, run the command below:

```console
npm run dev
```

Vite will launch the web server at the following address: http://localhost:3000/podcaster

### Build for production

To create an optimized version for deploying the project in production, launch the command below:

```console
npm run build
```

Once the process is finished, you will get all the necessary code for production environment in the _/dist_ directory.

If you want to preview the compiled application for production, run the following command:

```console
npm run preview
```

The preview server will starts at: http://localhost:8080/podcaster

## ⚛️ Technology stack

This project is written in [TypeScript](https://www.typescriptlang.org/) as the main programming language and makes use of [React](https://react.dev/) for graphical user interface development.

Other main libraries used for its development include:

- **Tanstack React Query & Query Storage Persister**: These libraries provide us with a fast and easy way to handle the application state asynchronously, as well as cache data extracted from the API and avoid repeating unnecessary calls. [More info.](https://tanstack.com/query)

- **date-fns**: Is a simple and consistent toolset for manipulating JavaScript dates. [More info.](https://date-fns.org/)

- **fontawesome** (free version): One of the most commonly used icon libraries by developers and designers. [More info.](https://fontawesome.com/)

- **classnames**: A simple JavaScript utility for conditionally joining classNames together. [More info.](https://github.com/JedWatson/classnames)

- **sanitize-html**: provides a simple HTML sanitizer with a clear API. [More info.](https://github.com/apostrophecms/sanitize-html)

## 📐 Project architecture

To facilitate the long-term extension and maintainability of the project, a clean directory and file architecture has been chosen.

### Folder structure

The project directories are structured following a functionality / file type scheme. The main directories of the application (into the _/src_ directory) are named as the functionality they refer to, and into them, we will find directories (modules) according to the purpose of the files they contain.

For example, for the main functionality of the project, we have the _/podcast_ directory, and inside it, we find folders such as _/components_, _/hooks_, _/views_, _/utils_, etc.

![folder structure](https://github.com/authc0d3/podcaster/blob/main/assets/folder_structure.png?raw=true)

For core and shared modules that are used by multiple functionalities or that could be shared in the future, we have the /commons directory.

### Good practices with imports / exports

Another good practice applied in this project is the way of exporting and importing modules. Each module has an index.ts file whose sole functionality is to export the functions, interfaces, etc. from the different subdirectories and files of the module, making imports more optimal and much more elegant in terms of code.

On the other hand, an alias has been configured in the TypeScript and Vite configuration files that further facilitates module import, favoring the use of absolute paths that are easier to read.

### Code style

This project makes use of eslint (using the standard configuration) and prettier to ensure the maintenance of a robust, styled, and easy-to-read code.

Some additional rules have been added to the standard configuration of eslint to:

- Favor the maintenance of a more logical order for imports.
- Enforce the use of stronger typing by preventing the explicit use of 'any' and requiring the specification of the return type in functions.
- Highlight the use of 'console.log' as an error to prevent it from reaching production and potentially exposing sensitive application context information.
- Encourage the use of React code writing standards.

The project has a _.vscode_ folder that recommends the use of some extensions such as Prettier and Eslint, as well as some configurations to maintain these rules during development. However, there are also two commands available to automatically detect linter errors and code formatting.

```console
npm run format
npm run lint
```

## 🧪 Testing

This project uses Vitest as a test runner, and testing library with jest-dom for unit testing of components, hooks, etc.

To run the tests, you can use the following command:

```console
npm run test
```

Vitest also has a web interface where you can run and view test results in a more user-friendly way. To run the tests with this interface enabled, you can use the following command:

```console
npm run test:ui
```

![folder structure](https://github.com/authc0d3/podcaster/blob/main/assets/vitest.png?raw=true)

Finalmente, Vitest también puede analizar la cobertura de los test. Para ejecutarlo puedes usar el siguiente comando:

```console
npm run test:coverage
```

## 🏗️ Future improvements

No application is perfect and all can be improved, therefore, some of the improvements that would be nice to implement in the future for this project are:

- Improving the testing of hooks and certain components by mocking API calls.
- Implementing virtual scrolling in the podcast list, as well as lazy loading images.
- Implementing a light / dark theme and giving users the option to use either one, or use the configured system theme by default.
- Improving the application for accessibility

# 📖 License

This project is under [MIT license](https://opensource.org/license/mit/)

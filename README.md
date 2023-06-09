# 🎙️ Podcaster

## A blazingly fast podcast SPA demo application

![example workflow](https://github.com/authc0d3/podcaster/actions/workflows/build-and-deploy.yml/badge.svg)

This project is a single page application built with TypeScript and React, using the [iTunes Search API](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html) for podcast playback. Get stared and read more information in the sections below:

- [Get started](#get-started)
- [Technology stack](#technology-stack)
- [Project architecture](#project-architecture)
- [Testing](#testing)
- [Workflows](#workflows)
- [Future improvements](#future-improvements)
- [License](#license)

## 🚀 Get started<a id="get-started"></a>

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

Vite will launch the web server at the following address: http://localhost:3000/

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

## ⚛️ Technology stack<a id="technology-stack"></a>

This project is written in [TypeScript](https://www.typescriptlang.org/) as the main programming language, [React](https://react.dev/) for graphical user interface development and SASS for styles pre-processing.

Other main libraries used for its development include:

- **Tanstack React Query & Query Storage Persister**: These libraries provide us with a fast and easy way to handle the application state asynchronously, as well as cache data extracted from the API and avoid repeating unnecessary calls. [More info.](https://tanstack.com/query)

- **date-fns**: Is a simple and consistent toolset for manipulating JavaScript dates. [More info.](https://date-fns.org/)

- **fontawesome** (free version): One of the most commonly used icon libraries by developers and designers. [More info.](https://fontawesome.com/)

- **classnames**: A simple JavaScript utility for conditionally joining classNames together. [More info.](https://github.com/JedWatson/classnames)

- **sanitize-html**: provides a simple HTML sanitizer with a clear API. [More info.](https://github.com/apostrophecms/sanitize-html)

## 📐 Project architecture<a id="project-architecture"></a>

To facilitate the long-term extension and maintainability of the project, a clean directory and file architecture has been chosen.

### Folder structure

The project directories are structured following a functionality / file type scheme. The main directories of the application (into the _/src_ directory) are named as the functionality they refer to, and into them, we will find directories (modules) according to the purpose of the files they contain.

For example, for the main functionality of the project, we have the _/podcast_ directory, and inside it, we find folders such as _/components_, _/hooks_, _/views_, _/utils_, etc.

![folder structure](https://github.com/authc0d3/podcaster/blob/main/assets/folder_structure.png?raw=true)

For core and shared modules that are used by multiple functionalities or that could be shared in the future, we have the /commons directory.

### Good practices using imports / exports

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

Regarding styles, we have opted to use SCSS instead of SASS to maintain a syntax closer to pure CSS.

## 🧪 Testing<a id="testing"></a>

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

Finally, Vitest can also analyze test coverage. To do so, you can use the following command:

```console
npm run test:coverage
```

## ⚙️ Workflows<a id="workflows"></a>

This project uses GitHub Actions and Pages services to perform the build and deployment.

In _/.github/workflows_ folder, you can find two YAML files with the declaration of the actions that GitHub Actions should trigger when certain events occur.

On one hand, we have the pull-request workflow, which automatically runs the tests of a branch when a pull-request is opened against the main branch.

On the other hand, there is the workflow for deploying the application, which is executed when a commit is made to the main branch. It uses the [JamesIves/github-pages-deploy-action](https://github.com/JamesIves/github-pages-deploy-action) action to compile and deploy the project to Github Pages.

## 🏗️ Future improvements<a id="future-improvements"></a>

No application is perfect and all can be improved, therefore, some of the improvements that would be nice to implement in the future for this project are:

- Improving the testing of hooks and certain components by mocking API calls.
- Implementing virtual scrolling in the podcast list, as well as lazy loading images.
- Implementing a light / dark theme and giving users the option to use either one, or use the configured system theme by default.
- Improving the application for accessibility
- Add a breadcrumb to improve navigation

# 📖 License<a id="license"></a>

This project is under [MIT license](https://opensource.org/license/mit/)

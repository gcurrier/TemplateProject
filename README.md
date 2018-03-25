# TemplateProject

This project is an attempt at building a kind of "starter pack" for a semi-specific type of javascript project using node. The complaetion goal is to create a reusable prject template for building apps using Typescript and developed with the React library using ECMA2017 scripting (transpiled with Babel for Browser compatibility where necessary). In short, a development environment that is generic enough to suit most needs while also not being too restrictive.

## Current Progress
* 2018-03-24: 
> Incorporated webpack, webpack-dev-server and type script successfully (along with a rudimentary application that can be used for 
> testing. Also included is a means to lazy load designated modules, as well as incorporate required file assets (css, less, sass, xml,csv 
> files) and build the template "index.html" page during the build process.

* 2018-03-25
> Removed a few packages that did not appear to work as expected (in the context of other packages). For example, awesome-typescript-loader does not provide the chunk files with an ID during build time (the webpack.HashedModuleIdsPlugin is designed to do this when using ts-loader), so it was removed. Will use webpack-dev-server in favor of http-server (it just feels easier to configure).

> Additionally, the xml-loader package was shifted to the "dependencies" tree (as indicated by the package README)

## Getting Started

There are two methods for getting started with React and Redux.

### Familiar with Git?
Checkout this repo, install dependencies, then start the package installation process with the following:

```
> git clone https://github.com/gcurrier/TemplateProject.git
> cd TemplateProject
> npm install
> npm start
```

### Not Familiar with Git?
Click [here](https://github.com/gcurrier/TemplateProject/archive/master.zip) to download the current version .zip file.  Extract the contents of the zip file, then open a terminal window or shell environment, change to the project directory, and:

```
> npm install
> npm start
```

### Running and/or Building the project

There are currently two ways to run the project:
* Statically, from the file system (project must be compiled)
* From the webpack-dev-server

```
> npm run build #statically served from the file system
> npm run start #for served via webpack-dev-server
```

## Next Steps
- [x] include React, React-Dom, Babel.
- [x] include React-Router.
- [ ] Incorporate a testing framework (such as Chai or Mocha).
- [ ] Write some test for various functionality that may be used as template examples.

## References 
[webpack guides](https://webpack.js.org/guides/): Various guides to configuring the webpack.config file.

[webpack-dev-server](https://webpack.js.org/configuration/dev-server/): Configuring the webpack development server.

[html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin#configuration) Configuration of the html-webpack-plugin package.

[React, webpack and Typescript](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html) A tutorial on how to wire up React, Webpack and Typescript.

[Some notes on awesome-typescript-loader package](https://github.com/s-panferov/awesome-typescript-loader/blob/master/README.md)

[Some notes on build performance and analysis](https://hackernoon.com/optimising-your-application-bundle-size-with-webpack-e85b00bab579)

[Code Splitting](https://serverless-stack.com/chapters/code-splitting-in-create-react-app.html) An excellent article for React applications

## Comments or Suggestions
This is a work in progress and will likely be so for a while as I get better at this. Thoughts and/or suggestions are welcome. 

Incidentally, if you like this and want to use it, go for it...just give me a mention in the setup somewhere...

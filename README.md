# TemplateProject

This project is an attempt at building a kind of "starter pack" for a semi-specific type of javascript project using node. The complaetion goal is to create a reusable prject template for building apps using Typescript and developed with the React library using ECMA2017 scripting (transpiled with Babel for Browser compatibility where necessary). In short, a development environment that is generic enough to suit most needs while also not being too restrictive.

## Progress
* 2018-03-25: 
> Incorporated webpack, webpack-dev-server and type script successfully (along with a rudimentary application that can be used for 
> testing. Also included is a means to lazy load designated modules, as well as incorporate required file assets (css, less, sass, xml,csv 
> files) and build the template "index.html" page during the build process.

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
- [ ] include React, React-Dom, Babel
- [ ] include React-Router
- [ ] Incorporate a testing framework (such as Chai or Mocha)

## References 
[webpack guides](https://webpack.js.org/guides/): Various guides to configuring the webpack.config file

[webpack-dev-server](https://webpack.js.org/configuration/dev-server/): Configuring the webpack development server

## Comments or Suggestions
This is a work in progress and will likely be so for a while as I get better at this. Thoughts and/or suggestions are welcome.

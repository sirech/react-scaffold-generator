# React Scaffold Generator

[![Build Status](https://travis-ci.org/sirech/react-scaffold-generator.svg?branch=master)](https://travis-ci.org/sirech/react-scaffold-generator) [![Coverage Status](https://coveralls.io/repos/github/sirech/react-scaffold-generator/badge.svg?branch=master)](https://coveralls.io/github/sirech/react-scaffold-generator?branch=master)

A command-line utility to generate scaffolds for React components and product areas incl. routers, containers, Redux reducers and actions etc, inspired by [TwentyThree](https://github.com/23/react-scaffold-generator), but modified for a different structure.

## Install

Currently you can install it as a beta release using:

```
npm install -g react-scaffold-generator@beta
```

This will install the module globally.

## Run

Run a task with:

```
react-scaffold-generator <taskName>
```

For getting help run:

```
react-scaffold-generator --help
```

or 

```
react-scaffold-generator <taskName> --help
```


Currently two types of tasks are supported:

### Task "area"

Running it in the main folder of your module will generate a series of folders based on the URL you provide. For example for providing `area/subarea` it will generate the following structure:

```
app/Area/Subarea
├── actions.js - actions 
├── components - subfolder for components, see below
├── index.js - exports a function that registers the reducer and routes
├── reducer.js - reducer function
└── routes.js - routes

```

Based on provided answers it will also generate a component in the `components` folder (see `Task "component"` below)

### Task "component"

This task will also ask you for an area URL unless it is run with a `--here` (or `-e` option). Running with that option is supported from an area folder or the `components` subfolder of the area.

For a given `test` component name it will generate a subfolder within the `components` folder with the following structure:

```
components/TestComponent
├── TestComponent.jsx  - the main React component file
├── TestComponent.scss - SASS stylesheets scoped down to the component class
└── TestComponent.test.js - sample tests that fail on default and provoke adjustment
```

## Integrate into existing setup

### First level area

If you chose a first-level URL like `/areaname` during the task run you need to import the register function from `index.js` in the area root. The function registers routes and the reducer and should be called with the following signature:

```
registerArea(routerNamespace, childRoutes, reducers);
```

* *routerNamespace* - a string for the path of your area, usually the same as the last segment of the URL
* *childRoutes* - an Object describing routes passed into React Router, note that it will be modified by the method above
* *reducers* - reducer will be exported here and can be passed when your Redux store is initialized (for example through Redux `combineReducers` function)

### Deeper areas

The `index.js` file is unnecessary in this case and can be deleted.

#### Reducer 

First of all you need to decide whether the area should have its own reducer or use the reducer of the area above. In the former case you will have to import the reducer file in the `index.js` register function of the area above and assign the reducer to a new key of your reducers object. In the latter case you can delete the generated `reducer.js` file. 

#### Routing

In the `routes.js` router setup of the area above you can import the generated `routes.js` file and add it to the `childRoots` array. 





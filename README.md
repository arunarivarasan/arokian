## Start the application

Run `npx nx serve arokian` to start the development server. Happy coding!

## Build for production

Run `npx nx build arokian` to build the application. The build artifacts are stored in the output directory (e.g. `dist/` or `build/`), ready to be deployed.

## Running tasks

To execute tasks with Nx use the following syntax:

```
npx nx <target> <project> <...options>
```

You can also run multiple targets:

```
npx nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
npx nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/features/run-tasks).

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/nx-cloud/features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Explore the project graph

Run `npx nx graph` to show the graph of the workspace.
It will show tasks that you can run with Nx.

# Yarn

### Add node package

```
yarn add <npm package>
```

## Add expo package

```
yarn expo add expo-camera
```

### remove node package

```
yarn remove <npm package>
```

# Local development

### inital tools setup

run ps scripts install tools/devtools/src

### Local App development

https://docs.expo.dev/guides/local-app-development/#local-app-compilation

# Frontend

### Prebuild

```
yarn expo prebuild --platform android --clean
```

This will create android / ios folder in the root directory

### Build

#### Build your native android project

```
yarn expo run:android
```

#### Build your native ios project

```
yarn expo run:ios
```

## Run

#### Start

```
yarn nx run @workspace/arokian:start
```

#### Android

```
yarn nx run @workspace/arokian:run-android
```

To clean and run

```
yarn nx run @workspace/arokian:run-android --c
```

#### IOS

```
yarn nx run @workspace/arokian:run-ios
```

# Backend

## create new module

go to specific app folder where you want to create module

```
yarn nx g @nx/nest:module products
```

## create new controller

go to specific app folder where you want to create controller

```
yarn nx g @nx/nest:controller products
```

## create new service

go to specific app folder where you want to create service

```
yarn nx g @nx/nest:service products
```

## build nestjs api app

```
npx nx build @workspace/arokian-api
```

## serve nestjs api app

```
npx nx serve @workspace/arokian-api
```

# Tech Stack

Frontend - Expo

Backend - nestjs

UI Library - Nativewinds

State management - Zustand

Data fetching - Tanstack

Animate - reanimated

Database (seamless server sync) - realm

Local Db / offline persistent DB - watermelon DB / realm

clerk - authentication

PostHog - metrics

Render - Build, deploy, and scale your apps

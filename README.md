<img src="readme/angular.png" width="25" style="top: 8px" />

# ToDo app

### Table of Contents
* [Prerequisites](#Prerequisites)
* [Tech Stack](#Tech-Stack)
* [Getting Started](#Getting-Started)
* [Project Structure](#Project-Structure)
* [Deployment](#Deployment)
* [Resources](#Resources)

#
### Prerequisites

* <img src="readme/nodejs.png" width="25" style="top: 8px" /> *Node JS @16.X and up*
* <img src="readme/npm.png" width="25" style="top: 8px" /> *npm @8 and up*
* <img src="readme/typescript.png" width="25" style="top: 8px" /> *Typescript @4 and up*

#
### Tech Stack

* <img src="readme/angular.png" width="25" style="top: 8px" /> *Angular @14.2.0 - front-end framework*

#
### Getting Started
1. First of all you need to clone app repository from github:
```
git clone https://github.com/nikanoza/todo-app-angular.git
```
2. Next step requires install all the dependencies.

```
npm install
```
3. You can run project
```
ng serve
```

#
### Project Structure

```
|--- src
|   |--- assets # project images
|   |--- app # project main folder
|        |--- new-task # component folder
|        |--- task-detail # component folder
|        |--- the-header # component folder
|        |--- app.module.ts # main module file
|        |--- task.model.ts # interface types file
|        |--- tasks.service.ts # service file
- package.json     # dependency manager configurations
```
#
### Deployment
Before every deployment you need to create build file.
```
npm run build
```
after this you can use this file to deploy project on server.

#
### Resources
* [figma](https://www.figma.com/file/4oLHA5cl4VWGxgg4Ev0aP1/todo-app?node-id=0%3A1).
* [challenge](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW)
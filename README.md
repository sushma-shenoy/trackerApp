ng build --base-href=/trackerApp/   -> creating build file
ngh --dir=/dist/   -> for deploying to ghpages
ngh --no-silent  -> if you get error for ngh
ngh --dir=/dist --repo=https://github.com/sushma-shenoy/trackerApp.git  -> if you get repository error for ngh
nvm use 18.17  -> if you get node js error 
npm i -g angular-cli-ghpages   -> for deploying 
export NODE_OPTIONS=--openssl-legacy-provider  -> if you get error while running np commands (eg: npm i)
========================================================================
npm -v->
10.4.0
==========================================================================
ng v->
Angular CLI: 11.2.14
Node: 18.17.0
OS: linux x64

Angular: 11.2.14
... animations, cli, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router
Ivy Workspace: Yes

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1102.19
@angular-devkit/build-angular   0.1102.19
@angular-devkit/core            11.2.19
@angular-devkit/schematics      11.2.14
@schematics/angular             11.2.14
@schematics/update              0.1102.14
rxjs                            6.6.7
typescript                      4.0.8

===========================================================================


# AngularProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

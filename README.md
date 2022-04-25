# FundacionLupus

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.

## Development server

For first time:
1. git clone project
2. go to project directory
3. run `ng install`
4. run `ng serve`

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Deploy

### For develop:
Before deploying, check firebase.json file. It must have this line: "site": "dev-fundacion".
1. ng deploy --cname=https://dev-fundacion.web.app/
2. firebase deploy --only hosting:dev-fundacion

### For prod:
1. ng deploy --base-href=https://fundacionlupus.com.ar/ --cname=fundacionlupus.com.ar
2. Add a CNAME file with "fundacionlupus.com.ar"
3. Add a commit in "deploy" branch
=
## Other
Before deploying, check firebase.json file. It must have this line: "site": "fundacion-lupus".
1. ng deploy --cname-href=https://fundacion-lupus.web.app/
2. firebase deploy --only hosting:fundacion-lupus
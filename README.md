# WebKiosk

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Install
1. run `git clone https://github.com/jzlin/web-kiosk.git`
2. run `cd web-kiosk`
3. run `npm install`
4. run `npm start`
5. open [http://localhost:3000](http://localhost:3000)

## Test Extension in Chrome
1. run `npm run build:dev`
2. Visit `chrome://extensions/` in your Chrome browser.
3. Ensure that the `Developer mode` checkbox in the top right-hand corner is checked.
4. Click Load `unpacked extension…` to pop up a file-selection dialog.
5. Navigate to the directory `dist`, and select it.

## Build zip
1. run `npm run build`
2. run `npm run compress` (zip file will be generated in dist folder.)

# AngularRxjsTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.8.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# Task

VNC Test Job re: angular 8
Job applicant: 

-------------------------------------------

#1: Create a a long polling with Rxjs. Detect when online will start polling, when offline stop polling. (Subscribe change online/offline using rxjs. Write a function called getOnlineStatus(): Observable<boolean>)

#2: Detect when user is online and logged in using rxjs. Write a log “User is online and logged in” (online/offline status is used from above test. There is an observable called isUserLoggedIn$ will return value user is online true/false)

#3: You have a function getNumber(): Observable<number>, It use a Subject myNumber$ that adds a random number every 500ms. Please write a code to get list of number from that function when there is change each 2s (Please use rxjs)

#4: Writing a code that get value from one input on change and use that value for a function called searchMessages(keyword: string): Observable<Message[]> 
When we receive data from that function. Please display the messages list in the UI using change detection

#5: Please provide your approach to setup a multiple themes structure and build the app with multiple themes and allow user to change any theme in the list we provided

#6: Writing a sample code using a state management. That has Conversation and Message models. One Conversation can contain many messages

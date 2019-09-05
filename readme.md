# S4 API

Super Simple Scheduling System

## Getting Started

Install dependencies:
```
yarn install
```
Run API:
```
yarn start
``` 

The app is listening the port 3001.

### Endpoints availables

Students:
```
    POST:   http://localhost:3001/api/students  
                payload: {studentId, name, lastname}
    GET:    http://localhost:3001/api/students/{studentId}
    DELETE: http://localhost:3001/api/students/{studentId}
    PUT:    http://localhost:3001/api/students/{studentId}
    GET: http://localhost:3001/api/students
    GET: http://localhost:3001/api/students/{studentId}/classes
```
Classes:
```
    POST:   http://localhost:3001/api/classes  
                payload: {studentId, name, lastname}
    GET:    http://localhost:3001/api/classes/{classId}
    DELETE: http://localhost:3001/api/classes/{classId}
    PUT:    http://localhost:3001/api/classes/{classId}
    GET: http://localhost:3001/api/classes
    GET: http://localhost:3001/api/classes/{classId}/students
    
```

## Running the tests(WIP)

To run tests:
```
yarn test
```
## Built With

* [NodeJS](https://nodejs.org/en/) - JavaScript engine
* [ExpressJS](https://expressjs.com/) - Web Framework of NodeJS
* [Yarn](https://yarnpkg.com) - Dependency Management
## Authors

* **Jimmy Teran** 


# Introduction to Node
- Node is an open source run-time environment for javascript (helps you to run javascript outside a browser)

## Importance of node
- allows to create servers
- allows you to create mobile apps
- allows to create platforms based on server-side
- uses asynchronous programming nature (`async ---- await`)

## NPM (Node Package Manager)
When you download node, it ships with npm (node package manager).  This helps you to run your scripts and as well manage your dependencies (modules ie. node_modules). 

## Node Modules
These are package that help us to do certain functionalities without write the source codes.
They are devided into different types
- Built-in modules: These are available to use without importing them. They come with node out of the box
- Installed modules: These are installed from the node community (npmjs)
- Custom modules: These are modules that we create ourselves. 

## Client and Server Side System
- A client side system is any system running on the broswer (what you can see)
- A server side system is running from the server (if a req, next, and res it is a server)

## Initialize node
For every node project, you need to initialize it so that you can leverage the functions of node.We initiate node projects by running `npm init `

## JSON Format
JSON stands for JavaScript Object Notation
e.g 
```javascript
// This is the json syntax for json files
{
    "name": "John Niyontwali",
    "position": "Software Developer"
}
// This is the normal object syntax for js files
{
    name: "John",
    position: "FS Dev"
}
```

## Important Modules to install in a node project
- Express: This is a node modules installed that helps in availing node functionalities like listening a server ip/port, creating routes (end-points), using the endpoints, methods (post, get, put/patch, delete) and establishing headers to our server. 
- Nodemon: This is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected. **Note**: This is a devDependency

Installing dependencies we run `npm install name_of_pkg or npm i name_of_pkg`. To specify that you want to install a devDependency you put after the command a flag of `-D` or `--save-dev` 

## Uninstalling a Package
`npm uninstall name_of_package`

## Dotenv
Dotenv is a zero-dependency module that loads environment variables from a .env file into `process.env`.

## How to run a node script
`npm run name_of_the_script`

## Components of Server
These are the minimum components a server should have
1. IP (`localhost or 127.0.0.1`)
2. PORT 
3. Endpoints(routes)

## Recap
```javascript
// syntax of a function using ES5
function nameOfFunction(param1, param2, param3, ....) {
    // block of code
}

// syntax of a function using ES6
const nameOfFunction = (param1, param2, ...) => {
    // block of code
    
}

// arguments are values passed into a function when invoiking/calling it
nameOfFunction(arg1, arg2, arg3, .....)
```

## CORS (Cross Origin Resource Sharing)
This is a type of a header that allows server to indicate any origins (domain, scheme or port)

## Export a module (file) 
- All files in a node js project are modules as long they can be accessed outside that very file

This is how we export
`module.exports = what you export`


## Recap on Arrays and Objects
Arrays `const cars = ["BMW", "TOYOTA", "HUDAI"]`
Object 
```javascript
const propertiesOfCar = {
    color: "red",
    brand: "ferari",
    enginType: "V8"
}
```

example of an array containing object
```javascript
const notes = [
    {
        id: 1,
        title: "This is a title",
        content: "This is content"
    },
    {
        id: 2,
        title: "....",
        content: "......."
    }
]
```

## CRUD (Create, Read, Update, Delete)

## Higher Order functions
These are function that take in other functions as parameters
e.g 
1. `find`: 


## What is a param
https://domain.com/blogs/5

The `5` here is a param. We access the param by using 
`req.params.nameOfParam`

## Accessing Body or Content from a post http method
We use the `req` object to access the **body** by 
`req.body`


https://dev.mysql.com/downloads/installer/


## Database
NodeJs can be integrated with any database be Relational databases like `mysql` or Non-relational databases like `mongodb`. We shall use in this project `mysql`. 

### Installing mysql in node
`npm install mysql2`

### ORM
Object–relational mapping (ORM, O/RM, and O/R mapping tool) in computer science is a programming technique for converting data between a relational database and the heap of an object-oriented programming language. This creates, in effect, a virtual object database that can be used from within the programming language.

ie. We can use normal programing syntax to interact with databases without writing pure queries 

#### Example of ORM
- Sequelize: This is a nodejs ORM

## Asynchronous JavaScript
This is mainly used when you are dealing with data that will take time to process and you need to wait for the processing to get done. 
e.g Asynchronous Functions
These are function that will need to wait for some data to get processed for them to continue. 
### Syntax
```javascript
const getNotes = async () => {
 // block of codes
 await ....... // You will use await on any functionality that might time, e.g creating in database, fetching from database
}
```

## Sequelize Model Methods
1. For create: `create({data})` 
e.g
 ```javascript
ModelName.create({
    title,
    content
})```

2. For fetching all: `findAll()`
eg. `ModelName.findAll()`

3. For fetching a sigle item: `findOne({where: {id}})`
eg. `ModelName.findOne({where: {id: 4}})`

4. For updating: `findOne({where: {id}}) and set()` 

5. for deleting: `findOne({where: {id}}) and destroy()`

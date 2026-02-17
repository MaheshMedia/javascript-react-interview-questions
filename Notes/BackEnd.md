```Js

Library v/s Framework

Library:- A library is a collection of pre-written code that can be used to perform specific tasks.
Eg- axios

Framework:- A Framework is a set of pre-written code that provides a structure for developing software applications.
Eg- express



Express:- A Node.js web application framework that helps us to make web applications. It is used for server side programming.

uses of express js-
1. listen for incoming request.
2. passe
3. match response with routes
4. response

To Install Express.Js:-
1. npm init
2. click enter to create the package.json
3. npm install express

or

1. npm init -y
2. npm i express

To start the auto listen server
1. nodemon index.js


GET & POST Request

GET: -Used to GET some response
     -Data sent in query strings (limited, string data & visible in URL)

POST: -Used to POST something (for Create/Write/Update)
      -Data sent via request body (any type od data)


REST:-

- Representational State Transfer
- REST is an architectural style that defines a set of constraints to be used for creating web services.

ref link:- https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/


CRUD Operations:-

- GET retrieves resources.
- POST submit new data to the server.
- PUT updates existing data.
- PATCH update existing data partially.
- DELETE removes data.


Creating RESTful APIs:-

- GET    /posts      to get data for all posts
- POST   /posts      to add a new post
- GET    /posts/:id  to get one post(using id)
- PATCH  /posts/:id  to update specific post
- DELETE /posts/:id  to delete specific post


Create id for Posts:-

- UUID Package

  Universally unique identifier

- npm install uuid


What is a Database?

- It is a collection of data in a format that can be easily accessed.

Why Database?

-can store large data
-features like security, scalability etc.
-Easier to insert, search, update or delete data.


--------------------------------------------------------------------------------------------------------------------

SQL v/s NoSQL

SQL:(Structured Query Language) Relational database (data stored in Tables)
    exp: MySQL, Oracle, PostgreSQL etc...

NoSQL: Non Relational database (data stored in document/key-val/graphs etc.)
    exp: MongoDb, Cassandra, Neo4j etc...


Our 1st Database:-

CREATE DATABASE db_name;
DROP DATABASE db_name;
USE db_name;

Our 1st table:-

CREATE TABLE table_name (
    column_name1 datatype constraint,
    column_name2 datatype constraint,
    column_name3 datatype constraint,
);

INSERT INTO table_name VALUES

    (101, "adam", 12);
    (102, "bob", 14);

SELECT * FROM table_name;


###Database Queries

CREATE DATABASE db_name;
CREATE DATABASE IF NOT EXISTS db_name;

DROP DATABASE db_name;
DROP DATABASE IF EXISTS db_name;

SHOW DATABASE;
SHOW TABLES;


##Table Queries

-Create
-Insert
-Update
-Alter
-Truncate
-Delete


#Data Types:-

CHAR:  can store characters of fixed length
VARCHAR: can store characters up to given length
BLOB: can store binary large object
INT: integer
TINYINT: integer(-128 to 127)
BIGINT: integer(with larger numbers)
BIT: can store x-bit values. x can range from 1 to 64
FLOAT: Decimal number
DOUBLE: Decimal number - with 24 to 53 digit
BOOLEAN: Boolean values 0 or 1
DATE: date in format YYYY-MM-DD
YEAR: year from 1901 to 2155


#Constraints:-
    -Rules for data in the table

NOT NULL : columns cannot have a null value
UNIQUE   : all values in column are different
DEFAULT  : sets the default values of column
CHECK    : it can limit the values allowed in a column

Example:-

    salary INT DEFAULT 25000
    CONSTRAINT age_check CHECK (age >= 18 AND city = "DELHI")


- PRIMARY KEY: makes a column unique & not null but used only for one.

                CREATE TABLE temp (
                    id int not null,
                    PRIMARY KEY (id)
                );

- FOREIGN KEY: prevent actions that would destroy links between tables

                CREATE TABLE temp (
                    cust_id int,
                    FOREIGN KEY (cust_id) reference customer(id)
                )


#What are Keys?
   - Keys are special columns in the table

Primary key: it is a column (or set of columns) in a table that uniquely identifies each row. (a unique id)
There is only 1 PK & it should be NOT null.

Foreign Key: A forigen key is a column (or set of columns) in a table that refers to the primary key in another table.

FKs can have duplicate & null values
There can be multiple FKs.


#Table Queries


INSERT INTO table_name
(colname1, colname2)

VALUES
(col1_v1, col2_v1)
(col1_v2, col2_v2)


Update(to update existing rows)

UPDATE table_name
SET col1 = val1, col2 = val2
WHERE condition;


Delete(to delete existing rows)

DELETE FROM table_name
WHERE condition;


Add Coiumn

ALTER TABLE table_name
ADD COLUMN column_name datatype constraint;


Drop Column

ALTER TABLE table_name
DROP COLUMN column_name;


Rename Table

ALTER TABLE table_name
RENAME TO new_table_name


Change Column(rename)

ALTER TABLE table_name
CHANGE COLUMN old_name new_name new_datatype new_constraint;


Modify Column (modify datatype/constraint)

ALTER TABLE table_name
MODIFY col_name new_datatype new_constraint;


Truncate (to delete table's data)

TRUNCATE TABLE table_name;


#Select Command
    -Selects & Show data from the DB

Syntax
SELECT col1, col2 FROM table_name;

Syntax (to show all)
SELCT *FROM table_name;


#Where Clause
    To define some conditions

SELECT col1, col2 FROM table_name
WHERE conditions;

Operators:

Arithmetic, Comparison, Logical, Bitwise

#Limit Clause
    Sets an upper limit on number of (tuples) rows to be returned

    SELECT col1, col2 FROM table_name
    LIMIT number;

#Order by Clause
    To sort in ascending (ASC) or descending order (DESC)

    SELECT col1, col2 FROM table_name
    ORDER BY col_name(s) ASC;


#Aggregate Functions
    Aggregate functions perform a calculation on a set of values, and return a single value

    *COUNT()
    *MAX()
    *MIN()
    *SUM()
    *AVG()

Example:

    SELECT max(marks)
    FROM student

#Group by Clause:-
    Group rows that have the same values into summary rows.
    It collects data from multiple records and groups the result by one or more column.

    SELECT col1, col2
    FROM table_name
    GROUP BY col_name(s);

* Generally we use group by with some aggregation function

#Having Clause:-
    Similar to Where i.e applies some condition on rows.
    But it is used when we want to apply any condition after grouping

    SELECT col1, col2
    FROM table_name
    GROUP BY col_name(s)
    HAVING condition;

- WHERE is for the table, HAVING is for a group
- Grouping is necessary for HAVING

#General Order:-

    SELECT column(s)
    FROM table_name
    WHERE condition
    GROUP BY column(s)
    HAVING condition
    ORDER BY column(s) ASC;


###SQL WorkBench (Node with SQL)

#Faker:-
    To generate fake data.

    userId username email password

let getUser = () => {
    return [
        faker.datatype.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password(),
    ]
}

#There are four types of accessing and creating SQL Tables and ...

1. Workbench
2. My SQL package -> node.js
3. CLI
4. using SQL files


#MySQL2 Package
    To connect Node with MySQL

    connection.end(); // to close connection


#Using SQL from CLI

    /usr/local/mysql/bin/mysql -u root -p

    Create schema.sql

    source schema.sql // in CLI

#Creating Our Routes

GET/user     Fetch & Show (userId, username, email) of all users


PATCH /user/:id  To edit username, if correct password was entered in form


--------------------------------------------------------------------------------------------------------------------

###Mongo DB

#The Shell

mongosh //to start

use college //to create & use a new database called "college"


#BSON Data

    Binary JSON

#Collections

Document: Mongo stores data in form of documents (BSON docs)

Collection: MongoDB stores documents in collections.


#INSERT in DB

    insertOne

db.collection.insertOne()        Inserts a single document into a collection.

show collections

db.student.insertOne( {name: "adam", marks: 79})

db.student.find()

if a collection does not exist, MongoDB creates the collection when you first store data for that collection.

insertMany(array of documents)

db.student.insertMany([{name: "bob", marks: "65"}, {name: "eve", city: "Delhi"}])


db.collection.insertmany()   Inserts multiple documents into a collection.


#FIND in DB

    db.collection.find() //returns everything

for specific queries

db.collection.find( {key:value} )

db.collection.findOne( {key:value} )


Query Operators:-

Q. Find students where marks > 75

    db.student.find( {marks: {$gt: 75}} )

Q. Find students who live in Delhi or Mumbai

    db.student.find( {city: {$in: ["Delhi", "Mumbai"]} } )

Q. Find students who scored > 75 or live in Delhi

    db.student.find( {$or: [ {marks: {$gt: 75}}, {city: "Delhi"} ]} )


#UPDATE in DB

updateOne

db.collection.updateOne()     Updates at most a single document that match a specified filter even though multiple
                              documents may match the specified filter.


db.collection.updateOne( <filter>, <update>, <options> )

db.student.updateOne( {name:"adam"}, {$set: {marks:99}} )


Update Operators:-

$addFields
$set
$project
$unset
$replaceRoot
$replaceWith

db.collection.updateMany()    Update all documents that match a specified filter.
db.collection.replaceOne()    Replaces at most a single document that match a specified filter even though
                              multiple documents may match the specified filter


#Nesting

{
    _id: ObjectId("64fdfc67868sgg668ss7"),
    name: 'farah',
    performance: { marks: 88, grade: 'A' }
}

to find

db.student.findOne( {"performance.marks": 88} )


#DELETE in DB

deleteOne

db.collection.deleteOne( <filter>, <options> )


deleteMany

db.collection.deleteMany( <filter>, <options> )

db.dropDatabase()

--------------------------------------------------------------------------------------------------------------------

###Mongoose

A library that creates a connection between MongoDB & Node.js JavaScript Runtime Environment

It is an ODM (Object Data Modeling) Library.

ref link: https://mongoosejs.com/docs/guide.html


#Schema

Schema defines the shape of the documents within that collection.

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});


#Models

Model in mongoose is a class with which we construct documents.

const User = mongoose.model("User", userSchema)


#Insert

Inserting One

const user1 = new User({name: "Adam", email: "adam@gmail.com", age: 48});
const user2 = new User({name: "Eve", email: "eve@gmail.com", age: 48 });

user1.save() //to save in DB
user2.save() //to save in DB


Inserting Multiple

User.insertMany([
    {name: "Tony", email: "tony@gmail.com", age: 50 },
    {name: "Bruce", email: "bruce@gmail.com", age: 47},
    {name: "Peter", email: "peter@gmail.com", age: 30},
]).then((data)=>{
    console.log(data)
})


Note:-

Mongoose uses Operation Buffering

Mongoose lets you start using your models immediatly, without waiting for mongoose to establish a connection to MongoDB.


#Find

Model.find()  //returns a Query Object (thennable)

*Mongoose Queries are not promises. But they have a .then()


User.find().then((data)=>{
    console.log(data);
})

User.find({age: {$gte: 47}}).then((data)=> {
    console.log(data)
})


Model.findOne()  //returns a single result

User.findOne({age: {$gte: 47}}).then((data) => {
    console.log(data);
})


Model.findById() //commonly used


#Update

Model.updateOne()

User.updateOne({name: "Bruce"}, {age: 49}).then((res)=>{
    console.log(res);
})


Model.updateMany()

User.updateMany({age: {$gt: 45}}, {age:45}).then((res)=>{
    console.log(res);
})

User.findOneAndUpdate({name: "Tony"}, {age: 60},{new: true}).then(
    (data) => {
        console.log(data)
    }
)

Model.findOneAndUpdate()


#DELETE

Model.deleteOne() // returns count

User.deleteOne({name: "Adam"}).then((res)=>{
    console.log(res);
})

Model.deleteMany() // returns count

User.deleteMany({age: {$gt: 40}}).then((res)=>{
    console.log(res);
})


Model.findByIdAndDelete()

Model.findOneAndDelete()


#Schema Validations

Basically, Rules for Schema

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
       author:{
       type: String,
    },
       price: {
       type: Number,
    },
})


#Schema Validations

SchemaType Options

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [1, "please enter a valid price"],
    },
    discount: {
        type: Number,
        default: 0,
    },
    {
        genre: [String],
        category: {
            type: String,
            enum: ["friction", "non-fiction"],
        }
    }
})


Handling Errors

console.log(err.errors.category.properties.message);

--------------------------------------------------------------------------------------------------------------------

###MongoDB with Express

Basic Set Up


const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

main()
.then(()=>{
    console.log("connection successful");
})
.catch((err)=> console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test")
}

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res )=> {
    res.send("working root")
})

app.listen(8080, ()=> {
    console.log("app is listening");
})

#Using Date

<%= chat.created_at.toString().split(" ")[4] %>
<%= chat.created_at.toString().split(" ").slice(0, 4).join(" ") %>

--------------------------------------------------------------------------------------------------------------------

List of npm installations

1. npm init -y
2. npm i express
3. npm i ejs
4. npm i mongoose

To start a server: nodemon app.js   //app.js is the main JS file where we imported the express and port


To go inside the mongo shell in Command Prompt: show dbs

5. npm i method-override

6. npm i ejs-mate   //helps to create the templates layouts














##Interview Questions

1) What is Node.js?
2) How Node is a runtime environmant on server side? What is V8
3) What is difference b/w Runtime environment & Framework?
4) What is the difference b/w Node.js & Express.js?
5) What are the differences b/w Client-Side (Browser) & Server-Side (Node.js)?
6) What are the 7 main features of Node.js?
7) What is single Threaded Programming?
8) What is Synchronous Programming?
9) What is Multi Threaded Programming?
10) What is Asynchronous Programming?
11) What is the difference b/w synchronous and asynchronous programming?
12) What are Events, Event Emitter, Event Queue, Event Loop & Event Driven?
13) What are the main features & advantages of Node.js?
14) What are the disadvantages of node?
15) How to setup node.js project?
16) What is NPM? What is the role of node_modules folders?
17) What is the role of package.json file in Node?
18) What are Modules in Node?
19) How many ways are there to Export a module?
20) What will happen if you dont export the module?
21) How to improve single and multiple functions from a module?
22) What is module wrapper Function?
23) What are the Types of modules in Node?













Qns) What is Node.js?

    -Node is neither a language nor a framework.
    -Node.js is a runtime environment for executing Javascript code on the server side.

    **Framework = is to simplify the creation of large applications by providing many inbuilt reusable libraries, classes functions etc...
    **Runtime environment = is an environment that executes the program. it is responsible for memory management and converting the high level languages like JavaScrip to low level languages like Meachine languages your system can understand.

Qns) How Node is a runtime environmant on server side? What is V8

    -Browser execute JavaScript on the client side and similarly Node.js executes JavaScript on the server side.
    -V8 is a JavaScript engine for the JavaScript language.

Qns) What is difference b/w Runtime environment & Framework?

    -Runtime environment: Primarly focous on providing the necessary infrastructure for code execution, including services like memory management and I/O operations.

    -Framework: Primarly focuses on simplifying the development process by offering a structured set of tools, libraries, and best practices.

Qns) What is the difference b/w Node.js & Express.js?

    -Node.js: is a runtime environment that allows the execution of javascript code server-side.

    -Express.js: is a framework built on the top Node.js.
        - it is designed to simplify the process of building web applications and API by providing a set of features like simple routing system, middleware, support etc.

Qns) What are the differences b/w Client-Side (Browser) & Server-Side (Node.js)?

    ##Client-Side (Browser)

    -Environment Location: Runs on the users web browers.
    -Primary Language: HTML, CSS, JavaScript.
    -Responsibilities: Handles UI display, interactions and client side logic.

    ##Server-Side (Node.js)

    -Environment Location: Runs on the server.
    -Primary Language: JavaScript.
    -Responsibilities: Handles business logic, data storage/access, authentications, authorization etc.

Qns) What are the 7 main features of Node.js?

    - Single Threaded.
    - Asynchronous.
    - Event-Driven.
    - V8 JavaScript Engine.
    - Cross-Platform.
    - NPM(Node package Manager).
    - Real Time Capabilities.

Qns) What is single Threaded Programming?



Qns) What is Synchronous Programming?

    - In a synchronous program, each task is performed one after the other, and the program waits for each operation to complete before moving on to the next one.

    - synchronous programming focuses on the order of ececution in a sequential manner, while single-threaded programming focuses on the single thread.

Qns) What is Multi Threaded Programming?


Qns) What is Asynchronous Programming?

    -In Node.js, asynchronous flow can be achieved by its single-threaded, non-blocking and event-driven architecture.

Qns) What is the difference b/w synchronous and asynchronous programming?

    ##Synchronous programming

    -Tasks are executed one after another in a sequential manner.
    -Each task must complete before the program moves on to the next task.
    -Execution of code is blocked until a task is finished.
    -Synchronous operations can lead to blocking and unresponsiveness.


    ##Asynchronous programming

    -Tasks can start, run and complete in parallel.
    -Tasks can be executed independently of each other.
    -Asynchronous operations are typically non blocking.
    -It enables better concurrency and responsiveness.

Qns) What are Events, Event Emitter, Event Queue, Event Loop & Event Driven?

    -Event: Signals that something has happended in a program.
    -Event Emitter: Create or emit events.
    -Event Queue: Events emitted queued(stored);
    -Event Handler: Function that responds to specific events.
    -Event Loop: The event loop picks up event from the event queue and executes them in the order they were added.
    -Event Driven Architecture: it means operations in Node are drive or based by events.

Qns) What are the main features & advantages of Node.js?
Qns) What are the disadvantages of node?











Qns) Difference between SQL and MongoDB?

    SQL (Structured Query Language) and MongoDB are two different types of database systems, each with its own approach to storing and managing data.

    ### SQL (Relational Databases)
    SQL databases are based on the relational model. Here are some key points:

    1. **Structure:**
    - Data in SQL databases is stored in tables.
    - Tables have predefined schemas, meaning you need to define the structure of your data before inserting it.
    - Each row in a table represents a record, and each column represents a specific piece of data.

    2. **Schema:**
    - SQL databases use a schema to define the structure of the data.
    - Schemas enforce data integrity by defining constraints such as data types, uniqueness, relationships, and nullability.
    - Changing the schema often requires altering the table, which can be a complex process.

    3. **Query Language:**
    - SQL is used to query, manipulate, and manage the data.
    - It provides a standardized way to interact with the database, with commands like SELECT, INSERT, UPDATE, DELETE, etc.
    - SQL is powerful for complex queries involving multiple tables (joins).

    4. **Examples:**
    - MySQL, PostgreSQL, Oracle Database, Microsoft SQL Server, SQLite are popular SQL databases.

    ### MongoDB (NoSQL Document-Oriented)
    MongoDB is a NoSQL, document-oriented database. Here are its main characteristics:

    1. **Structure:**
    - Data in MongoDB is stored in flexible, JSON-like documents.
    - These documents can have different fields, sizes, and structures, providing a lot of flexibility.
    - Collections (similar to tables) contain these documents.

    2. **Schema:**
    - MongoDB is schema-less or schema-flexible.
    - You can change the structure of documents simply by adding or removing fields, which can be useful for evolving applications.

    3. **Query Language:**
    - MongoDB uses a powerful query language that is similar to JSON.
    - It supports a wide range of queries, including field queries, range queries, regular expressions, and more.
    - There are methods to perform common operations like CRUD (Create, Read, Update, Delete) on documents.

    4. **Examples:**
    - MongoDB is a popular NoSQL database, known for its scalability, flexibility, and ease of use.

    ### Key Differences:
    1. **Data Model:**
    - SQL: Tabular, with rows and columns.
    - MongoDB: Document-oriented, with flexible JSON-like documents.

    2. **Schema:**
    - SQL: Predefined, rigid schema.
    - MongoDB: Flexible or schema-less, allowing changes to the structure without much hassle.

    3. **Query Language:**
    - SQL: Standardized SQL language.
    - MongoDB: Query language similar to JSON.

    4. **Scaling:**
    - SQL databases often require vertical scaling (more powerful hardware).
    - MongoDB is designed for horizontal scaling (sharding) to handle large amounts of data.

    ### Choosing Between SQL and MongoDB:
    - **SQL** might be preferable when:
    - Your application requires complex queries, transactions, and joins.
    - Data has a clear and stable structure.
    - ACID (Atomicity, Consistency, Isolation, Durability) compliance is crucial.

    - **MongoDB** might be preferable when:
    - Your data structure evolves frequently.
    - You need to store large volumes of data without a predefined schema.
    - High availability and horizontal scalability are priorities.

    For your budget exploration plan in Madagascar, knowing the differences might not affect your trip directly, but it's interesting background info!
















```

```

```

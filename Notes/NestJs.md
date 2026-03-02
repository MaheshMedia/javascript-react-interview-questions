1) What is Nestjs?
2) How can you install NestJS and set up a new project on your machine?






## Question & Answers


Qns) What is Nestjs?

 - Nest(NestJS) is a framework for building efficient, scalable Node.js server side applications. It uses progressive JavaScript and its built with and fully suports Typescript.




Qns) How can you install NestJS and set up a new project on your machine?

- To install NestJS on your machine, you need to have Node.js and npm (Node Package Manager) installed. Once you have those, you can install the NestJS CLI (Command Line Interface) globally on your machine using the following command:

 -   $ npm i -g @nestjs/cli

- This command installs the NestJS CLI globally, which allows you to use the nest command from anywhere on your machine. With the NestJS CLI, you can create new projects using

  -   $ nest new project-name

- and after creating a project you can generate NestJS modules, services, etc.

   - $ nest generate module users

- running

 -   $ nest g resource users

will several files that work together to handle CRUD (Create, Read, Update, Delete) operations for a particular entity, in this case, "users". It will generate: A controller for handling HTTP requests (e.g., users.controller.ts)

A service for business logic (e.g., users.service.ts)

A module to encapsulate the resource (e.g., users.module.ts)

If you choose to generate a REST API, it will also generate DTO (Data Transfer Object) classes for handling input data (e.g., create-user.dto.ts, update-user.dto.ts) If you choose to generate a GraphQL API, it will also generate a resolver (e.g., users.resolver.ts)







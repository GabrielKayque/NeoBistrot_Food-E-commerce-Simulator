# **NeoBistrot - Online Food Ordering Simulator**

## **Project Description**

NeoBistrot is an online food ordering simulator that emulates a food shopping cart. The project covers both the frontend and backend, providing a complete online shopping experience. Some of the key features include:

- **Frontend**: The use of major frameworks, such as ReactJS with TypeScript, has provided significant learning in typing, hooks, and componentization, enriching the project's development.

- **Backend API**: In the backend, the idea is to develop an API to manage the entire purchasing process. The API will be built using Bun and Express.js. These technologies enable the creation of an efficient and scalable API to handle the purchasing process.

- **Shopping Cart**: The system allows users to add items to the shopping cart, view product details, and adjust quantities as needed.

- **Checkout and Form Validation**: The project includes a complete checkout process, involving form validation to ensure customer data is correct.

## **Challenges and Solutions**

- **Form Creation**: Creating forms was one of the initial challenges. The project uses React Hook Form and Imask to create interactive and user-friendly forms. This provided a valuable experience, as using both libraries resulted in incompatibility issues when focusing on incorrectly typed inputs. I resolved this issue by gaining a better understanding of DOM tags and refs.

- **Error Validation**: One difficulty encountered was ensuring that errors were instantly displayed to the user when they entered incorrect information in a field. Solutions were implemented to ensure that errors were highlighted, and the user was promptly alerted.

- **Global State Management**: Initially, I used prop passing between multiple components. However, I realized that it was becoming messy with props. After further research, I learned about Prop Drilling and discovered that one way to address this was to use the `useContext` hook to manage global states on the frontend, allowing for much cleaner code.

- **Backend with Node and Express**: Initially, the plan was to use Node.js and the Express.js framework for backend development. However, I found it confusing to use TypeScript with Node, as many libraries needed to be installed. As a result, I looked for other options and came across the Bun framework, which was recently announced in version 1.0. It has a TypeScript transpiler, so I migrated backend development to it.

**NeoBistrot is a project that SIMULATES a complete online shopping experience for users**.

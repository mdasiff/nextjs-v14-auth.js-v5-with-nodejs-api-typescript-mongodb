# Next.js Authentication Example with Auth.js v5 and Node.js API + JWT

This project demonstrates authentication in a Next.js application using Auth.js v5, with a backend Node.js API for handling authentication logic. The API integrates with MongoDB to manage user data and sessions, and it uses ES6 with TypeScript for improved code maintainability.

## Table of Contents

- [Description](#description)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
  - [Clone and Set Up Node.js API](#clone-and-set-up-nodejs-api)
- [Usage](#usage)


## Description

This example showcases how to implement authentication in a Next.js application using Auth.js v5. The backend API is built with Node.js, using ES6 and TypeScript, and connects to MongoDB for data management. This setup provides a modern, secure, and scalable approach to user authentication.

## Prerequisites

- Node.js v18+ installed
- MongoDB instance running (local or cloud-based, e.g., MongoDB Atlas)

## Setup Instructions

### Clone and Set Up Node.js API

1. Clone the Node.js API repository:

   ```bash
   git clone git@github.com:mdasiff/nodejs-v20-login-api-es6-typescript-mongodb.git
   ```
2. Set Up Next.js Application
   Clone this repository
3. Install dependencies
4. copy .env.local to .env
5. Adjust node api url as running in your machine in .env and .env.local variable: NODE_API=http://localhost:4000

### Start your Next.js application:
```bash
npm run dev
```

### Usage

Available Pages
```bash
http://localhost:3000/login
http://localhost:3000/dashboard

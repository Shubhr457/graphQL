# GraphQL CRUD API

A complete GraphQL CRUD API built with Apollo Server and Node.js.

## Features

- ✅ Create users
- ✅ Read users (all or by ID)
- ✅ Update users
- ✅ Delete users

## Installation

```bash
npm install
```

## Running the Server

```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

The server will start at `http://localhost:4000`

## GraphQL Playground

Open your browser and navigate to `http://localhost:4000` to access the GraphQL Playground.

## Example Queries & Mutations

### Query: Get All Users

```graphql
query {
  users {
    id
    name
    email
    age
    createdAt
  }
}
```

### Query: Get Single User

```graphql
query {
  user(id: "user-id-here") {
    id
    name
    email
    age
    createdAt
  }
}
```

### Mutation: Create User

```graphql
mutation {
  createUser(name: "Alice Johnson", email: "alice@example.com", age: 28) {
    id
    name
    email
    age
    createdAt
  }
}
```

### Mutation: Update User

```graphql
mutation {
  updateUser(id: "user-id-here", name: "Alice Williams", age: 29) {
    id
    name
    email
    age
    createdAt
  }
}
```

### Mutation: Delete User

```graphql
mutation {
  deleteUser(id: "user-id-here")
}
```

## Project Structure

```
.
├── index.js        # Server entry point
├── schema.js       # GraphQL type definitions
├── resolvers.js    # GraphQL resolvers
├── data.js         # In-memory data store
├── package.json    # Dependencies
└── README.md       # Documentation
```

## Notes

- This project uses an in-memory data store for simplicity
- For production, replace the in-memory storage with a real database (MongoDB, PostgreSQL, etc.)
- The server uses ES modules (type: "module" in package.json)

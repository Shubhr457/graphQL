import { gql } from 'apollo-server';

// Define GraphQL schema
export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
    createdAt: String!
  }

  type Query {
    # Get all users
    users: [User!]!
    
    # Get a single user by ID
    user(id: ID!): User
  }

  type Mutation {
    # Create a new user
    createUser(name: String!, email: String!, age: Int): User!
    
    # Update an existing user
    updateUser(id: ID!, name: String, email: String, age: Int): User
    
    # Delete a user
    deleteUser(id: ID!): Boolean!
  }
`;

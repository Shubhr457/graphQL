import { v4 as uuidv4 } from 'uuid';
import { users, addUser, updateUserData, deleteUserData, findUserById } from './data.js';

// Define resolvers
export const resolvers = {
  Query: {
    // Get all users
    users: () => {
      return users;
    },

    // Get a single user by ID
    user: (_, { id }) => {
      return findUserById(id);
    },
  },

  Mutation: {
    // Create a new user
    createUser: (_, { name, email, age }) => {
      const newUser = {
        id: uuidv4(),
        name,
        email,
        age: age || null,
        createdAt: new Date().toISOString(),
      };
      return addUser(newUser);
    },

    // Update an existing user
    updateUser: (_, { id, name, email, age }) => {
      const updates = {};
      if (name !== undefined) updates.name = name;
      if (email !== undefined) updates.email = email;
      if (age !== undefined) updates.age = age;

      return updateUserData(id, updates);
    },

    // Delete a user
    deleteUser: (_, { id }) => {
      return deleteUserData(id);
    },
  },
};

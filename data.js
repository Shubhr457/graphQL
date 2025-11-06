import { v4 as uuidv4 } from 'uuid';

// In-memory database (replace with real database in production)
export let users = [
  {
    id: uuidv4(),
    name: 'John Doe',
    email: 'john@example.com',
    age: 30,
    createdAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    name: 'Jane Smith',
    email: 'jane@example.com',
    age: 25,
    createdAt: new Date().toISOString(),
  },
];

// Helper function to add a user
export const addUser = (user) => {
  users.push(user);
  return user;
};

// Helper function to update a user
export const updateUserData = (id, updates) => {
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    users[index] = { ...users[index], ...updates };
    return users[index];
  }
  return null;
};

// Helper function to delete a user
export const deleteUserData = (id) => {
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    users.splice(index, 1);
    return true;
  }
  return false;
};

// Helper function to find user by ID
export const findUserById = (id) => {
  return users.find(user => user.id === id);
};

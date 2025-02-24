import axios from "axios";

// Base URL for your backend API
const API_BASE_URL = "http://localhost:4000";

// Create an Axios instance for consistent configuration
const Api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Register User
export const registerUser = async (userData) => {
  try{
    const response = await Api.post("/users/register", userData);
    return response.data;
  }catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};
  
  // Login User
  export const loginUser = async (credentials) => {
    try {
      const response = await Api.post("/users/login", credentials);
      return response.data;
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  };

  
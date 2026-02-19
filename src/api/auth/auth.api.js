import api from "../base";

// Register
export const registerAdmin = (data) =>
  api.post("/auth/register", data);

// Login
export const loginAdmin = (data) =>
  api.post("/auth/login", data);

// Get Profile
export const getProfile = () =>
  api.get("/auth/profile");

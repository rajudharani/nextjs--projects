"use server";

import axios from "axios";
import { redirect } from "next/navigation";
import { setSession, deleteSession } from "@/_lib/session";

const API_URL = "http://localhost:3005/users";

export const loginAction = async (formData) => {
  try {
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      return { success: false, message: "Email and password are required" };
    }

    const response = await axios.get(`${API_URL}?email=${email}&password=${password}`);
    const user = response.data[0];

    if (!user) {
      return { success: false, message: "Invalid credentials" };
    }

    // ✅ Save user session
    await setSession({
      name: user.name,
      email: user.email,
      id: user.id,
    });

    console.log("✅ Login successful:", user);

    // ✅ Return success with redirect path
    return { success: true, redirectTo: "/contact" };

  } catch (error) {
    console.error("❌ Login failed:", error.message || error);
    return { success: false, message: `Failed to login: ${error.message}` };
  }
};

export const registerAction = async (formData) => {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (!name || !email || !password || !confirmPassword) {
      return { success: false, message: "All fields are required" };
    }

    if (password !== confirmPassword) {
      return { success: false, message: "Passwords do not match" };
    }

    if (password.length < 6) {
      return { success: false, message: "Password must be at least 6 characters long" };
    }

    // Check if user already exists
    const existingUserResponse = await axios.get(`${API_URL}?email=${email}`);
    if (existingUserResponse.data.length > 0) {
      return { success: false, message: "User with this email already exists" };
    }

    // Create new user
    const newUser = {
      name: name.trim(),
      email: email.trim(),
      password: password,
    };

    const response = await axios.post(API_URL, newUser);
    const user = response.data;

    // Save user session
    await setSession({
      name: user.name,
      email: user.email,
      id: user.id,
    });

    console.log("✅ Registration successful:", user);

    // Return success with redirect path
    return { success: true, redirectTo: "/contact" };

  } catch (error) {
    console.error("❌ Registration failed:", error.message || error);
    return { success: false, message: `Failed to register: ${error.message}` };
  }
};

export const logoutAction = async () => {
  await deleteSession();
  redirect("/login");
};

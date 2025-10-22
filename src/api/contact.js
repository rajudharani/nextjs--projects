import axios from "axios";

const API_URL = "http://localhost:3005"; // ✅ Updated to match json-server port

// ✅ Get all contacts by userId
export const getContacts = async (userId) => {
  const response = await axios.get(`${API_URL}/contacts`, {
    params: { userId },
  });
  return response.data;
};

// ✅ Create a new contact
export const createContact = async (contact) => {
  const response = await axios.post(`${API_URL}/contacts`, contact);
  return response.data;
};

// ✅ Update a contact by ID
export const updateContact = async (id, contact) => {
  const response = await axios.put(`${API_URL}/contacts/${id}`, contact);
  return response.data;
};

// ✅ Delete a contact by ID
export const deleteContact = async (id) => {
  const response = await axios.delete(`${API_URL}/contacts/${id}`);
  return response.data;
};

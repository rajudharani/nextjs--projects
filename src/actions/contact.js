"use server";

import axios from "axios";
import { redirect } from "next/navigation";
import { getSession } from "@/_lib/session";

const API_URL = "http://localhost:3005";

/**
 * Create a new contact
 * @param {Object} formData - Contact form data
 * @returns {Promise<Object>} Result object with success status and data
 */
export const createContactAction = async (formData) => {
  try {
    const user = await getSession();
    
    if (!user) {
      return {
        success: false,
        message: "You must be logged in to create contacts",
        redirectTo: "/login"
      };
    }

    // Validate required fields
    const name = formData.get("name");
    const email = formData.get("email");

    if (!name || !email) {
      return {
        success: false,
        message: "Name and email are required fields"
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: "Please enter a valid email address"
      };
    }

    const contactData = {
      name: name.trim(),
      email: email.trim(),
      phone: formData.get("phone")?.trim() || "",
      address: formData.get("address")?.trim() || "",
      company: formData.get("company")?.trim() || "",
      notes: formData.get("notes")?.trim() || "",
      userId: user.id,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const response = await axios.post(`${API_URL}/contacts`, contactData);
    
    return {
      success: true,
      message: "Contact created successfully",
      data: response.data,
      redirectTo: "/contact"
    };

  } catch (error) {
    console.error("Error creating contact:", error);
    return {
      success: false,
      message: error.response?.data?.message || "Failed to create contact. Please try again."
    };
  }
};

/**
 * Update an existing contact
 * @param {string} contactId - ID of the contact to update
 * @param {Object} formData - Updated contact form data
 * @returns {Promise<Object>} Result object with success status and data
 */
export const updateContactAction = async (contactId, formData) => {
  try {
    const user = await getSession();
    
    if (!user) {
      return {
        success: false,
        message: "You must be logged in to update contacts",
        redirectTo: "/login"
      };
    }

    // Validate required fields
    const name = formData.get("name");
    const email = formData.get("email");

    if (!name || !email) {
      return {
        success: false,
        message: "Name and email are required fields"
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: "Please enter a valid email address"
      };
    }

    // First, get the existing contact to verify ownership
    const existingContactResponse = await axios.get(`${API_URL}/contacts/${contactId}`);
    const existingContact = existingContactResponse.data;

    if (existingContact.userId !== user.id) {
      return {
        success: false,
        message: "You don't have permission to update this contact",
        redirectTo: "/contact"
      };
    }

    const updatedContactData = {
      ...existingContact,
      name: name.trim(),
      email: email.trim(),
      phone: formData.get("phone")?.trim() || "",
      address: formData.get("address")?.trim() || "",
      company: formData.get("company")?.trim() || "",
      notes: formData.get("notes")?.trim() || "",
      updatedAt: new Date().toISOString(),
    };

    const response = await axios.put(`${API_URL}/contacts/${contactId}`, updatedContactData);
    
    return {
      success: true,
      message: "Contact updated successfully",
      data: response.data,
      redirectTo: "/contact"
    };

  } catch (error) {
    console.error("Error updating contact:", error);
    
    if (error.response?.status === 404) {
      return {
        success: false,
        message: "Contact not found",
        redirectTo: "/contact"
      };
    }

    return {
      success: false,
      message: error.response?.data?.message || "Failed to update contact. Please try again."
    };
  }
};

/**
 * Delete a contact
 * @param {string} contactId - ID of the contact to delete
 * @returns {Promise<Object>} Result object with success status
 */
export const deleteContactAction = async (contactId) => {
  try {
    const user = await getSession();
    
    if (!user) {
      return {
        success: false,
        message: "You must be logged in to delete contacts",
        redirectTo: "/login"
      };
    }

    // First, get the existing contact to verify ownership
    const existingContactResponse = await axios.get(`${API_URL}/contacts/${contactId}`);
    const existingContact = existingContactResponse.data;

    if (existingContact.userId !== user.id) {
      return {
        success: false,
        message: "You don't have permission to delete this contact",
        redirectTo: "/contact"
      };
    }

    await axios.delete(`${API_URL}/contacts/${contactId}`);
    
    return {
      success: true,
      message: "Contact deleted successfully",
      redirectTo: "/contact"
    };

  } catch (error) {
    console.error("Error deleting contact:", error);
    
    if (error.response?.status === 404) {
      return {
        success: false,
        message: "Contact not found",
        redirectTo: "/contact"
      };
    }

    return {
      success: false,
      message: error.response?.data?.message || "Failed to delete contact. Please try again."
    };
  }
};

/**
 * Get all contacts for the current user
 * @returns {Promise<Object>} Result object with success status and contacts data
 */
export const getContactsAction = async () => {
  try {
    const user = await getSession();
    
    if (!user) {
      return {
        success: false,
        message: "You must be logged in to view contacts",
        redirectTo: "/login"
      };
    }

    const response = await axios.get(`${API_URL}/contacts`, {
      params: { userId: user.id }
    });
    
    return {
      success: true,
      data: response.data || [],
      message: "Contacts retrieved successfully"
    };

  } catch (error) {
    console.error("Error fetching contacts:", error);
    return {
      success: false,
      message: "Failed to fetch contacts. Please try again.",
      data: []
    };
  }
};

/**
 * Get a specific contact by ID
 * @param {string} contactId - ID of the contact to retrieve
 * @returns {Promise<Object>} Result object with success status and contact data
 */
export const getContactAction = async (contactId) => {
  try {
    const user = await getSession();
    
    if (!user) {
      return {
        success: false,
        message: "You must be logged in to view contacts",
        redirectTo: "/login"
      };
    }

    const response = await axios.get(`${API_URL}/contacts/${contactId}`);
    const contact = response.data;

    // Verify ownership
    if (contact.userId !== user.id) {
      return {
        success: false,
        message: "You don't have permission to view this contact",
        redirectTo: "/contact"
      };
    }
    
    return {
      success: true,
      data: contact,
      message: "Contact retrieved successfully"
    };

  } catch (error) {
    console.error("Error fetching contact:", error);
    
    if (error.response?.status === 404) {
      return {
        success: false,
        message: "Contact not found",
        redirectTo: "/contact"
      };
    }

    return {
      success: false,
      message: "Failed to fetch contact. Please try again."
    };
  }
};

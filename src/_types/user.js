/**
 * @typedef {Object} UserType
 * @property {string} id - Unique user ID
 * @property {string} name - User's full name
 * @property {string} email - User's email address
 * @property {string} password - User's password (hashed)
 * @property {string} avatar - User's profile picture URL
 * @property {string} phone - User's phone number
 * @property {string} address - User's address
 * @property {string} createdAt - User creation timestamp
 * @property {string} updatedAt - User last update timestamp
 */

/**
 * @typedef {Object} UserSession
 * @property {string} id - User ID
 * @property {string} name - User's name
 * @property {string} email - User's email
 * @property {string} avatar - User's profile picture URL
 */

/**
 * @typedef {Object} LoginFormData
 * @property {string} email - User's email
 * @property {string} password - User's password
 */

/**
 * @typedef {Object} RegisterFormData
 * @property {string} name - User's full name
 * @property {string} email - User's email
 * @property {string} password - User's password
 * @property {string} confirmPassword - Password confirmation
 * @property {string} phone - User's phone number
 * @property {string} address - User's address
 */

/**
 * @typedef {Object} AuthFormProps
 * @property {Function} onSubmit - Function to handle form submission
 * @property {boolean} isLoading - Loading state
 * @property {string} error - Error message to display
 */

/**
 * @typedef {Object} NavbarProps
 * @property {UserSession|null} user - Current user session
 * @property {Function} onLogout - Function to handle logout
 */

// Export types for use in other files
export {};

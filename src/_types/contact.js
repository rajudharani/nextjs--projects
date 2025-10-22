/**
 * @typedef {Object} ContactType
 * @property {string} id - Unique contact ID
 * @property {string} name - Contact name
 * @property {string} email - Contact email
 * @property {string} phone - Contact phone number
 * @property {string} address - Contact address
 * @property {string} company - Contact company
 * @property {string} notes - Additional notes about the contact
 * @property {string} userId - ID of the user who owns this contact
 * @property {string} createdAt - Contact creation timestamp
 * @property {string} updatedAt - Contact last update timestamp
 */

/**
 * @typedef {Object} ContactFormData
 * @property {string} name - Contact name
 * @property {string} email - Contact email
 * @property {string} phone - Contact phone number
 * @property {string} address - Contact address
 * @property {string} company - Contact company
 * @property {string} notes - Additional notes about the contact
 */

/**
 * @typedef {Object} ContactListProps
 * @property {ContactType[]} contacts - Array of contacts to display
 * @property {Function} onEdit - Function to handle contact edit
 * @property {Function} onDelete - Function to handle contact deletion
 * @property {boolean} isLoading - Loading state
 */

/**
 * @typedef {Object} ContactFormProps
 * @property {ContactType|null} contact - Contact to edit (null for new contact)
 * @property {Function} onSubmit - Function to handle form submission
 * @property {Function} onCancel - Function to handle form cancellation
 * @property {boolean} isLoading - Loading state
 */

/**
 * @typedef {Object} DeleteContactProps
 * @property {ContactType} contact - Contact to delete
 * @property {Function} onConfirm - Function to handle delete confirmation
 * @property {Function} onCancel - Function to handle delete cancellation
 * @property {boolean} isLoading - Loading state
 */

// Export types for use in other files
export {};

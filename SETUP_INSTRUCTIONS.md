# Contact Manager - Setup Instructions

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start JSON Server (Database)
Open a new terminal and run:
```bash
npx json-server --watch src/app/_data/db.json --port 3005
```

### 3. Start Next.js Development Server
In another terminal, run:
```bash
npm run dev
```

### 4. Open Your Browser
Navigate to: `http://localhost:3000`

## 📋 How to Use

### 1. **Home Page**
- Shows "Welcome to Contact Manager"
- Click "Get Started" to register
- Click "Sign In" to login

### 2. **Registration**
- Fill in: Name, Email, Password, Confirm Password
- After registration, you'll be redirected to contacts page

### 3. **Login**
- Use existing credentials:
  - Email: `user1@gmail.com`
  - Password: `123456`
- Or create a new account

### 4. **Contact Management**
- **View Contacts**: See all your contacts in a beautiful list
- **Add Contact**: Click "Add Contact" button
- **Edit Contact**: Click "Edit" button on any contact
- **Delete Contact**: Click "Delete" button (with confirmation)

## 🎯 Features

✅ **User Authentication**
- Registration with validation
- Login with error handling
- Secure session management

✅ **Contact Management**
- Create new contacts
- Edit existing contacts
- Delete contacts with confirmation
- View all contacts in organized list

✅ **Beautiful UI**
- Modern Tailwind CSS design
- Responsive layout
- Loading states
- Error handling
- Professional forms

## 🔧 Technical Details

- **Frontend**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Database**: JSON Server (REST API)
- **Authentication**: Server-side sessions with cookies
- **Forms**: Server Actions for form handling

## 🐛 Troubleshooting

### Login Error
- Make sure JSON server is running on port 3005
- Check that the user exists in `src/app/_data/db.json`
- Clear browser cookies if needed

### Contact Not Saving
- Ensure JSON server is running
- Check browser console for errors
- Verify all required fields are filled

### Page Not Loading
- Make sure both servers are running
- Check terminal for error messages
- Try refreshing the page

## 📁 Project Structure

```
src/
├── _components/          # Reusable UI components
│   ├── ContactForm.jsx   # Add/Edit contact form
│   ├── ContactList.jsx   # Display contacts list
│   ├── DeleteContact.jsx # Delete confirmation modal
│   ├── LoginForm.jsx     # Login form
│   ├── LogoutButton.jsx  # Logout button
│   └── Navbar.jsx        # Navigation bar
├── _lib/                 # Utility functions
│   └── session.js        # Session management
├── _types/               # TypeScript definitions
│   ├── contact.js        # Contact types
│   └── user.js           # User types
├── actions/              # Server actions
│   ├── auth.js           # Authentication actions
│   └── contact.js        # Contact management actions
├── app/                  # Next.js app directory
│   ├── (auth)/           # Authentication pages
│   ├── contact/          # Contact management pages
│   ├── _data/            # Database file
│   └── page.js           # Home page
└── api/                  # API utilities
    └── contact.js        # Contact API calls
```

## 🎉 You're All Set!

Your Contact Manager is now ready to use. Start by registering a new account or logging in with the existing credentials to begin managing your contacts!

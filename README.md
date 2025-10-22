# 📞 Contact Manager

A modern, responsive Contact Manager application built with Next.js 14, featuring beautiful animations, full CRUD functionality, and secure authentication.

![Contact Manager](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript)

## ✨ Features

### 🔐 **Authentication System**
- ✅ User Registration with validation
- ✅ Secure Login/Logout functionality
- ✅ Session management with cookies
- ✅ Protected routes

### 📱 **Contact Management**
- ✅ **Create** new contacts with full details
- ✅ **Read** and view all contacts in beautiful cards
- ✅ **Update** existing contact information
- ✅ **Delete** contacts with confirmation modal
- ✅ Search and filter functionality

### 🎨 **Modern UI/UX**
- ✅ **Responsive Design** - Works on all devices
- ✅ **Beautiful Animations** - Smooth transitions and hover effects
- ✅ **Glass Morphism** - Modern glass-like effects
- ✅ **Gradient Backgrounds** - Eye-catching color schemes
- ✅ **Custom Animations** - Fade-in, slide-up, bounce effects

### 🚀 **Technical Features**
- ✅ **Next.js 14** with App Router
- ✅ **Server Actions** for secure data handling
- ✅ **Tailwind CSS** for styling
- ✅ **JSON Server** for database simulation
- ✅ **Form Validation** (client & server-side)
- ✅ **Error Handling** with user-friendly messages

## 🖼️ Screenshots

### Home Page
- Beautiful landing page with animated elements
- Navigation bar with Login/Signup options
- Responsive design for all screen sizes

### Contact Management
- Modern contact cards with gradient avatars
- Smooth animations and hover effects
- Easy-to-use forms for adding/editing contacts

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/contact-manager.git
   cd contact-manager
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the database server**
   ```bash
   npx json-server --watch src/app/_data/db.json --port 3005
   ```

4. **Start the Next.js application**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

### 🎯 Easy Server Startup

Use the provided scripts for easy server management:

**Windows (Batch):**
```bash
start-servers.bat
```

**Windows (PowerShell):**
```bash
.\start-servers.ps1
```

## 📋 Usage

### 1. **Home Page**
- Visit the landing page with beautiful animations
- Click "Sign Up" to create a new account
- Click "Sign In" to login with existing credentials

### 2. **Registration**
- Fill in: Name, Email, Password, Confirm Password
- After registration, you'll be redirected to contacts page

### 3. **Login**
- Use existing credentials or create a new account
- After login, access your personalized dashboard

### 4. **Contact Management**
- **View Contacts**: See all your contacts in beautiful cards
- **Add Contact**: Click "Add Contact" button
- **Edit Contact**: Click "Edit" button on any contact
- **Delete Contact**: Click "Delete" button (with confirmation)

## 🏗️ Project Structure

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
│   ├── contact/          # Contact management pages
│   ├── login/            # Login page
│   ├── register/         # Registration page
│   ├── _data/            # Database file
│   └── page.js           # Home page
└── api/                  # API utilities
    └── contact.js        # Contact API calls
```

## 🎨 Design Features

### **Animations**
- Custom CSS animations (fade-in, slide-up, bounce-in)
- Staggered animations for contact cards
- Smooth hover effects and transitions
- Loading states with spinners

### **Responsive Design**
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly buttons
- Adaptive typography

### **Modern UI Elements**
- Glass morphism effects
- Gradient backgrounds
- Custom scrollbars
- Shadow effects for depth

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory:

```env
# Database URL (for JSON Server)
DATABASE_URL=http://localhost:3005

# Session Secret (for production)
SESSION_SECRET=your-secret-key-here
```

### Database
The application uses JSON Server for data persistence. The database file is located at:
```
src/app/_data/db.json
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Other Platforms
- **Netlify**: Connect GitHub repository
- **Railway**: Deploy with Railway CLI
- **Heroku**: Use Heroku CLI

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- React team for the component library
- All contributors and users

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the documentation
- Review the setup instructions

---

**⭐ Star this repository if you found it helpful!**

**🎉 Happy coding!**
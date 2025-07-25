# 🛒 Amazon Clone – React + Firebase + Stripe

A fully functional **Amazon-inspired** eCommerce web application built using **ReactJS**, **Firebase**, and **Stripe**. It supports user authentication, product browsing, cart functionality, payment processing, and order tracking — designed to simulate a real-world shopping experience.

---

## 🚀 Features

- ✅ User authentication with Firebase Auth (login & logout)
- 🛍️ Product listing with images, titles, and prices
- 🛒 Add to cart, remove from cart
- 💳 Stripe payment integration (test mode)
- 📦 Order confirmation and order history page
- 🔥 Firebase Firestore for database and order storage
- 🌐 Responsive layout built with CSS Flexbox/Grid

---

## 🔧 Tech Stack

- **Frontend**: ReactJS, CSS, Vite
- **Backend Functions**: Firebase Cloud Functions
- **Database**: Firebase Firestore
- **Auth**: Firebase Authentication
- **Payments**: Stripe

---

## 📁 Folder Structure

```
amazonclone/
│
├── public/          # Static assets
├── src/             # React source files
│   ├── components/  # Header, Product, Checkout, etc.
│   ├── context/     # State management
│   └── App.jsx      # Main app logic
│
├── functions/       # Firebase backend functions (e.g., Stripe checkout)
├── .firebaserc      # Firebase config
├── firebase.json    # Hosting config
├── vite.config.js   # Vite build config
└── README.md        # Project readme
```

---

## 📦 Setup Instructions

```bash
# Clone the repository
git clone https://github.com/hagdu123/amazonclone.git
cd amazonclone

# Install frontend dependencies
npm install

# Run development server
npm run dev

# For Firebase Functions (in /functions)
cd functions
npm install
```

> 🔐 Make sure to add your Firebase and Stripe API keys in `.env` or Firebase console.

---

## 🖼️ Demo & Screenshots

🔗 **Live Demo**: _Coming Soon_  
🖼️ **Screenshots**: Will be added shortly

---

## 🤝 Contribution Guidelines

Contributions are welcome!

1. Fork this repository
2. Create a branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a Pull Request

---

## 👤 Author

**Juveria Maher**  
GitHub: [@hagdu123](https://github.com/hagdu123)

---


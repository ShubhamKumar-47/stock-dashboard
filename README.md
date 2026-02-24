# 📈 Stock Dashboard (MERN Stack)

A Full Stack Stock Market Dashboard built using the MERN stack.

This project includes authentication, role-based access control, real-time stock API integration, and a premium UI with dark mode.

---

## 🚀 Features

- 🔐 JWT Authentication (Login / Signup)
- 👤 Role-Based Access (Admin & User)
- 📊 Real-Time Stock Price API (Alpha Vantage)
- 🧾 Buy / Sell Transactions
- 📈 Stock Chart Integration
- 🌙 Dark Mode Support
- 🎨 Premium Dashboard UI
- 🛡 Protected Routes
- 🔄 Persistent Login (Token-based)

---

## 🏗 Tech Stack

### Frontend
- React.js
- React Router
- Context API
- Axios
- Chart.js

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt

---

## 📁 Project Structure

```
stock-dashboard/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── frontend/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── services/
│   └── App.jsx
│
└── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/stock-dashboard-mern.git
cd stock-dashboard
```

---

### 2️⃣ Install Backend

```bash
cd backend
npm install
npm run dev
```

---

### 3️⃣ Install Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create `.env` file inside backend:

```
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
STOCK_API_KEY=your_alpha_vantage_key
```

---

## 🌐 API Endpoints

### Auth
- POST /auth/signup
- POST /auth/login
- GET /auth/me

### Transactions
- POST /transactions
- GET /transactions/my
- GET /transactions (Admin)

---

## 👨‍💻 Author

Shubh  
B.Tech 3rd Year Student  
Full Stack Developer

---

## ⭐ Future Improvements

- Live Stock Auto Refresh
- Portfolio Analytics
- Stock Watchlist
- Deployment (Render + Vercel)
- WebSocket Real-Time Updates

---

## 📌 License

This project is built for educational and portfolio purposes.
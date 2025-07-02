# 🚗 Uber Clone (MERN Stack)

A full-featured Uber Clone built using the MERN stack (MongoDB, Express.js, React, Node.js). This app replicates the core functionality of the real Uber platform — including real-time ride booking, user authentication, driver-passenger matching, location tracking, and ride status updates.

---

## 🔧 Tech Stack

### Frontend:
- **React.js** – For building the user interface
- **Redux / Context API** – For state management
- **Leaflet / Google Maps API** – For maps and real-time location tracking
- **Axios** – For API requests

### Backend:
- **Node.js & Express.js** – Backend server and REST APIs
- **MongoDB** – Database for storing user, driver, and ride data
- **Socket.IO** – Real-time updates (location tracking, ride status)
- **JWT** – For secure user authentication

---

## 🚀 Features

- 🧍 User and driver authentication (JWT)
- 📍 Real-time geolocation using Maps API
- 🚕 Book, track, and complete rides
- 🔄 Live updates between driver and passenger via WebSockets
- 💳 Payment gateway integration (optional/future)
- 📂 Role-based dashboard (Rider / Driver)

---

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DayanandK01/uber-clone.git
   cd uber-clone
   ```
2. **Install frontend dependencies**
   ```bash
   npm install
   ```
3. **Install backend dependencies**
   ```bash
   npm install
   ```
4. **Environmet variables**
   MONGO_URI
   JWT_SECRET_KEY
   GOOGLE_MAPS_API_KEY
5. **Run the backend
   ```bash
   npm run server
   ```
6. **Run the Frontend**
   ```bash
   npm start
   ```

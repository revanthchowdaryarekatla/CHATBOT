# 🤖 AI Chatbot

An AI-powered chatbot built with **React** and **Vite**, integrated with the **Groq API** to provide real-time conversational responses using large language models.

This project was developed to learn modern frontend development with React, API integration, and secure deployment practices.

🌐 **Live Demo:** https://chatbot-flame-ten-vr2cmkddax.vercel.app/

---

## 📖 About the Project

This chatbot allows users to have real-time conversations with an AI assistant through a clean and responsive interface.

The project started as a frontend React learning project with predefined responses and was later upgraded to use the **Groq API**, enabling dynamic AI-generated conversations.

The API key is securely stored using **Vercel Environment Variables**, ensuring it is never exposed in the frontend.

---

## ✨ Features

- 🤖 AI-powered chatbot using Groq
- 💬 Real-time conversations
- ⚛️ Built with React and Vite
- ⚡ Fast responses
- 📱 Responsive user interface
- 🔄 Auto-scroll to latest message
- ⌨️ Send messages using keyboard or button
- 🔒 Secure backend API (Vercel Serverless Functions)
- 🚀 Deployed on Vercel

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- JavaScript
- HTML5
- CSS3

### Backend
- Vercel Serverless Functions
- Node.js

### AI
- Groq API
- OpenAI JavaScript SDK

### Deployment
- Vercel

---

## 📂 Project Structure

```
chatbot-project
│
├── api/
│   └── chat.js
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── services/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── vite.config.js
```

---

## 🚀 Installation

Clone the repository

```bash
git clone https://github.com/revanthchowdaryarekatla/CHATBOT.git
```

Navigate into the project

```bash
cd chatbot-project
```

Install dependencies

```bash
npm install
```

Create a `.env` file in the project root

```env
GROQ_API_KEY=your_api_key_here
```

Run the development server

```bash
npm run dev
```

Build for production

```bash
npm run build
```

---

## 🔐 Security

The Groq API key is **never stored in the frontend**.

Instead, requests are routed through a **Vercel Serverless Function**, where the API key is securely accessed using environment variables.

This prevents the API key from being exposed to users.

---

## 🎯 Learning Objectives

This project helped me learn:

- React Components
- React Hooks (`useState`, `useRef`)
- Component-based Architecture
- API Integration
- Asynchronous JavaScript
- Fetch API
- Environment Variables
- Vercel Deployment
- Serverless Functions
- AI API Integration
- Error Handling
- Responsive UI Design

---

<img width="1495" height="968" alt="Screenshot 2026-07-19 205315" src="https://github.com/user-attachments/assets/1ffff46d-067b-4a7c-bbe7-b791803ce6e1" />


---

## 👨‍💻 Author

**Revanth Chowdary Arekatla**

- GitHub: https://github.com/revanthchowdaryarekatla

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.

---

## 📄 License

This project is licensed under the MIT License.

# ai-chat-v1
# AI Chat App

A full-stack AI chat application built with a React frontend and an Express backend. The frontend provides a simple chat interface, while the backend handles AI responses using LangChain.

## Overview

This project is a basic chat app architecture for learning and building AI-powered applications. It separates the UI from the AI orchestration layer:

- **Frontend:** React
- **Backend:** Express.js
- **AI Layer:** LangChain

The frontend sends user messages to the backend, and the backend uses LangChain to process the prompt and return a response.

---

## Tech Stack

### Frontend
- React
- JavaScript or TypeScript
- Axios or Fetch API
- Basic CSS or Tailwind

### Backend
- Node.js
- Express.js
- LangChain
- dotenv
- CORS

---

## Project Structure

```bash
ai-chat-app/
│
├── client/                  # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   └── ChatWindow.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
│
├── server/                  # Express backend
│   ├── routes/
│   │   └── chat.js
│   ├── index.js
│   ├── langchain.js
│   ├── .env
│   └── package.json
│
└── README.md

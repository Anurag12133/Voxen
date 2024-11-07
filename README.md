## 🌐 Voxen Blogging Website
Welcome to Voxen – a modern blogging platform built with React, Node.js, Express, and Prisma ORM using Neon Tech PostgreSQL as the database. The backend is deployed on Cloudflare Workers for a serverless and scalable infrastructure, and the frontend is hosted on Vercel.
.

## 🔗 Project Links
- Frontend (Vercel): https://voxen-app.vercel.app/
- Backend API (Cloudflare Workers):  https://core-voxen.ranu47243.workers.dev

## 📋 Table of Contents
- ✨ Features
- 💻 Tech Stack
- 🚀 Getting Started
- 🔧 Backend Setup
- ⚙️ Frontend Setup
- 🔐 Environment Variables
- 🚢 Deployment
- 🤝 Contributing

## ✨ Features
- User Authentication 🔑: Secure login and registration.
- Blog Management 📝: Create, edit, delete, and view blog posts.
- Rich Text Editor ✍️: Compose and format posts easily.
- Comment System 💬: Readers can interact with posts through comments.
- Responsive Design 📱: Optimized for both mobile and desktop.
- Serverless Backend 🌐: Deployed on Cloudflare Workers for fast, scalable APIs.
- Prisma ORM with PostgreSQL 💾: Simplified and efficient database management.
## 💻 Tech Stack
- Frontend: React, Tailwind CSS
- Backend: Node.js, Express, Prisma ORM, Cloudflare Workers
- Database: PostgreSQL (via Neon Tech's cloud service)
- Deployment Platforms: Vercel (Frontend), Cloudflare Workers (Backend)
## 🚀 Getting Started
Prerequisites
Ensure you have the following installed:

- Node.js (version 14 or higher)
- PostgreSQL (via Neon Tech or another cloud provider)
- Vercel and Cloudflare Workers accounts for deployment
🔧 Backend Setup
## Clone the backend repository:


Copy code
```
git clone https://github.com/your-username/voxen-backend.git
```
cd voxen-backend
Install dependencies:


Copy code
```
npm install
```
Configure Prisma:

- Update prisma/schema.prisma to connect to your Neon PostgreSQL instance.

- Run Prisma migrations to set up your database:


Copy code
```
npx prisma migrate dev --name init
```
Start the development server:


Copy code
```
npm run dev
```
The backend server should now be running on http://localhost:3000.

⚙️ Frontend Setup
Clone the frontend repository:


Copy code
```
git clone https://github.com/your-username/voxen-frontend.git
```
- cd voxen-frontend
Install dependencies:

Copy code
npm install
Update environment variables to point to the backend API URL.

Start the development server:


Copy code
```
npm run start
```
The frontend should now be running on http://localhost:3000.

🔐 Environment Variables
For the backend:

- DATABASE_URL - Neon Tech PostgreSQL connection string
- JWT_SECRET - Secret key for JWT authentication

For the frontend:

- REACT_APP_API_URL - URL of the backend API (e.g., https://core-voxen.ranu47243.workers.dev)
🚢 Deployment
- Backend (Cloudflare Workers)
- Install Cloudflare Workers CLI:

Copy code
```
npm install -g wrangler
```
- Configure wrangler.toml with your Cloudflare account information.

Publish the backend:

Copy code
```
wrangler publish
```
Frontend (Vercel)
- Push the frontend repository to GitHub (or another VCS).


## 🤝 Contributing
We welcome contributions to improve Voxen! Please fork the repository and create a pull request with your changes. Ensure to follow the coding style and provide clear commit messages.


# QuantumCode – Coding Platform

QuantumCode is a **full-stack** web application designed for competitive programming, code collaboration, and real-time execution.

## 📁 Project Structure

```markdown
QuantumCode 
 ├── apps/  
 │ ├── frontend/ # NextJS
 │ ├── backend/ # NestJS  
 ├── packages/
 │ ├── eslint-config/ # Shared ESLint settings  
 │ ├── tsconfig/ # Shared TypeScript settings  
 ├── .gitignore # Git ignore file  
 ├── turbo.json # Turborepo configuration  
 ├── package.json # Dependencies and scripts  
 ├── README.md # Project documentation
```

---

## 🔧 Setup & Installation

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/your-repo/quantumcode.git
cd quantumcode
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Run the Development Environment

```sh
npm dev
```

This will start both the **frontend** and **backend** applications.

---

## 🌍 Environment Variables

Create a `.env` file in `apps/backend` and `apps/frontend` with the following:

### **Backend (`apps/backend/.env`)**

```env
DATABASE_URL=postgres://postgres:root@localhost:5432/your_database
JWT_SECRET=
```

### **Frontend (`apps/frontend/.env`)**

```env
none
```

---

# 📨 Premium Node Mailer & Contact Form

![Project Mockup](assets/mockup.png)

A modern, type-safe, and visually stunning contact form application built with **Node.js**, **Express**, and **Nodemailer**. This project features a cutting-edge UI powered by **Tailwind CSS v4** and follows modern development practices with **ESM** and **TypeScript**.

---

## ✨ Features

- 🚀 **Next-Gen UI**: Designed with Tailwind CSS v4, featuring glassmorphism, smooth animations, and neon gradients.
- 📧 **Robust Email Delivery**: Fully integrated with Nodemailer for secure email sending via SMTP (Gmail pre-configured).
- 🛡️ **Type Safety**: Built from the ground up with TypeScript for a reliable developer experience.
- ⚡ **Lightning Fast**: Client-side bundling with `esbuild` and backend execution with `tsx`.
- 📁 **Form Data Mastery**: Handles complex form data using `multiparty`.
- 🌐 **CORS Ready**: Configured for cross-origin resource sharing.
- 📝 **Modern Tooling**: Linting and formatting powered by `oxlint` and `oxfmt`.

---

## 🛠️ Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![ESBuild](https://img.shields.io/badge/ESBuild-FFCF00?style=for-the-badge&logo=esbuild&logoColor=black)

---

## 🚀 Quick Start

### 1️⃣ Prerequisites

- **Node.js** (v20 or higher recommended)
- **pnpm** (preferred package manager)

### 2️⃣ Installation

Clone the repository and install dependencies:

```bash
pnpm install
```

### 3️⃣ Configuration

Create a `.env` file in the root directory and add your credentials:

```env
PORT=5000
EMAIL=your-gmail@gmail.com
PASS=your-google-app-password
```

> [!TIP]
> Use a [Google App Password](https://myaccount.google.com/apppasswords) instead of your regular Gmail password for enhanced security.

### 4️⃣ Development

Run the server in development mode with hot-reloading:

```bash
pnpm run dev
```

To build and watch all assets (CSS, JS, and TS):

```bash
pnpm run dev:all
```

### 5️⃣ Production Build

Compile the project for production:

```bash
pnpm run build
pnpm start
```

---

## 📂 Project Structure

```text
├── assets/           # Project visuals & mockups
├── public/           # Static assets (compiled CSS/JS, HTML)
├── src/              # Source code
│   ├── client.ts     # Client-side form logic
│   ├── server.ts     # Express & Nodemailer backend
│   └── style.css      # Tailwind CSS input
├── package.json      # Dependencies and scripts
└── tsconfig.json     # TypeScript configuration
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">
  Developed with ❤️ by <a href="https://github.com/jorgeadev">jorgeadev</a>
</p>

# 🔐 Password Strength Checker

A modern, interactive password strength checker built with **React**. It includes:

✅ Real-time password validation  
✅ Strength meter (Weak → Medium → Strong → Very Strong)  
✅ Copy-to-clipboard button  
✅ Strong password generator with custom length  
✅ Common password detection  
✅ Accessible UI + clean modern design

---

## 🚀 Features

### ✔ Live Strength Detection
- Checks for length
- Uppercase & lowercase letters
- Numbers
- Special characters
- No spaces allowed
- Not in common password list

### ✔ Strong Password Generator
- Adjustable length (6 to 20 characters)
- Generates random secure password

### ✔ Copy to Clipboard
- One-click copy button
- Shows a visual confirmation

---

## 📁 Project Structure
```
📦 password-checker
 ┣ 📂 src
 ┃ ┣ 📜 App.jsx
 ┃ ┣ 📜 App.css
 ┃ ┗ 📜 index.js
 ┣ 📜 package.json
 ┣ 📜 README.md
 ┗ 📜 vite.config.js / webpack config (based on your setup)
```

---

## 🛠️ How to Run Locally
### Clone the repo:
```bash
git clone https://github.com/your-username/password-checker.git
cd password-checker
```

### Install dependencies:
```bash
npm install
```

### Start development server:
```bash
npm run dev
```

App will start at:
```
http://localhost:5173
```
_(or another port depending on your environment)_

---
## 🌐 Deployment
You can deploy this project easily:

### **Vercel:**
```bash
vercel
```

### **Netlify:**
Drag & drop the **dist** folder after running:
```bash
npm run build
```

### **GitHub Pages:**
Use `gh-pages` or Vite GitHub Pages plugin.

---

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first.

---

## 📄 License
This project is licensed under the **MIT License**.

---

## ⭐ Support
If you like this project, consider giving it a **star ⭐ on GitHub**!

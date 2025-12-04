import { useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Common weak passwords
  const weakList = [
    "123456",
    "password",
    "qwerty",
    "iloveyou",
    "admin",
    "welcome",
    "abc123",
    "111111",
    "password123",
  ];

  const isCommonPassword = weakList.includes(password.toLowerCase());

  // RULES
  const rules = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    symbol: /[^A-Za-z0-9]/.test(password),
    nospace: !/\s/.test(password),
    notCommon: !isCommonPassword,
  };

  // STRENGTH
  const strengthScore = Object.values(rules).filter(Boolean).length;

  let strength = "";
  if (strengthScore <= 2) strength = "weak";
  else if (strengthScore <= 5) strength = "medium";
  else strength = "strong";

  // COPY PASSWORD
  const copyPassword = () => {
    if (password.length > 0) {
      navigator.clipboard.writeText(password);
      alert("Password copied to clipboard! 🚀");
    }
  };

  // AUTO-GENERATE PASSWORD
  const generatePassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let newPass = "";
    for (let i = 0; i < 10; i++) {
      newPass += chars[Math.floor(Math.random() * chars.length)];
    }
    setPassword(newPass);
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Password Strength Checker</h1>

        {/* PASSWORD INPUT + SHOW/HIDE */}
        <div className="input-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="toggle-btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        {/* BUTTONS */}
        <div className="btn-section">
          <button className="copy-btn" onClick={copyPassword}>
            📋 Copy
          </button>

          <button className="gen-btn" onClick={generatePassword}>
            ⚡ Generate Strong Password
          </button>
        </div>

        {/* STRENGTH BAR */}
        <div className={`strength-bar ${strength}`}></div>
        <p className={`strength-text ${strength}`}>
          {password && (isCommonPassword ? "Too Common ❌" : `Strength: ${strength.toUpperCase()}`)}
        </p>

        {/* RULE LIST */}
        <div className="rules">
          <p className={rules.length ? "valid" : "invalid"}>
            {rules.length ? "✔" : "✖"} Minimum 8 characters
          </p>

          <p className={rules.uppercase ? "valid" : "invalid"}>
            {rules.uppercase ? "✔" : "✖"} At least one uppercase letter
          </p>

          <p className={rules.lowercase ? "valid" : "invalid"}>
            {rules.lowercase ? "✔" : "✖"} At least one lowercase letter
          </p>

          <p className={rules.number ? "valid" : "invalid"}>
            {rules.number ? "✔" : "✖"} At least one number
          </p>

          <p className={rules.symbol ? "valid" : "invalid"}>
            {rules.symbol ? "✔" : "✖"} At least one special character
          </p>

          <p className={rules.nospace ? "valid" : "invalid"}>
            {rules.nospace ? "✔" : "✖"} No spaces allowed
          </p>

          <p className={rules.notCommon ? "valid" : "invalid"}>
            {rules.notCommon ? "✔" : "✖"} Not a common password
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.js";
import "./App.css";

function App() {
  <p>Edit <code>src/App.js</code> and save to reload. </p>
  // State for password generation settings
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);  // Default password length
  const [useLowercase, setUseLowercase] = useState(true);
  const [useUppercase, setUseUppercase] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSpecial, setUseSpecial] = useState(true);

  // Characters to use based on options selected
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()_+-=[]{}|;:',.<>?";

  // Function to generate password
  const generatePassword = () => {
    let charset = "";
    if (useLowercase) charset += lowercaseChars;
    if (useUppercase) charset += uppercaseChars;
    if (useNumbers) charset += numberChars;
    if (useSpecial) charset += specialChars;

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }
    setPassword(newPassword);
  };

  // Function to copy the password to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <div className="App">
      <h1><b>Strong Password Generator</b></h1>
      <p><b>Create strong and secure passwords to keep your account safe.</b></p>
      <div className="settings">
        <label>
          Password Length:
          <input
            type="number"
            min="8"
            max="32"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </label>

        <div>
          <label>
            <input
              type="checkbox"
              checked={useLowercase}
              onChange={() => setUseLowercase(!useLowercase)}
            />
            Include Lowercase
          </label>

          <label>
            <input
              type="checkbox"
              checked={useUppercase}
              onChange={() => setUseUppercase(!useUppercase)}
            />
            Include Uppercase
          </label>

          <label>
            <input
              type="checkbox"
              checked={useNumbers}
              onChange={() => setUseNumbers(!useNumbers)}
            />
            Include Numbers
          </label>

          <label>
            <input
              type="checkbox"
              checked={useSpecial}
              onChange={() => setUseSpecial(!useSpecial)}
            />
            Include Special Characters
          </label>
        </div>
      </div>

      <div>
        <textarea
          value={password}
          readOnly
          rows="4"
          cols="50"
          style={{ width: "20%", fontSize: "20px" }}
        />
      </div>

      <div>
        <button onClick={generatePassword}><b>Generate Password</b></button>
        <button onClick={copyToClipboard}><b>Copy Password</b></button>
      </div>
    </div>
  );
}

export default App;


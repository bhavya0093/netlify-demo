import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "30px",
        backgroundColor: darkMode ? "#222" : "#fff",
        color: darkMode ? "#fff" : "#222",
      }}
    >
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
      </button>

      <h1>My First Netlify App</h1>

      <p>This React app is deployed on Netlify.</p>
    </div>
  );
}

export default App;
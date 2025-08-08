import { useState } from "react";

function LightDartApp() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <h3 className="mode-headline">Light Dart Application</h3>
      <button className = {darkMode ? "light-changer" : "dark-changer"}onClick={toggleDarkMode}>
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default LightDartApp;

import { useEffect, useState } from "react";

function DarkMood() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <h1 className="text-3xl font-bold mb-4">Hello Dark Mode 🌙</h1>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-yellow-500 dark:hover:bg-yellow-600"
      >
        Toggle Dark Mode
      </button>
    </div>
  );
}

export default DarkMood;

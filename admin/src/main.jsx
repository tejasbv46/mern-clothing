/*import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
*/
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.jsx"; // 1. Import the provider

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider> {/* 2. Wrap the App component */}
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
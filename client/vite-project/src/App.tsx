import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import { COLORS_DROPDOWN } from "./constants"; // make sure path is correct

const App: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState(COLORS_DROPDOWN.Caramel); // default

  const changeColor = (colorName: string) => {
    const newColor = COLORS_DROPDOWN[colorName];
    if (newColor) {
      setSelectedColor(newColor);
    }
  };

  return (
    <div
      style={{
        background: selectedColor,
        minHeight: "100vh",
        padding: "1rem",
      }}
    >
      <div className="d-flex justify-content-end p-3 dropdown">
        <button
          className="btn btn-success dropdown-toggle shadow"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Toggle Color Mode
        </button>
        <ul className="dropdown-menu">
          {Object.keys(COLORS_DROPDOWN).map((colorName) => (
            <li key={colorName}>
              <button
                className="dropdown-item"
                onClick={() => changeColor(colorName)}
              >
                {colorName}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

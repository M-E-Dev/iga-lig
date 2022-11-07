import React from 'react'
import "../App.css";
import topLeft from "../assets/top-left.png";
import topRight from "../assets/top-right.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState("");
  
    const handleTurnuvalar = () => {
      setSelected("turnuvalar");
      navigate("/");
      // setBurger(false);
    };
    const handleFutbol = () => {
      setSelected("futbol");
      navigate("/futbol");
      // setBurger(false);
    };
    const handleVoleybol = () => {
      setSelected("voleybol");
      navigate("/voleybol");
      // setBurger(false);
    };
    const handleBasketbol = () => {
      setSelected("basketbol");
      navigate("/basketbol");
      // setBurger(false);
    };
    const handleFikstür = () => {
      setSelected("fikstür");
      navigate("/fikstür");
      // setBurger(false);
    };
  return (
    <div>
              <div className="top">
        {/* <img className='BG' src={bg} alt="" /> */}
        <img className="top-left-logo top-logo" src={topLeft} alt="" />
        <img className="top-right-logo top-logo" src={topRight} alt="" />
      </div>
      <div className="navigation-container">
        <ul className="navigation">
          <li
          onClick={handleTurnuvalar}
            className={`nav-item ${selected === "turnuvalar" ? "orange" : ""}`}
          >
            Turnuvalar
          </li>
          <li
          onClick={handleFutbol}
            className={`nav-item ${selected === "futbol" ? "orange" : ""}`}
          >
            Futbol
          </li>
          <li
          onClick={handleVoleybol}
            className={`nav-item ${selected === "voleybol" ? "orange" : ""}`}
          >
            Voleybol
          </li>
          <li
          onClick={handleBasketbol}
            className={`nav-item ${selected === "basketbol" ? "orange" : ""}`}
          >
            Basketbol
          </li>
          <li
          onClick={handleFikstür}
            className={`nav-item ${selected === "fikstür" ? "orange" : ""}`}
          >
            Fikstür
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
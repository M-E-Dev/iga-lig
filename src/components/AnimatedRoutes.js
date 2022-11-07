import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import {AnimatePresence} from "framer-motion"
import Turnuvalar from "./Turnuvalar"
import Futbol from "./Futbol"
import Voleybol from "./Voleybol"
import Basketbol from "./Basketbol"
import Fikstür from "./Fikstür"


const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>

    <Routes location={location} key={location.pathname}>
      <Route path="/" exact element={<Turnuvalar />} />
      <Route path="/futbol" element={<Futbol />} />
      <Route path="/voleybol" element={<Voleybol />} />
      <Route path="/basketbol" element={<Basketbol />} />
      <Route path="/fikstür" element={<Fikstür />} />

    </Routes>
    </AnimatePresence>

  );
};

export default AnimatedRoutes;

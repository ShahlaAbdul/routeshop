import * as React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Detail from "./Pages/Detail";
import Mainlayout from "./Layout/Mainlayout";

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route element={<Mainlayout />}>

          <Route path="/" element={<Home></Home>} /> {/* 👈 Renders at /app/ */}
          <Route path="/Contact" element={<Contact></Contact>} /> {/* 👈 Renders at /app/ */}
          <Route path="/Detail" element={<Detail></Detail>} /> {/* 👈 Renders at /app/ */}
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App
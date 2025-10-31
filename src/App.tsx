import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Carolita from "./pages/Carolita";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/carolita" element={<Carolita />} />
    </Routes>
  );
}

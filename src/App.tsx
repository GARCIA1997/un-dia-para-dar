import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Carolita from "./pages/Carolita";
import { ScrollToTop } from "./hooks/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carolita" element={<Carolita />} />
      </Routes>
    </>
  );
}

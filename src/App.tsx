import { Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Historia2025 from "./pages/Historia2025";
import Carolita from "./pages/Carolita";
import Boletin from "./pages/Boletin";
import { ScrollToTop } from "./hooks/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historia-2025" element={<Historia2025 />} />
        {/* La edición 2025 vivía en la raíz; conservamos el enlace antiguo. */}
        <Route path="/2025" element={<Navigate to="/historia-2025" replace />} />
        <Route path="/carolita" element={<Carolita />} />
        <Route path="/boletin" element={<Boletin />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Love from "./pages/Love";
import Apology from "./pages/Apology";
import Forever from "./pages/Forever";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Love />} />
        <Route path="/apology" element={<Apology />} />
        <Route path="/forever" element={<Forever />} />
      </Routes>
    </BrowserRouter>
  );
}

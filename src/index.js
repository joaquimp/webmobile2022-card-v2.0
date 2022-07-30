import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Agradecimento from "./routes/agradecimento";
import Avaliacao from "./routes/avaliacao";

import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Avaliacao />} />
      <Route path="/agradecimento" element={<Agradecimento />} />
    </Routes>
  </BrowserRouter>
);

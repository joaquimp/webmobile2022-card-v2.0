import "./styles.css";
import Avaliacao from "./routes/avaliacao";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Avaliacao />
    </BrowserRouter>
  );
}

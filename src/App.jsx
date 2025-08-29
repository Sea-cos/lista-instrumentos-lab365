import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { Table } from "./pages/Table/ListTable";
import { Cards } from "./pages/Card/ListCard";
import Navbar from "./assets/component/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/tabela" />} />
        <Route path="/tabela" element={<Table />} />
        <Route path="/cards" element={<Cards />} />
      </Routes>
    </>
  );
}

export default App;

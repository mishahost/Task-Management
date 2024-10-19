import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Auth/Login";
import Index from "./components/Index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/TaskManagement" element={<Index />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} /> 
    </Router>
  );
}

export default App;

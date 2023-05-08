import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Starting from "./pages/Starting";
import Main from "./pages/Main";
function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Starting />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/main/*" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;

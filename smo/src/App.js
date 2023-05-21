import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Starting from "./pages/Starting";
import Main from "./pages/Main";
import KakaoLogin from "./pages/KakaoLogin";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Starting />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/main/*" element={<Main />} />
        <Route path="/KakaoLogin" element={<KakaoLogin />} />
      </Routes>
    </div>
  );
}

export default App;

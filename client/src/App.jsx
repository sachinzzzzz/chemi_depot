import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Main from "./Components/Main/Main.jsx";
import Signup from "./Components/Signup/index.jsx";
import Login from "./Components/Login/Login.jsx";
import EmailVerify from "./Components/EmailVerify/index.jsx";

function App() {
	const user = localStorage.getItem("token");

	return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
      </Routes>
    </BrowserRouter>
	);
}

export default App;
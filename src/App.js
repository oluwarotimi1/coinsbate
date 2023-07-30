import { Route, Routes } from "react-router-dom";
import "./App.css";
// import MyAppBar from "./components/appbar/AppBar";
import Footer from "./components/footer/Footer";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";

function App() {
  return (
    <>
      {/* <MyAppBar /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;

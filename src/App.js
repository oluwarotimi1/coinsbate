import { Route, Routes } from "react-router-dom";
import "./App.css";
import MyAppBar from "./components/appbar/AppBar";
import Footer from "./components/footer/Footer";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";

function App() {
  return (
    <>
      <MyAppBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;

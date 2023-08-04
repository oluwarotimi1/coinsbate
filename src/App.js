import { Route, Routes } from "react-router-dom";
import "./App.css";
import MyAppBar from "./components/appbar/AppBar";
import Footer from "./components/footer/Footer";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Dashboard from "./pages/dashboard/Dashboard";
import PrivateRoute from "./components/privateroute/PrivateRoute";
import { useContext } from "react";
import { UserContext } from "./components/context/UserContext";
import ForgotPassword from "./pages/forgotpassword/ForgotPassword";
import Profile from "./pages/profile/Profile";

function App() {
  const { isLoggedIn } = useContext(UserContext);
  return (
    <>
      <MyAppBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute auth={isLoggedIn}>
              <Dashboard />
            </PrivateRoute>
          }
        /><Route
        path="/profile"
        element={
          <PrivateRoute auth={isLoggedIn}>
            <Profile />
          </PrivateRoute>
        }
      />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import MyAppBar from "./components/appbar/AppBar";
import Footer from "./components/footer/Footer";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
// import Dashboard from "./pages/dashboard/Dashboard";
import PrivateRoute from "./components/privateroute/PrivateRoute";
import { useContext } from "react";
import { UserContext } from "./components/context/UserContext";
import ForgotPassword from "./pages/forgotpassword/ForgotPassword";
import Profile from "./pages/profile/Profile";
import Payment from "./pages/payment/Payment";
import MainDashboard from "./pages/maindashboard/MainDashboard";
import SendMoneyBank from "./pages/SendMoney/SendMoneyBank";
import DepositBtc from "./pages/deposit/DepositBtc";

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
        {/* <Route
          path="/my-dashboard"
          element={
            <PrivateRoute auth={isLoggedIn}>
              <Dashboard />
            </PrivateRoute>
          }
        /> */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute auth={isLoggedIn}>
              <MainDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute auth={isLoggedIn}>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <PrivateRoute auth={isLoggedIn}>
              <Payment />
            </PrivateRoute>
          }
        />
        <Route
          path="/sendmoneybank"
          element={
            <PrivateRoute auth={isLoggedIn}>
              <SendMoneyBank />
            </PrivateRoute>
          }
        />
        <Route
          path="/deposit"
          element={
            <PrivateRoute auth={isLoggedIn}>
              <DepositBtc />
            </PrivateRoute>
          }
        />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;

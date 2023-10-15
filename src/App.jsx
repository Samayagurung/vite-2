import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Signup from "./pages/Signup";
import Navbar1 from "./components/Navbar";
import Login from "./pages/Login";
import Products from "./pages/Products";
import SecureRoutes from "./routes/SecureRoutes";

function App() {
  return (
    <>
      <Navbar1 />
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="" element={<SecureRoutes/>}>
        <Route path="/products" element={<Products />}></Route>
        </Route>
       
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;

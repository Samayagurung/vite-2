import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Signup from "./pages/Signup";
import Navbar1 from "./components/Navbar";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Navbar1 />
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;

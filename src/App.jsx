import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Signup from "./pages/Signup";
import Navbar1 from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar1 />
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;

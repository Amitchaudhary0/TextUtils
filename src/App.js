import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alerts from "./components/Alerts";


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  // This code is for Alert in Js
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1800);
  };

  // This code is for dark mode and light mode
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#212529fa";
    } else {
      setMode("light");
      document.body.style.background = "white";
    }
  };

  return (
    <>
    <BrowserRouter>

      <Navbar
        title="TextUtils"
        About="About Us"
        toggleMode={toggleMode}
        mode={mode}
        />

      <Alerts alert={alert} />

      <div className="container ">

      <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Text To Analyze" mode={mode}/>} />
          <Route exact path="/about" element={<About />} />
          
        </Routes>
      </div>
          </BrowserRouter>
    </>
  );
}
export default App;

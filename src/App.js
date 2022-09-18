import "./App.css";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import TermsOfService from "./components/TermsOfService";
import Privacy from "./components/Privacy";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop/>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/FAQs" element={<FAQs />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/termsofservice" element={<TermsOfService />}></Route>
          <Route path="/privacy" element={<Privacy />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

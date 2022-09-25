import React, { useState } from "react";
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
import Login from "./components/Login";
import ContactUs from "./pages/ContactUs";
import AddToCart from "./pages/AddToCart";
import Products from "./pages/Products";
import UserList from "./components/UserList";
import ProductList from "./components/ProductList";
import AdminRoute from "./components/AdminRoute";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar user={loggedInUser} onLogout={setLoggedInUser} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/FAQs" element={<FAQs />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/termsofservice" element={<TermsOfService />}></Route>
          <Route path="/privacy" element={<Privacy />}></Route>
          <Route
            path="/login"
            element={<Login onLogin={setLoggedInUser} details={loggedInUser} />}
          ></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/addtocart" element={<AddToCart />}></Route>
          <Route
            path="/users"
            element={
              <AdminRoute user={loggedInUser}>
                <UserList />
              </AdminRoute>
            }
          ></Route>
          <Route
            path="/productList"
            element={
              <AdminRoute user={loggedInUser}>
                <ProductList />
              </AdminRoute>
            }
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Headert from "./components/Headert";
import Footer from "./components/Footer";
import Center from "./components/Center";
import SignIn from "./components/SignIn";
import Orders from "./components/Orders";
import Signup from "./components/Signup";
import Cart from "./components/Cart";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={[<Header />, <Headert />, <Center />, <Footer></Footer>]}
          />
          <Route
            path="/checkout"
            element={[<Header />, <h1>Hi this is checkout page</h1>]}
          />
          <Route path="/signin" element={[<SignIn />]} />
          <Route
            path="/orders"
            element={[<Header />, <Headert />, <Orders />]}
          ></Route>
          <Route path="/signup" element={[<Signup />]}></Route>
          <Route
            path="/cart"
            element={[<Header />, <Headert />, <Cart />, <Footer></Footer>]}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
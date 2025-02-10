import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import "./global.css";
import Nav from "./components/Nav/Nav";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Products from "./pages/Products/Products";
import ProductProvider from "./context/ProductContext";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TOS from "./pages/TOS/TOS";

const navRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <div className="content_container">
          <Nav></Nav>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/privacyPolicy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
      {
        path: "/tos",
        element: <TOS></TOS>,
      },
    ],
  },
]);

const App = () => {
  return (
    <ProductProvider>
      <div className="app_container">
        <RouterProvider router={navRouter}></RouterProvider>
      </div>
    </ProductProvider>
  );
};

export default App;

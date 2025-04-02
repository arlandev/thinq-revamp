import React from "react";

// pages
import Login from "./pages/Login";
import InquirerHome from "./pages/InquirerHome";
import AdminHome from "./pages/AdminHome";
import HelpdeskPage from "./pages/HelpdeskPage";

// components
import Navbar from "/src/components/common/Navbar";
import Footer from "/src/components/common/Footer";

const App = () => {
  return (
    <>
      {/* <Login></Login> */}
      {/* <InquirerHome></InquirerHome> */}
      <AdminHome></AdminHome>
      {/* <HelpdeskPage /> */}
    </>
  );
};

export default App;

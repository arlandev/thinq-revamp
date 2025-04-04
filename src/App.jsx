import React from "react";

// pages
import Login from "./pages/Login";
import InquirerHome from "./pages/InquirerHome";
import AdminHome from "./pages/AdminHome";
import HelpdeskPage from "./pages/HelpdeskPage";
import PersonnelHomePage from "./pages/PersonnelHomePage";
import InquiryForm from "./pages/InquiryForm";
import InquirerAccountsPage from "./pages/InquirerAccountsPage";

// components
import Navbar from "/src/components/common/Navbar";
import Footer from "/src/components/common/Footer";

const App = () => {
  return (
    <>
      {/* COMMON PAGES */}
      {/* <Login></Login> */}

      {/* INQUIRER PAGES */}
      {/* <InquirerHome></InquirerHome> */}
      {/* <InquiryForm></InquiryForm> */}

      {/* HEALPDESK PAGES */}
      {/* <HelpdeskPage /> */}

      {/* PERSONNEL PAGES */}
      {/* <PersonnelHomePage /> */}

      {/* ADMIN PAGES */}
      <AdminHome></AdminHome>
      <InquirerAccountsPage />
    </>
  );
};

export default App;

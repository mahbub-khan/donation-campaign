import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import { useEffect, useState } from "react";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;

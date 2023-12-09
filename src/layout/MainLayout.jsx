import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import { useEffect, useState } from "react";

const MainLayout = () => {
  const [hasEnoughContent, setHasEnoughContent] = useState(false);

  const updateContentHeight = () => {
    const contentHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;

    setHasEnoughContent(contentHeight > viewportHeight);
  };

  useEffect(() => {
    // Initial check
    updateContentHeight();

    // Event listener for dynamic updates
    window.addEventListener("resize", updateContentHeight);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateContentHeight);
    };
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer hasEnoughContent={hasEnoughContent}></Footer>
    </div>
  );
};

export default MainLayout;

import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      document
        .getElementById("main")
        ?.scrollIntoView({ top: -10, behavior: "instant" });
    }, 0);
  }, [location]);

  return (
    <div style={{ margin: "-8px" }}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

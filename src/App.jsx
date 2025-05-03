import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ margin: "-8px" }}>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;

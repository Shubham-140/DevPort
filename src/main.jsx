import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import App from "./App.jsx";

const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:'about',
          element:<About/>
        },
        {
          path:'projects',
          element:<Projects/>
        },
        {
          path:'contact',
          element:<Contact/>
        },
      ]
    }
  ]
)

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);

import { createRoot } from "react-dom/client"
import './index.css';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
])

createRoot(document.getElementById('root') as HTMLElement).render(<RouterProvider router={router} />);
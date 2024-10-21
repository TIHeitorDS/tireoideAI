import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import "./index.css";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import CadasterPatient from "./pages/CadasterPatient.jsx";
import Patient from "./pages/Patient.jsx";
import MakeDiagnosis from "./pages/MakeDiagnosis.jsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cadastrar-paciente",
    element: <CadasterPatient />,
  },
  {
    path: "/pacientes",
    element: <Patient />,
  },
  {
    path: "/realizar-diagnostico",
    element: <MakeDiagnosis />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster richColors={true} />
  </StrictMode>
);

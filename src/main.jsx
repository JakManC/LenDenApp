import { StrictMode } from "react";
import "./index.css";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { NavBar } from "../components/NavBar.jsx";

import { Counter } from "../components/Counter.jsx";
import { LenDenHisab } from "../components/LenDenHisab.jsx";
import { NameInput } from "../components/NameInput.jsx";

const router = createBrowserRouter([
  { path: "/", element: <NavBar /> },
  {
    path: "/nameInput",
    element: (
      <div>
        <NavBar />
        <NameInput />
      </div>
    ),
  },

  {
    path: "/counter",
    element: (
      <div>
        <NavBar />
        <Counter />
      </div>
    ),
  },
  {
    path: "/lenDenHisab",
    element: (
      <div>
        <NavBar />
        <LenDenHisab />
      </div>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <StrictMode>
      <App />
    </StrictMode>
  </RouterProvider>,
);

import { StrictMode } from "react";
import "./index.css";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { NavBar } from "./components/NavBar.jsx";
import { InputWindow } from "./components/InputWindow.jsx";
import { ShowDetail } from "./components/ShowDetail.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/inputWindow",
    element: (
      <div>
        <NavBar />
        <InputWindow />
      </div>
    ),
  },
  {
    path: "/showDetail",
    element: (
      <div>
        <NavBar />
        <ShowDetail />
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

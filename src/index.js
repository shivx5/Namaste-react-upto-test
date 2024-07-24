import React from "react";
import ReactDOM from "react-dom/client";
import "/index.css"
import AppLayout from "./App";
import { RouterProvider } from "react-router-dom";
import { AppRoute } from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRoute}/>
);
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import axios from "axios";
axios.defaults.withCredentials = true;

export const backend_server = `http://localhost:5000`;

AOS.init(); // Initialize AOS

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);
// <React.StrictMode>
// </React.StrictMode>

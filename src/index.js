import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../style/vendor/animate/animate.min.scss";
import "../style/style.scss";

import Navbar from "./components/navbar";

const App = () => {
    return (
        <Router>
            <Navbar />
        </Router>
    );
};

// Preload and then mount App
window.addEventListener("load", () => {
    let preloader = document.getElementById("pre-loader");
    let appRoot = document.getElementById("root");

    let preload = setTimeout(() => {
        preloader.classList.add("animated", "fadeOut");

        let imageLoad = setTimeout(() => {
            preloader.style.display = "none";
            ReactDOM.render(<App />, appRoot);
        }, 650);
    }, 1500);
});

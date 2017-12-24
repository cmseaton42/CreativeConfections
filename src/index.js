import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "../style/vendor/animate/animate.min.scss";
import "../style/style.scss";

import Footer from "./components/footer";

import Contact from "./views/contact";
import Gallery from "./views/gallery";
import Home from "./views/home";

const App = () => {
    return (
        <Router>
            <div>
                <Route path="/" component={Contact} exact />
                <Route path="/Contact" component={Contact} />
                <Route path="/Gallery" component={Gallery} />
                <Footer />
            </div>
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

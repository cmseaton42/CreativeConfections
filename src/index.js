import React from "react";
import ReactDOM from "react-dom";
import "../style/vendor/animate/animate.min.scss";
import "../style/style.scss";

import Signature from "./components/signature";

const App = () => {
    // <img src="https://media.giphy.com/media/xUOxffodU10EVeDwcg/giphy.gif" />
    //         <img src="https://media.giphy.com/media/xUOxeWWsAqUbGWrcPK/giphy.gif" />
    //         <img src="https://media.giphy.com/media/xUOxfg7tsf63xReDRe/giphy.gif" />
    //         <img src="https://media.giphy.com/media/xUOxf7hN5NIATS3wgU/giphy.gif" />

    return (
        <div>
            <Signature />
        </div>
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

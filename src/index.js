import React from "react";
import ReactDOM from "react-dom";
import "../style/vendor/animate/animate.min.scss";
import "../style/style.scss";



const App = () => {
    return (
        <div>
           
        </div>
    );
};

// Preload and then mount App
// window.addEventListener("load", () => {
//     let preloader = document.getElementById("pre-loader");
//     let appRoot = document.getElementById("root");

//     let preload = setTimeout(() => {
//         preloader.classList.add("animated", "fadeOut");

//         let imageLoad = setTimeout(() => {
//             preloader.style.display = "none";
//             ReactDOM.render(<App />, appRoot);
//         }, 650);
//     }, 1500);
// });

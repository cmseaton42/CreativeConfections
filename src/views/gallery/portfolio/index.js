import React, { Component } from "react";
import FlipMove from "react-flip-move";
import MediaQuery from "react-responsive";

import imageList from "./images.json";
import "./portfolio.scss";

export default class Portfolio extends Component {
    constructor() {
        super();

        this.state = {
            images: imageList.images,
            menu: ["All", "Wedding", "Birthday", "Event"],
            active: "All"
        };

        this._renderImages = this._renderImages.bind(this);
        this._renderMenu = this._renderMenu.bind(this);
    }

    _renderImages() {
        const { images, active } = this.state;

        return images
            .filter(image => {
                const { url, tag } = image;
                if (active == "All") return true;
                return tag.includes(active);
            })
            .map(image => {
                const { url, tag } = image;
                return (
                    <div key={url} className="col-6 col-sm-4 col-md-3 col-lg-2 dflex justify-content-center">
                        <div onClick={() => console.log(url) } className="img-portfolio-wrapper">
                            <img src={url} alt="Gallery Image" className="img-portfolio" />
                        </div>
                    </div>
                );
            });
    }

    _renderMenu() {
        const { menu, active } = this.state;

        return menu.map((item, i) => {
            return (
                <li key={item} className="nav-item menu-option">
                    <button
                        onClick={() => {
                            this.setState({ active: item });
                        }}
                        className={`btn-menu ${active == item ? "active" : ""}`}
                    >
                        {item}
                    </button>
                </li>
            );
        });
    }

    render() {
        return (
            <div className="cmpnt-portfolio container-fluid">
                <div className="spacer-nav" />
                <div className="row align-items-center justify-content-center">
                    <ul className="nav menu text-center">{this._renderMenu()}</ul>
                </div>
                <FlipMove className="row justify-content-center">{this._renderImages()}</FlipMove>
                <div className="spacer-nav" />
            </div>
        );
    }
}

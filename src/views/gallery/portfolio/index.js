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
            menu: [
                { active: true, option: "All" },
                { active: false, option: "Wedding" },
                { active: false, option: "Birthday" },
                { active: false, option: "Event" },
                { active: false, option: "Etc" }
            ]
        };

        this._renderImages = this._renderImages.bind(this);
        this._renderMenu = this._renderMenu.bind(this);
    }

    _renderImages() {
        const { images } = this.state;

        return imageList.map(image => {
            return <li className="nav-item" />;
        });
    }

    _renderMenu() {
        const { menu } = this.state;

        return menu.map(item => {
            return (
                <li key={ menu.option } className={`nav-item menu-option ${item.active ? "active" : ""}`}>
                    <button onClick className="btn btn-primary">
                        { menu.option }
                    </button>
                </li>
            );
        });
    }

    render() {
        return (
            <div className="cmpnt-portfolio container-fluid">
                <div className="spacer-nav" />
                <ul className="nav menu"> 
                    { this._renderMenu() }
                </ul>
            </div>
        );
    }
}

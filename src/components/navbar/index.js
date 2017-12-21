import React, { Component } from "react";
import Waypoint from "react-waypoint";
import { Link, NavLink } from "react-router-dom";
import MediaQuery from "react-responsive";
import Signature from "../signature";
import Sidebar from "./sidebar";

import "./navbar.scss";

export default class Navbar extends Component {
    constructor() {
        super();

        this.state = {
            navListItems: [
                { name: "Home", route: "/" },
                { name: "Gallery", route: "/Gallery" },
                { name: "Contact", route: "/Contact" }
            ],
            transparent: false,
            sidebarOpen: false
        };

        this._renderDesktopNavListItems = this._renderDesktopNavListItems.bind(this);
        this._renderMobileNavListItems = this._renderMobileNavListItems.bind(this);
        this._openSidebarClickHandler = this._openSidebarClickHandler.bind(this);
        this._handleEnter = this._handleEnter.bind(this);
        this._handleLeave = this._handleLeave.bind(this);
    }

    _openSidebarClickHandler(event) {
        const { sidebarOpen } = this.state;
        this.setState({
            sidebarOpen: !sidebarOpen
        });
    }

    _renderDesktopNavListItems() {
        const { navListItems, Active } = this.state;

        return navListItems.map(listItem => {
            const { name, route } = listItem;

            return (
                <li key={name} className="nav-item">
                    <NavLink
                        exact={name === "Home" ? true : false}
                        className="nav-link"
                        activeClassName="active"
                        to={route}
                    >
                        {name}
                    </NavLink>
                </li>
            );
        });
    }

    _renderMobileNavListItems() {
        const { navListItems, Active } = this.state;

        return navListItems.map(listItem => {
            const { name, route } = listItem;

            return (
                <NavLink
                    exact={name === "Home" ? true : false}
                    className="sidebar-link"
                    activeClassName="active"
                    to={route}
                    key={name}
                >
                    {name}
                </NavLink>
            );
        });
    }

    _handleEnter() {
        let { transparent } = this.props;

        if (transparent) this.setState({ transparent: true });
    }

    _handleLeave() { 
        this.setState({ transparent: false });
    }

    render() {
        return (
            <div className="container-fluid cmpnt-navbar">
                <Waypoint onEnter={this._handleEnter} onLeave={this._handleLeave} />
                <div className={!this.state.transparent ? "navbar-solid" : "navbar-transparent"}>
                    <nav className="navbar navbar-expand-lg fixed-top">
                        {!this.state.transparent ? (
                            <Link className="navbar-brand animated fadeInDown" to="/">
                                <Signature />
                            </Link>
                        ) : null}

                        {/* For Large Screens (e.g. Desktops) */}
                        <MediaQuery minWidth={991}>
                            <ul className="navbar-nav ml-auto">
                                {this._renderDesktopNavListItems()}
                            </ul>
                        </MediaQuery>

                        {/* For Smaller Screens (e.g. Tablets, Phones) */}
                        <MediaQuery maxWidth={991}>
                            <button
                                className="btn-nav ml-auto"
                                onClick={this._openSidebarClickHandler}
                            >
                                <i className="fa fa-bars" />
                            </button>
                            <Sidebar isOpen={this.state.sidebarOpen}>
                                <button
                                    className="btn-close ml-auto"
                                    onClick={this._openSidebarClickHandler}
                                >
                                    <i className="fa fa-close" />
                                </button>
                                {this._renderMobileNavListItems()}
                            </Sidebar>
                        </MediaQuery>
                    </nav>
                </div>
            </div>
        );
    }
}

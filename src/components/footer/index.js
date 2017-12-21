import React, { Component } from "react";
import { Link } from "react-router-dom";
import validator from "validator";

import "./footer.scss";

export default class Footer extends Component {
    constructor() {
        super();

        this.state = { email: "", valid: false, sending: false };

        this._emailChange = this._emailChange.bind(this);
        this._onSubmit = this._onSubmit.bind(this);
    }

    _emailChange(event) {
        if (!this.state.sending) {
            const { value } = event.target;
            let valid = false;
            let email = value;

            if (validator.isEmail(email)) valid = true;

            this.setState({ email, value });
        }
    }

    _onSubmit(event) {
        event.preventDefault();

        console.log("click");
    }

    render() {
        const { email } = this.state;

        return <div className="cmpnt-footer container-fluid">
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-4 col-lg-3">
                        <h5 className="font-primary color-white font-weight-bold">
                            STAY CONNECTED
                        </h5>
                        <p className="footer-detail">
                            I am proud to invite you to join my mailing list so that we can
                            keep in touch.
                        </p>
                        <form onSubmit={this._onSubmit} className="form-footer-contact">
                            <div className="form-control">
                                <input className="form-control" id="name" type="text" placeholder="Email Address" onChange={this._emailChange} value={email} />
                            </div>
                        </form>
                        <div>
                            <Icon link="#" icon="facebook" />
                            <Icon link="#" icon="instagram" />
                            <Icon link="#" icon="linkedin" />
                            <Icon link="#" icon="twitter" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-3">
                        <h5 className="font-primary color-white font-weight-bold">
                            MISSION STATEMENT
                        </h5>
                        <p className="footer-detail">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                            tortor metus, dignissim consectetur volutpat a, volutpat id
                            risus. Maecenas bibendum suscipit leo rhoncus porttitor. Fusce
                            accumsan porta felis in elementum. Nulla gravida dolor convallis
                            mauris semper bibendum.
                        </p>
                    </div>
                    <div className="col-sm-12 col-md-1 col-lg-2 text-center">
                        <div className="directory-container">
                            <h5 className="font-primary color-white font-weight-bold">
                                DIRECTORY
                            </h5>
                            <ul className="nav flex-column directory text-left">
                                <li className="nav-item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Gallery">Gallery</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>;
    }
}

let Icon = ({ link, icon }) => {
    return (
        <span className="cmpnt-icon-footer">
            <a className="icon-link" href={link}>
                <i className={`fa fa-${icon}`} />
            </a>
        </span>
    );
};

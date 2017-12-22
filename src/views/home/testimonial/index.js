import React, { Component } from "React";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./testimonial.scss";

export default class Testimonial extends Component {
    constructor() {
        super();

        this.state = {
            testimonials: [
                {
                    url: "https://i.imgur.com/9Uj2UZp.jpg",
                    review: "You are the absolute BEST...",
                    name: "John Cena"
                },
                {
                    url: "https://i.imgur.com/z4UjPgF.jpg",
                    review: "You are the absolute BEST...",
                    name: "John Cena"
                }
            ],
            active: 0
        };

        this._renderActiveTestemonial = this._renderActiveTestemonial.bind(this);
    }

    _renderActiveTestemonial() {
        let { active, testimonials } = this.state;
        const { url, review, name } = testimonials[active];

        return (
            <CSSTransition className="carousel" key={url} timeout={5000}>
                <div className="testimonial-wrapper text-center">
                    <img src={url} alt={name} className="img-testimonial" />
                    <p className="testimonial-text">{review}</p>
                    <p className="testimonial-signature">- {name}</p>
                </div>
            </CSSTransition>
        );
    }

    render() {
        return (
            <div className="cmpnt-testimonial container">
                <div className="row align-items-center justify-content-center">
                    <TransitionGroup className="carousel">
                        {this._renderActiveTestemonial()}
                    </TransitionGroup>
                </div>
            </div>
        );
    }
}

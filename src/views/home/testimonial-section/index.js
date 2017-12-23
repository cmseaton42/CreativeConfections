import React, { Component } from "React";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./testimonial.scss";

export default class Testimonial extends Component {
    constructor() {
        super();

        this.state = {
            testimonials: [
                {
                    url:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3FGdQJFKbPH7BlNVNMS0hvfBOu9aW4I4J7imHyWXKBY3cflB1",
                    review: "I caaaan smell what you are cookin... and it's good.",
                    name: "Dewayne Johnson"
                },
                {
                    url:
                        "https://i.pinimg.com/736x/7a/f7/e8/7af7e8416db937c19c0281f9686b7d1c--yoda-pictures-old-soul.jpg",
                    review: "Master of Cakes, You Are... mmMMmmm",
                    name: "Master Yoda"
                },
                {
                    url: "https://goo.gl/32dSKt",
                    review: "Cakes so good, I could die... Can I have a hug?",
                    name: "Olaf"
                }
            ],
            active: 0
        };

        this._renderActiveTestemonial = this._renderActiveTestemonial.bind(this);
    }

    componentDidMount() {
        this._changeInterval = setInterval(() => {
            let { active, testimonials } = this.state;
            let max = testimonials.length - 1;

            active = active == max ? 0 : active + 1;

            this.setState({ active });
        }, 6000);
    }

    componentWillUnmount() {
        clearInterval(this._changeInterval);
    }

    _renderActiveTestemonial() {
        let { active, testimonials } = this.state;
        const { url, review, name } = testimonials[active];

        return (
            <CSSTransition classNames="carousel" key={url} timeout={5000}>
                <div className="col-12 text-center">
                    <div className="testimonial-wrapper texts-center">
                        <div className="img-testimonial-wrapper">
                            <img src={url} alt={name} className="img-testimonial" />
                        </div>
                        <div className="comment-wrapper">
                            <p className="testimonial-text">
                                <i className="fa fa-quote-left color-accent-2" />
                                {` ${review} `}
                                <i className="fa fa-quote-right color-accent-2" />
                            </p>
                            <p className="testimonial-signature font-cursive">{name}</p>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        );
    }

    render() {
        return (
            <div className="cmpnt-testimonial container">
                <div className="row align-items-center justify-content-center">
                    <TransitionGroup>{this._renderActiveTestemonial()}</TransitionGroup>
                </div>
            </div>
        );
    }
}

import React, {Component} from "react";
import ReactDOM from "react-dom";


class Web {
    render() {
        return (
            <>
                <div className="container">
                    <header>
                        <nav>
                            <div className="logo">BestShop</div>

                            <div className="menu">
                                <div className="hamburger"><img src="../images/icons8-menu-48.png" alt="" height="30px"
                                                                className="hamburger-icon"/>
                                    <img src="../images/iconfinder_icon-close_211652.png" alt="" height="30px"
                                         className="close-icon"/>
                                    <ul>
                                        <li><a href="#">Why us </a></li>
                                        <li><a href="#">Benefits</a></li>
                                        <li><a href="#">Prices</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                                <ul className="hidden">
                                    <li><a href="#">Why us </a></li>
                                    <li><a href="#">Benefits</a></li>
                                    <li><a href="#">Prices</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </nav>
                        <div className="banner">
                            <div className="banner_slogan">
                                <h1>Sell More!</h1>
                                <p>open shop on our platform and increase your sales</p>
                                <button>Open your shop</button>
                            </div>
                            <div className="banner_banner">
                            </div>
                        </div>
                    </header>
                </div>
                <div className="container">
                    <section className="popular">
                        <h2>The most popular sales platform in country</h2>
                        <div className="proof_popular">
                            <div className="box">
                                <div><img src="../images/Person.svg" alt=""/></div>
                                <h3>100000+</h3>
                                <p>daily entries</p>
                            </div>
                            <div className="box">
                                <div><img src="../images/Eye.svg" alt=""/></div>
                                <h3>2000000+</h3>
                                <p>seen products every day</p>
                            </div>
                            <div className="box">
                                <div><img src="../images/Catalog.svg" alt=""/></div>
                                <h3>10000+</h3>
                                <p>added post daily</p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="container">
                    <section className="advantages">
                        <div className="advantages_boxes">

                            <div className="box">
                                <div className="box_leftSide">
                                    <h3>Be always first</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, adipisci
                                        voluptatum
                                        corporis
                                        magni accusamus minima rerum enim veritatis beatae ab!</p>
                                </div>
                                <div className="box_rightSide">
                                    <div className="holder">
                                        <div className="before__mac"><img src="../images/Macbook.png" alt="macbook"/></div>
                                    </div>

                                </div>
                            </div>

                            <div className="box">
                                <div className="box_leftSide">
                                    <div className="holder">
                                        <div className="before__iphone"><img src="../images/iPhone.png" alt="iphone"/></div>
                                    </div>
                                </div>
                                <div className="box_rightSide">
                                    <h3>Your shop is where you are!</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, adipisci
                                        voluptatum
                                        corporis
                                        magni accusamus minima rerum enim veritatis beatae ab!</p>
                                </div>
                            </div>

                            <div className="box">
                                <div className="box_leftSide">
                                    <h3>Increase recognition your brand!</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, adipisci
                                        voluptatum
                                        corporis
                                        magni accusamus minima rerum enim veritatis beatae ab!</p>
                                </div>
                                <div className="box_rightSide">
                                    <div className="holder">
                                        <div className="trumpet"><img src="../images/Trumpet.png" alt="trumpet"/></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="container">
                    <section className="pricing">
                        <h2>Pricing</h2>
                        <div className="pricing_option">
                            <div className="option">
                                <h3>Basic</h3>
                                <span>$0</span>
                                <span></span>
                                <p>
                                    <ul>
                                        <li><img src="../images/Ckechmark-1.svg" alt=""/> 100 MB HDD</li>
                                        <li><img src="../images/Ckechmark-1.svg" alt=""/> 1 Subdomain</li>
                                        <li><img src="../images/Ckechmark-1.svg" alt=""/> 2 E-mails</li>
                                        <li><img src="../images/Close.svg" alt=""/> Two years License</li>
                                        <li><img src="../images/Close.svg" alt=""/> Full Support</li>
                                    </ul>
                                </p>
                                <button>Begin</button>
                            </div>

                            <div className="option">
                                <h3>Professional</h3>
                                <span>$25</span>
                                <span>Limited offer</span>
                                <p>
                                    <ul>
                                        <li><img src="../images/Ckechmark-1.svg" alt=""/> 500 MB HDD</li>
                                        <li><img src="../images/Ckechmark-1.svg" alt=""/> 1 Subdomain</li>
                                        <li><img src="../images/Ckechmark-1.svg" alt=""/> 2 E-mails</li>
                                        <li><img src="../images/Ckechmark-1.svg" alt=""/> Two years License</li>
                                        <li><img src="../images/Close.svg" alt=""/> Full Support</li>
                                    </ul>
                                </p>
                                <button>Begin</button>
                            </div>

                            <div className="option">
                                <h3>Premium</h3>
                                <span>$60</span>
                                <span>Limited offer</span>
                                <p>
                                    <ul>
                                        <li><img src="../images/Ckechmark-1.svg" alt=""/> 2 GB HDD</li>
                                        <li><img src="../images/Ckechmark-1.svg" alt=""/> 1 Subdomain</li>
                                        <li><img src="../images/Ckechmark-1.svg" alt=""/> 2 E-mails</li>
                                        <li><img src="../images/Ckechmark-1.svg" alt=""/> Two years License</li>
                                        <li><img src="../images/Ckechmark-1.svg" alt=""/> Full Support</li>
                                    </ul>
                                </p>
                                <button>Begin</button>
                            </div>
                        </div>
                    </section>
                </div>
                <section className="calc">
                    <h2>Calculate how much you’ll pay</h2>

                    <div className="calc__columns">
                        <form className="calc__form">
                            <div className="calc__input">
                                <input type="number" className="form__input" id="products" min="1" step="1"
                                       placeholder="Products quantity"/>
                            </div>
                            <div className="calc__input">
                                <input type="number" className="form__input" id="orders" min="1" step="1"
                                       placeholder="Estimated orders in month"/>
                            </div>
                            <div className="calc__select" id="package" data-value="">
                                <div className="select__input">
                                    Choose packages
                                </div>

                                <ul className="select__dropdown">
                                    <li data-value="basic">Basic</li>
                                    <li data-value="professional">Professional</li>
                                    <li data-value="premium">Premium</li>
                                </ul>
                            </div>
                            <label className="form__checkbox">
                                <input type="checkbox" id="accounting"/>
                                <span className="checkbox"></span>
                                <p className="consent__text">Accounting</p>
                            </label>
                            <label className="form__checkbox">
                                <input type="checkbox" id="terminal"/>
                                <span className="checkbox"></span>
                                <p className="consent__text">Rental of a payment terminal</p>
                            </label>
                        </form>

                        <div className="calc__summary">
                            <ul>
                                <li className="list__item" data-id="products">
                                    <span className="item__type">Products</span>
                                    <span className="item__calc">20 * $0.5</span>
                                    <span className="item__price">$10</span>
                                </li>
                                <li className="list__item" data-id="orders">
                                    <span className="item__type">Orders</span>
                                    <span className="item__calc">20 * $0.5</span>
                                    <span className="item__price">$10</span>
                                </li>
                                <li className="list__item" data-id="package">
                                    <span className="item__type">Package</span>
                                    <span className="item__calc">Premium</span>
                                    <span className="item__price">$10</span>
                                </li>
                                <li className="list__item" data-id="accounting">
                                    <span className="item__type">Accounting</span>
                                    <span className="item__price">$10</span>
                                </li>
                                <li className="list__item" data-id="terminal">
                                    <span className="item__type">Terminal</span>
                                    <span className="item__price">$10</span>
                                </li>
                            </ul>
                            <div className="summary__total" id="total-price">
                                <span>Total</span>
                                <span className="total__price">$700</span>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <section className="contact">
                        <div className="contact_leftside">
                            <h2>Any questions?</h2>
                            <p>leave your email address or call us!</p>
                            <ul>
                                <li><img src="../images/Mail Icon.svg" alt=""/>info@bestshop.xyz</li>
                                <li><img src="../images/Phone Icon.svg" alt=""/>123 456 789</li>
                            </ul>
                        </div>
                        <div className="contact_rightside">
                            <label htmlFor="name">
                                Name
                                <input type="text"/>
                            </label>
                            <label htmlFor="email">
                                Email
                                <input type="text"/>
                            </label>
                            <label id="agree" className="form_agree">
                                <input type="checkbox" name="agree" id="agree"/>
                                    <p>I hereby give consent for my personal data included in my application to be
                                        processed for
                                        the
                                        purposes of the recruitment process under the European Parliament’s and Council
                                        of the
                                        European
                                        Union Regulation on the Protection of Natural Persons as of 27 April 2016, with
                                        regard
                                        to the
                                        processing of personal data and on the free movement of such data, and repealing
                                        Directive 95/46/EC
                                        (Data Protection Directive)</p>
                            </label>
                            <button>Send</button>
                        </div>
                    </section>
                </div>
                <footer>
                    <div className="container">
                        <div className="footer_left">
                            <h3>BestShop</h3>
                            <p>© 2019 BestShop LTD, all rights Reserved</p>
                        </div>
                        <div className="footer_right">
                            <a href="#"><img src="../images/Facebook.svg" alt=""/></a>
                            <a href="#"><img src="../images/Twitter.svg" alt=""/></a>
                        </div>
                    </div>
                </footer>
            </>
    )
    }
    }

ReactDOM.render(<Web/>,document.getElementById("app"));
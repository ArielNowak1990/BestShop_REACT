export class Container6 {
    render() {
        return(
            <>
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
            </>
        )
    }
}

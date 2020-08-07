export class Container1 {
    render() {
        return(
            <>
                <div className="container">
                    <header>
                        <nav>
                            <div className="logo">BestShop</div>

                            <div className="menu">
                                <div className="hamburger">
                                    <img src="../images/icons8-menu-48.png" alt="" height="30px"
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
            </>
        )
    }
    }

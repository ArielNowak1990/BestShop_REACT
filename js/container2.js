export class Container2 {
    render() {
        return(
            <>
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
            </>
        )
    }
}
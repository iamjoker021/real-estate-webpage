const Contact = () => {
    return (
        <section className="contact padding text-center">
        <div>
        <h2>Fill your contact here</h2>
        <p>Our agent will each out to understand your specific needs</p>
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="input-field">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
            </div>
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
            </div>
            <div className="input-field">
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" name="phone" />
            </div>
            <fieldset>
                <legend>Services</legend>
                <label><input type="checkbox" name="buy-service" id="buy-service" />Buy</label>
                <label><input type="checkbox" name="sell-service" id="sell-service" />Sell</label>
                <label><input type="checkbox" name="rent-service" id="rent-service" />Rent</label>
            </fieldset>
            <button type="submit">Submit</button>
        </form>
        </div>
        </section>
    )
}

export default Contact;
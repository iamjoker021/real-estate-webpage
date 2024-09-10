const Service = () => {

    const serviceContent = [
        {title: 'Buy', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias commodi dolorum aliquid accusantium laboriosam deserunt dignissimos reiciendis, impedit, nesciunt pariatur tenetur magni placeat ratione maxime harum earum? Consequuntur, fugiat animi!', img: 'https://c.housingcdn.com/demand/s/client/common/assets/pune.ece8bdbd.jpg'},
        {title: 'Sell', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias commodi dolorum aliquid accusantium laboriosam deserunt dignissimos reiciendis, impedit, nesciunt pariatur tenetur magni placeat ratione maxime harum earum? Consequuntur, fugiat animi!', img: 'https://c.housingcdn.com/demand/s/client/common/assets/chennai.bd9f62cc.jpg'},
        {title: 'Rent', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias commodi dolorum aliquid accusantium laboriosam deserunt dignissimos reiciendis, impedit, nesciunt pariatur tenetur magni placeat ratione maxime harum earum? Consequuntur, fugiat animi!', img: 'https://c.housingcdn.com/demand/s/client/common/assets/pune.ece8bdbd.jpg'},
    ]

    const ServiceCard = ({title, content, img}) => {
        return (
            <div className="card">
                <h3 className="text-center">{ title }</h3>
                <p>{ content }</p>
                <img src={img} alt="image-real-estate" />
            </div>
        )
    }

    return (
        <section id="services" className="services padding scroll-margin" data-aos="zoom-in-down">
            <h2>What we offer?</h2>
            <p>A one stop solution for all you real-estate needs, Wanna buy, rent or sell click the below for excisting offers</p>
            <div className="cards">
                {serviceContent.map((service, index) => <ServiceCard key={index} title={service.title} content={service.content} img={service.img} />)}
            </div>
        </section>
    )
}

export default Service;
import Card from "../Card";

export default function WhoWeAre() {
    return (
        <section className="container mt-[50px] sm:mt-[100px]">
            <h1 className="text-[35px] sm:text-[42px] lg:text-[50px] font-semibold text-center">
                Who We Are
            </h1>
            <p className="mt-3 max-w-[1200px] text-center mx-auto ">
                Welcome to TMX Global, your premier partner in freight, imports, and
                exports. With decades of experience, we pride ourselves on providing
                efficient, reliable, and cost-effective logistics solutions tailored to
                meet the unique needs of our clients. Our mission is to simplify
                international trade and help businesses expand their reach globally. At
                TMX Global, we are committed to delivering excellence and ensuring your
                goods reach their destination safely and on time.
            </p>

            <div className="container2 mx-auto mt-10">
                <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 justify-center">
                    <Card
                        imgSrc="/Image1.png"
                        title="Freight Forwarding"
                        description="This is where the magic happens. We build prototypes, wireframes, and the architecture to bring your product to life."
                    />
                    <Card
                        imgSrc="/Image2.png"
                        title="Air Cargo"
                        description="Fast and secure air cargo services to meet your tight deadlines."
                    />
                    <Card
                        imgSrc="/Image3.png"
                        title="Sea Cargo"
                        description="Reliable sea cargo solutions for large shipments."
                    />
                    <Card
                        imgSrc="/Image4.png"
                        title="Warehousing & Supply Chain Management"
                        description="Comprehensive warehousing and supply chain management services."
                    />
                    <Card
                        imgSrc="/Image5.png"
                        title="Land Freight"
                        description="Efficient and cost-effective land freight services."
                    />
                    <Card
                        imgSrc="/Image6.png"
                        title="Consultancy"
                        description="Affordable consultation and advice."
                    />
                </div>
            </div>
        </section>
    );
}

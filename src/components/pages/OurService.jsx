import ServiceCard from "../ServiceCard";

export default function OurService() {
    return (
        <section id="services" className="mt-[50px] sm:mt-[100px] bg-purple text-white py-[50px] sm:py-[100px]">
            <div className="container ">
                <div>
                    <h3 className="text-[35px] sm:text-[42px] lg:text-[50px] font-semibold text-center">
                        Our Services
                    </h3>
                    <p className="mt-[10px] text-center xl:w-8/12 2xl:w-2/5 mx-auto">
                        Where Every Journey Finds Its Safe Harbor: Trust Our Cargo Services
                        for Seamless Shipping Solutions Across the Globe.
                    </p>
                </div>
                <div className="mt-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-[20px]">
                        <ServiceCard
                            imgSrc="/os1.png"
                            title="Freight Forwarding"
                            description="We offer comprehensive freight forwarding services by land, sea, and air. Our team of experts will handle all aspects of transportation, from pickup to delivery, ensuring a smooth and efficient process."
                        />
                        <ServiceCard
                            imgSrc="/os2.png"
                            title="Customs Clearance"
                            description="Navigating customs can be complex. Our experienced customs brokers will manage all documentation and regulatory requirements, ensuring your shipments clear customs quickly and without hassle."
                        />
                        <ServiceCard
                            imgSrc="/os3.png"
                            title="Warehousing & Distribution"
                            description="We provide secure warehousing solutions and efficient distribution services. Our state-of-the-art facilities and network of distribution centers enable us to store and deliver your goods with precision."
                        />
                        <ServiceCard
                            imgSrc="/os4.png"
                            title="Import & Export Consulting"
                            description="Our consulting services are designed to help you navigate the complexities of international trade. We provide expert advice on import/export regulations, market entry strategies, and supply chain optimization."
                        />
                        <ServiceCard
                            imgSrc="/os5.png"
                            title="Package Delivery"
                            description="From small parcels to large shipments, we offer reliable and timely package delivery services. Our extensive network ensures that your packages reach their destination promptly and securely."
                        />
                        <ServiceCard
                            imgSrc="/os6.png"
                            title="Supply Chain Management"
                            description="We provide end-to-end supply chain management solutions. Our services include procurement, logistics planning, and inventory management, ensuring an optimized and seamless supply chain process."
                        />
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <div className="flex gap-4 justify-center">
                    <button
                        type="button"
                        className="border  h-[45px] px-[18px] rounded-full"
                    >
                        Join As Freighter
                    </button>
                    <button
                        type="button"
                        className="bg-orange text-white h-[45px] px-[18px] rounded-full"
                    >
                        Join As Affiliate
                    </button>
                </div>
            </div>
        </section>
    );
}

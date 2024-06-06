import GloabCard from "../GloabCard";

export default function OurGlobalReach() {
    return (
        <section className="container pt-[50px] sm:pt-[100px]">
            <h1 className="text-[35px] sm:text-[42px] lg:text-[50px] font-semibold text-center">
                Our Global Reach
            </h1>
            <p className="mt-3 max-w-[1200px] text-center mx-auto ">
                TMX Global boasts a well-established network that spans across
                continents. We offer seamless freight forwarding, air cargo, sea cargo,
                warehousing, and land freight services to ensure your business
                operations run smoothly on a global scale. Our team of logistics experts
                is well-versed in the intricacies of international trade, allowing us to
                navigate customs regulations and documentation efficiently.
            </p>

            <div className="container2 mx-auto mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 justify-center">
                    <GloabCard
                        imgSrc="/globe1.png"
                        title="Asia"
                        description="Seamless logistics solutions across the vast Asian continent."
                    />
                    <GloabCard
                        imgSrc="/globe2.png"
                        title="Africa"
                        description="Efficient freight forwarding throughout Africa."
                    />
                    <GloabCard
                        imgSrc="/globe3.png"
                        title="North America"
                        description="Streamlined logistics for your North American operations."
                    />
                    <GloabCard
                        imgSrc="/globe4.png"
                        title="South America"
                        description="Reliable logistics services for South American markets."
                    />
                    <GloabCard
                        imgSrc="/globe5.png"
                        title="Europe"
                        description="Expert logistics solutions for European businesses."
                    />
                    <GloabCard
                        imgSrc="/globe6.png"
                        title="Australia"
                        description="Comprehensive logistics services for Australia and Oceania."
                    />
                </div>
            </div>
            <div className="mt-10 flex justify-center">
                <button
                    type="button"
                    className="border  h-[45px] px-[18px] rounded-full"
                >
                    Learn More About Our Global Network
                </button>
            </div>
        </section>
    );
}

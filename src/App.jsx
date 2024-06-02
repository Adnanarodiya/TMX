import Card from "./components/Card";
import Header from "./components/Header";
import ServiceCard from "./components/ServiceCard";
import GloabCard from "./components/GloabCard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg-purple  text-center text-white py-3 text-[13px] sm:text-[15px] min-h-[50px]">
        <div className="container">
          <p>
            Have a question or need assistance with your logistics needs? Our
            team is here to help. Contact us today for a personalized solution
            tailored to your business.
          </p>
        </div>
      </div>

      <div className="bg-custom-gradient">
        <Header />
        <section className="container">
          <div className="relative w-full">
            <img className="object-cover" src="/image.png" alt="" />
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-[rgba(104,50,138,0.80)]"></div>
          </div>
        </section>
      </div>

      <section className="container mt-[50px] sm:mt-[100px]">
        <h1 className="text-[35px] sm:text-[42px] lg:text-[50px] font-semibold text-center">
          Who We Are
        </h1>
        <p className="mt-3 max-w-[1200px] text-center mx-auto ">
          Welcome to TMX Global, your premier partner in freight, imports, and
          exports. With decades of experience, we pride ourselves on providing
          efficient, reliable, and cost-effective logistics solutions tailored
          to meet the unique needs of our clients. Our mission is to simplify
          international trade and help businesses expand their reach globally.
          At TMX Global, we are committed to delivering excellence and ensuring
          your goods reach their destination safely and on time.
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

      <section className="mt-[50px] sm:mt-[100px] bg-purple text-white py-[50px] sm:py-[100px]">
        <div className="container ">
          <div>
            <h3 className="text-[35px] sm:text-[42px] lg:text-[50px] font-semibold text-center">
              Our Services
            </h3>
            <p className="mt-[10px] text-center xl:w-8/12 2xl:w-2/5 mx-auto">
              Where Every Journey Finds Its Safe Harbor: Trust Our Cargo
              Services for Seamless Shipping Solutions Across the Globe.
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

      <section className="container py-[50px] sm:py-[100px]">
        <h1 className="text-[35px] sm:text-[42px] lg:text-[50px] font-semibold text-center">
          Our Global Reach
        </h1>
        <p className="mt-3 max-w-[1200px] text-center mx-auto ">
          TMX Global boasts a well-established network that spans across
          continents. We offer seamless freight forwarding, air cargo, sea
          cargo, warehousing, and land freight services to ensure your business
          operations run smoothly on a global scale. Our team of logistics
          experts is well-versed in the intricacies of international trade,
          allowing us to navigate customs regulations and documentation
          efficiently.
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

      <section className="container">
        <div className="bg-purple text-white py-[50px] sm:py-[100px]">
          <h2 className="text-[35px] sm:text-[42px] lg:text-[50px] font-semibold text-center">
            Get paid Anytime Anywhere
          </h2>
          <div className="flex  justify-center">
            <button
              type="button"
              className="border mt-5  h-[45px] px-[18px] rounded-full"
            >
              Join Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <div className="bg-purple text-center min-h-[50px] text-white py-3">
        © 2024 TMX Global All rights reserved
      </div>
    </>
  );
}

export default App;

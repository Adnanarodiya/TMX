import Header from "../Header";

export default function Hero() {
    return (
        <div id="home" className="bg-custom-gradient">
            <Header />
            <section className="container">
                <div className="relative w-full">
                    <img className="object-cover" src="/image.png" alt="" />
                    <div className="absolute top-0 right-0 bottom-0 left-0 bg-[rgba(104,50,138,0.80)]"></div>
                </div>
            </section>
        </div>
    );
}

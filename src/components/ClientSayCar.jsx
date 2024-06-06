import { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { ClientSay } from "./ClientSay";

export default function ClientSayCar() {
    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: "1124px",
            numVisible: 2,
            numScroll: 1,
        },
        {
            breakpoint: "1123px",
            numVisible: 2,
            numScroll: 1,
        },
        {
            breakpoint: "767px",
            numVisible: 2,
            numScroll: 1,
        },
        {
            breakpoint: "575px",
            numVisible: 1,
            numScroll: 1,
        },
    ];

    useEffect(() => {
        ClientSay.GetClientSay().then((data) => setProducts(data.slice(0, 9)));
    }, []);

    const ClientTemp = (say) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3 bg-white ">
                <div className="bg-gray-100 border rounded-md p-3">
                    <img
                        src={`${say.image}`}
                        alt={say.name}
                        className="h-[80px] sm:h-full mx-auto"
                    />
                </div>
                <div>
                    <h4 className="mt-[10px] text-[25px] sm:text-[30px] font-semibold text-black text-center ">
                        {say.name}
                    </h4>
                    <p className="pr-1 mt-[10px] text-base text-gray-600 text-center ">
                        {say.disc}
                    </p>
                </div>
            </div>
        );
    };
    return (
        <div className="card">
            <Carousel
                value={products}
                numVisible={3}
                responsiveOptions={responsiveOptions}
                className="custom-carousel"
                circular
                autoplayInterval={3000}
                itemTemplate={ClientTemp}
            />
        </div>
    );
}

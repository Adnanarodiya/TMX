import ClientSayCar from "../ClientSayCar";

export default function ClientsSay() {
    return (
        <section className="mt-[50px] sm:mt-[100px] bg-purple text-white py-[50px] sm:py-[100px]">
            <div className="container ">
                <h3 className="text-[35px] sm:text-[42px] lg:text-[50px] font-semibold text-center">
                    What Our Clients Say
                </h3>

                <div className="mt-10">
                    <ClientSayCar />
                </div>
            </div>
        </section>
    );
}

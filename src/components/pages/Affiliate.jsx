import AffiliateCard from "../AffiliateCard";

export default function Affiliate() {
    return (
        <section id="affiliate-program" className=" relative py-16 mx-3  mt-[50px] sm:mt-[100px]">
            <div className="absolute inset-0">
                <div className="w-full h-full bg-cover bg-fixed bg-[url('/Affiliate-Program.png')]">
                    <div className="absolute inset-0 bg-[#58427C] opacity-80"></div>
                </div>
            </div>
            <div className="relative z-0 container mx-auto px-4">
                <h1 className="text-[35px] sm:text-[42px] lg:text-[50px] font-semibold text-center text-white">
                    Affiliate Program
                </h1>
                <p className="mt-3 text-center mx-auto text-white">
                    Join our affiliate program and get paid
                </p>

                <div className="grid grid-cols-1 mx-6 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                    <AffiliateCard
                        imgSrc="/commissions.svg"
                        title="Earn Commissions"
                        description="Get commissions for every client you bring."
                    />
                    <AffiliateCard
                        imgSrc="/network.svg"
                        title="Expand Network"
                        description="Connect with a larger network of potential clients and partners."
                    />
                    <AffiliateCard
                        imgSrc="partnerships.svg"
                        title="Exclusive Partnerships"
                        description="Benefit from exclusive partnership opportunities."
                    />
                    <AffiliateCard
                        imgSrc="/opportunities.svg"
                        title="Growth Opportunities"
                        description="Access tools and resources to help your business grow."
                    />
                </div>

                <div className="mt-20">
                    <h4 className="text-white text-center text-2xl md:text-4xl mb-4 ">
                        Get paid
                        <span className="text-red-200"> anytime </span>
                        anywhere
                    </h4>
                    <div className="flex justify-center">

                        <button type="button" className="btn bg-orange text-white h-[45px] px-[18px] rounded-full  hover:bg-red-700 transition" onClick={() => document.getElementById('open').showModal()}> Join Now</button>
                        <dialog id="open" className="modal p-4 rounded-xl max-w-[600px]">
                            <div className="modal-box">
                                <h3 className="font-semibold text-center text-2xl ">Important Information</h3>
                                <p className="py-4 text-gray-600">For approximates, press cancel and use our AI tool. To proceed for exact quotations from our Agents, please make sure you have the following information ready for us to better serve you:</p>
                                <div className="p-2">
                                    <ul className="list-disc px-8">
                                        <li>Product name</li>
                                        <li>Price of product</li>
                                        <li>Invoice from supplier</li>
                                        <li>Package list</li>
                                        <li>Weight</li>
                                        <li>Physical origin and destination</li>
                                    </ul>
                                </div>
                                <div className="modal-action">
                                    <form method="dialog" >
                                        <div className="mx-4 mt-6 flex justify-between">

                                            <button className="btn bg-red-600 text-white h-[45px] px-[18px] rounded-full  hover:bg-red-700 duration-300 transition">Close</button>
                                            <button className="btn bg-black text-white h-[45px] px-[18px] rounded-full  hover:opacity-80 duration-300 transition">
                                                <a target="_Blank" href="https://docs.google.com/forms/d/e/1FAIpQLSffI_RaERpD_FLeZ7fCpCJnyqHHUk6MUP6Uv7taesNKpaB8lg/viewform">Proceed</a>
                                            </button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>

            </div>
        </section>
    );
}

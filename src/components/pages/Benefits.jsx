/* eslint-disable react/no-unescaped-entities */
import BenefitsCard from "../BenefitsCard";

export default function Benefits() {
    return (
        <section id="membership" className="container mt-[50px] sm:mt-[100px]">
            <h1 className="text-[35px] sm:text-[42px] lg:text-[50px] font-semibold text-center">
                Membership and Benefits
            </h1>
            <p className="mt-3 max-w-[1200px] text-center mx-auto ">
                Welcome to our exclusive membership program. By joining, you'll gain
                access to a host of benefits designed to help you grow and succeed. Our
                program is tailored to provide support, resources, and opportunities
                that will enhance your business and personal growth.
            </p>

            <div className="container2 mx-auto mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 justify-center">
                    <BenefitsCard
                        imgSrc="/referral.svg"
                        title="Work Referrals"
                        description="Receive referrals and connect with potential clients and partners."
                    />
                    <BenefitsCard
                        imgSrc="/events.svg"
                        title="Exclusive Events"
                        description="Access to members-only events, workshops, and networking opportunities."
                    />
                    <BenefitsCard
                        imgSrc="/cooperation.svg"
                        title="Collaboration and Cooperation"
                        description="Collaborate with industry experts and fellow members for mutual growth."
                    />
                    <BenefitsCard
                        imgSrc="/marketing.svg"
                        title="Free Marketing"
                        description="Benefit from free marketing and promotional support."
                    />
                    <BenefitsCard
                        imgSrc="/alerts.svg"
                        title="Information Sharing and Important Alerts"
                        description="Stay informed with the latest industry news and alerts."
                    />
                    <BenefitsCard
                        imgSrc="/management.svg"
                        title="Social Media and Page Management"
                        description="Get support for managing your social media presence and web pages."
                    />
                </div>
            </div>
            <div className="mt-10 flex justify-center">

                <button type="button" className="btn border text-red-500  h-[45px] px-[18px] rounded-full" onClick={() => document.getElementById('member').showModal()}>  Become a member</button>
                <dialog id="member" className="modal p-4 rounded-xl max-w-[600px]">
                    <div className="modal-box">
                        <h3 className="font-semibold text-center text-2xl ">Important Information</h3>
                        <p className="py-4 text-gray-600">If you have filled the freighter form, you can skip this one.if you have'nt, you need to provide the following details. If you do not have them kindly :</p>
                        <div className="p-2">
                            <ul className="list-disc px-8">
                                <li>Company name/licensed name</li>
                                <li>Email</li>
                                <li>alternative Email</li>
                                <li>Phone Number</li>
                                <li>Country of residence</li>
                                <li>Town of residence</li>
                                <li>Zip code</li>
                                <li>Atleast two references</li>
                                <li>License / permit</li>
                            </ul>
                        </div>
                        <div className="modal-action">
                            <form method="dialog" >
                                <div className="mx-4 mt-6 flex justify-between">

                                    <button className="btn bg-red-600 text-white h-[45px] px-[18px] rounded-full  hover:bg-red-700 duration-300 transition">Close</button>
                                    <button className="btn bg-black text-white h-[45px] px-[18px] rounded-full  hover:opacity-80 duration-300 transition">
                                        <a target="_Blank" href="https://docs.google.com/forms/d/e/1FAIpQLScJWYMxvciiDb_yqW03t99YdoSMMWSCDaJgVwDAfzfJuN6DZA/viewform">Proceed</a>
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </section>
    );
}

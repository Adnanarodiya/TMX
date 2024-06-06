/* eslint-disable react/no-unescaped-entities */
import BenefitsCard from "../BenefitsCard";

export default function Benefits() {
    return (
        <section className="container mt-[50px] sm:mt-[100px]">
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
                <button
                    type="button"
                    className="border text-red-500  h-[45px] px-[18px] rounded-full"
                >
                    Become a member
                </button>
            </div>
        </section>
    );
}

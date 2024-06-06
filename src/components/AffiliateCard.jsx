/* eslint-disable react/prop-types */
export default function AffiliateCard({ imgSrc, title, description }) {
    return (
        <div className="bg-white p-4">
            <div>
                <img className="mx-auto" src={imgSrc} alt="" />
            </div>
            <h4 className="mt-[10px] text-[20px] sm:text-[25px] font-medium text-black text-center ">
                {title}
            </h4>
            <p className="pr-1 mt-[10px] text-center text-base text-gray-600">
                {description}
            </p>
        </div>
    );
}

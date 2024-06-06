/* eslint-disable react/prop-types */

export default function AgentCard({ logo, name, country, phone, website }) {
    return (
        <div className="bg-white w-full p-[20px] sm:p-10 min-h-[250px] sm:min-h-[316px] border rounded-xl">
            <div>
                <div className="flex justify-center">
                    <img className="h-[80px] sm:h-full" src={logo} alt="" />
                </div>
                <h2 className="mt-[10px] text-[25px] sm:text-[30px] text-center font-semibold">
                    {name}
                </h2>
                <p className="pr-1 mt-[10px] text-base text-center text-red-500 font-semibold">
                    {country}
                </p>
                <p className="pr-1 mt-[10px] text-base text-gray-600 text-center">
                    {phone}
                </p>
                <p className="pr-1 mt-[10px] text-base text-blue-500 underline text-center">
                    {website}
                </p>
            </div>
        </div>

    )
}

import AgentCard from "../AgentCard";
export default function Agents() {
    return (
        <div className="bg-white pb-20">
            <div className=" flex justify-center py-8">
                <button
                    type="button"
                    className="btn border hover:bg-gray-100 duration-300 h-[45px] px-[18px] rounded-full"
                    onClick={() => document.getElementById("freighter").showModal()}
                >
                    <a
                        target="_Blank"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSci7YVIcB_KecOi85wZv4MCBN0lupA01mIPg_W0z-QzX06EwQ/viewform"
                    >
                        Join As An Agent
                    </a>
                </button>
            </div>
            <div className="container2 mx-auto mt-10">
                <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 justify-center">

                    <AgentCard
                        logo="./logo.png"
                        name="tmx global"
                        country="Kenya"
                        phone="+254726771499"
                        website="https://www.tmxglobal.com/"
                    />
                </div>
            </div>
        </div>
    );
}

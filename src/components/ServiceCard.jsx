/* eslint-disable react/prop-types */

export default function ServiceCard({ imgSrc, title, description }) {
  return (
    <div className="bg-white w-full p-[20px]  sm:pt-[50px] sm:pr-[60px] sm:pb-[76px] sm:pl-[50px] ">
      <div>
        <img className="h-[80px] sm:h-full" src={imgSrc} alt={title} />
        <h2 className="mt-[10px] text-[25px] sm:text-[30px] font-semibold text-black">
          {title}
        </h2>
        <p className="pr-1 mt-[10px] text-base text-gray-600 ">{description}</p>
      </div>
    </div>
  );
}

/* eslint-disable react/prop-types */

export default function Card({ imgSrc, title, description }) {
  return (
    <div className="bg-white w-full p-[20px] sm:p-10 min-h-[250px] sm:min-h-[316px]">
      <div>
        <img className="h-[80px] sm:h-full" src={imgSrc} alt="" />
        <h2 className="mt-[10px] text-[25px] sm:text-[30px] font-semibold">
          {title}
        </h2>
        <p className="pr-1 mt-[10px] text-base text-gray-600">{description}</p>
      </div>
    </div>
  );
}

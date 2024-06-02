import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="container">
      <nav className="bg-white">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img className="w-[70px] sm:w-[90px]" src="/logo.png" alt="Logo" />
          </a>
          <div className="flex xl:order-2 space-x-3 xl:space-x-0 rtl:space-x-reverse">
            <div className="sm:flex gap-4 sm:mt-[5px] xl:mt-[20px] hidden">
              <button
                type="button"
                className="border h-[45px] px-[18px] rounded-full leading-[15px]"
              >
                Agents
              </button>
              <button
                type="button"
                className="bg-purple text-white h-[45px] px-[18px] rounded-full leading-[15px]"
              >
                Sign in
              </button>
            </div>
            <button
              type="button"
              className="inline-flex items-center p-2 sm:mt-[5px] md:mt-[10px] xl:mt-[20px] mt-0 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              onClick={handleNavToggle}
              aria-controls="navbar-sticky"
              aria-expanded={isNavOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full xl:flex xl:w-auto xl:order-1 ${
              isNavOpen ? "flex" : "hidden"
            }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 xl:p-0 sm:mt-[5px] xl:mt-[20px] font-medium rtl:space-x-reverse xl:flex-row gap-10 mt-[20px]">
              <li className="text-[17px]">
                <a href="#">Home</a>
              </li>
              <li className="text-[17px]">
                <a href="#">About</a>
              </li>
              <div className="flex gap-2 items-center">
                <li className="text-[17px]">
                  <a href="#">Membership</a>
                </li>
                <IoIosArrowDown />
              </div>
              <li className="text-[17px]">
                <a href="#">Services</a>
              </li>
              <li className="text-[17px]">
                <a href="#">Location</a>
              </li>
              <li className="text-[17px]">
                <a href="#">Contact</a>
              </li>
              <li className="text-[17px]">
                <a href="#">Affiliate Program</a>
              </li>
              {/* Add the buttons here for mobile view */}
              <li className="text-[17px] xl:hidden">
                <button
                  type="button"
                  className="border h-[45px] px-[18px] rounded-full leading-[15px]"
                >
                  Agents
                </button>
              </li>
              <li className="text-[17px] xl:hidden">
                <button
                  type="button"
                  className="bg-purple text-white h-[45px] px-[18px] rounded-full leading-[15px]"
                >
                  Sign in
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

import { IoIosArrowDown } from "react-icons/io";

export default function Header() {
  return (
    <div className="container">
      {/* <nav className="py-[20px] flex justify-between items-center container xl:no ">
        <div>
        </div>
        <div className="">
          <ul className="flex justify-between gap-10 mt-[20px] ml-[60px]">
           
          </ul>
        </div>
        
      </nav> */}
      <nav className="bg-white    ">
  <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
  <a className="flex items-center space-x-3 rtl:space-x-reverse">
  <img className="w-[70px] sm:w-[90px]" src="/logo.png" alt="" />

  </a>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
  <div className="sm:flex gap-4 sm:mt-[5px] xl:mt-[20px] hidden ">
          <button type="button" className="border  h-[45px] px-[18px] rounded-full leading-[15px]">
            Agents
          </button>
          <button
            type="button"
            className="bg-purple text-white h-[45px] h- px-[18px] rounded-full leading-[15px]"
          >
            Sign in
          </button>
        </div>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 sm:mt-[5px] xl:mt-[20px] mt-0 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full xl:flex xl:w-auto xl:order-1" id="navbar-sticky" >
    <ul className="flex flex-col p-4 md:p-0 sm:mt-[5px] xl:mt-[20px]  font-medium rtl:space-x-reverse md:flex-row md:mt-0 gap-10 mt-[20px]">
    <li className="text-[17px]">Home</li>
            <li className="text-[17px]">About</li>
            <div className="flex gap-2 items-center">
              <li className="text-[17px]">Membership</li>
              <IoIosArrowDown />
            </div>
            <li className="text-[17px]">Services</li>
            <li className="text-[17px]">Location</li>
            <li className="text-[17px]">Contact Us</li>
            <li className="text-[17px]">Affiliate Program</li>
    </ul>
    
  </div>
</div>
</nav>
    </div>
  )
}

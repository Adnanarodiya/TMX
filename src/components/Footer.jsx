import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="container  py-[50px] sm:py-[100px]">
        <div className="flex flex-col sm:flex-row flex-wrap gap-[30px] justify-between">
          <div className="sm:w-[49%] lg:w-auto">
          <h2 className="text-[35px] sm:text-[42px] lg:text-[50px] font-semibold  ">
          Get in Touch
          </h2>
          <p className="max-w-[530px] mt-[10px] text-[17px]">
          Have a question or need assistance with your logistics needs? Our team is here to help. Contact us today for a personalized solution tailored to your business.
          </p>
          </div>
          <div className="sm:w-[49%] lg:w-auto">
            <h6 className="text-xl font-normal">Contact Information</h6>
            <div className="flex items-center gap-[10px] mt-[10px]">
              <img className="bg-purple px-[10px] py-[11px] rounded-full" src="/call.png" alt="" />
              <p className="text-[17px]">+254722359463 / +254726771499</p>
            </div>
            <div className="flex items-center gap-[10px] mt-[10px]">
              <img className="bg-purple px-[10px] py-[11px] rounded-full" src="/sms.png" alt="" />
              <p className="text-[17px]">info@tmxglobal.com</p>
            </div>
            <div className="flex items-center gap-[10px] mt-[10px]">
              <img className="bg-purple px-[10px] py-[11px] rounded-full" src="/location.png" alt="" />
              <p className="text-[17px]">View Park Towers, Floor 9, Wing A</p>
            </div>
          </div>
          <div className="w-[30%] xl:w-auto">
            <h6 className="text-xl font-normal">Agents</h6>
            
            <p className="mt-[10px] text-[17px]">
            Africa
            </p>
            <p className="mt-[10px] text-[17px]">
            Asia
            </p>
            <p className="mt-[10px] text-[17px]">
            Europe
            </p>
            <p className="mt-[10px] text-[17px]">
            America
            </p>
            
            
          </div>
          <div>
            <h6 className="text-xl font-normal">Get a Quote</h6>
            
            <button type="button" className="border mt-[10px]  py-[15px] px-[18px] rounded-full">
            Instant Pricing/Rates
          </button>
            
            
          </div>
          <div className="mr-[88px]">
            <h6 className="text-xl font-normal">Get a Quote</h6>
            
            <div className="flex gap-[28px] mt-[10px]">
            <FaFacebook />
            <FaXTwitter />
            <FaInstagram />
            <FaYoutube />



            </div>
            
            
          </div>
        </div>
      </footer>
  )
}

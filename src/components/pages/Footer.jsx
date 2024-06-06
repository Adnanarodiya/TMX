import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="container  py-[50px] sm:py-[100px]">
      <div className="flex flex-col sm:flex-row flex-wrap gap-[30px] justify-between">
        <div className="sm:w-[49%] lg:w-auto">
          <h2 className="text-[35px] sm:text-[42px] lg:text-[50px] font-semibold  ">
            Get in Touch
          </h2>
          <p className="max-w-[530px] mt-[10px] text-[17px]">
            Have a question or need assistance with your logistics needs? Our
            team is here to help. Contact us today for a personalized solution
            tailored to your business.
          </p>
        </div>
        <div className="sm:w-[49%] lg:w-auto">
          <h6 className="text-xl font-normal">Contact Information</h6>
          <div className="flex items-center gap-[10px] mt-[10px]">
            <img
              className="bg-purple px-[10px] py-[11px] rounded-full"
              src="/call.png"
              alt=""
            />
            <p className="text-[17px]">
              <a href="tel:+254722359463">+254722359463 /</a>
              <a href="tel:+254726771499"> +254726771499</a>

            </p>
          </div>
          <div className="flex items-center gap-[10px] mt-[10px]">
            <img
              className="bg-purple px-[10px] py-[11px] rounded-full"
              src="/sms.png"
              alt=""
            />
            <p className="text-[17px]">
              <a href="mailto:info@tmxglobal.com">info@tmxglobal.com</a>
            </p>
          </div>
          <div className="flex items-center gap-[10px] mt-[10px]">
            <img
              className="bg-purple px-[10px] py-[11px] rounded-full"
              src="/location.png"
              alt=""
            />
            <p className="text-[17px]">View Park Towers, Floor 9, Wing A</p>
          </div>
        </div>
        <div className="w-[30%] xl:w-auto">
          <h6 className="text-xl font-normal">Agents</h6>

          <p className="mt-[10px] text-[17px]">
            <a href="#">Africa</a>
          </p>
          <p className="mt-[10px] text-[17px]">
            <a href="#">Asia</a>
          </p>
          <p className="mt-[10px] text-[17px]">
            <a href="#">Europe</a>
          </p>
          <p className="mt-[10px] text-[17px]">
            <a href="#">America</a>
          </p>
        </div>
        <div>
          <h6 className="text-xl font-normal">Get a Quote</h6>

          <button type="button" className="btn border mt-[10px]  py-[15px] px-[18px] rounded-full" onClick={() => document.getElementById('instant').showModal()}>  Instant Pricing/Rates</button>
          <dialog id="instant" className="modal p-4 rounded-xl max-w-[600px]">
            <div className="modal-box">
              <h3 className="font-semibold text-center text-2xl ">Important Information</h3>
              <p className="py-4 text-gray-600">For approximates, press cancel and use our AI tool. To proceed for exact quotations from our Agents, please make sure you have the following information ready for us to better serve you:</p>
              <div className="p-2">
                <ul className="list-disc px-8">
                  <li>Product namee</li>
                  <li>Price of product</li>
                  <li>Invoice from supplier</li>
                  <li>Package list</li>
                  <li>Weight</li>
                  <li>Physical origin and destination</li>
                </ul>
              </div>
              <div className="modal-action">
                <form method="dialog" >
                  <div className="mx-4 mt-6 flex justify-between">

                    <button className="btn bg-red-600 text-white h-[45px] px-[18px] rounded-full  hover:bg-red-700 duration-300 transition">Close</button>
                    <button className="btn bg-black text-white h-[45px] px-[18px] rounded-full  hover:opacity-80 duration-300 transition">
                      <a target="_Blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfdNLQWFcpIh53_hhqZ0WYEw6vRLUBeFb8Xt8qaf05VZzsoiQ/viewform">Proceed</a>
                    </button>
                  </div>

                </form>
              </div>
            </div>
          </dialog>
        </div>
        <div className="mr-[88px]">
          <h6 className="text-xl font-normal">Get a Quote</h6>

          <div className="flex gap-[28px] mt-[10px]">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaXTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

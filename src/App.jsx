import { IoIosArrowDown } from "react-icons/io";

function App() {
  return (
    <>
      <div className="bg-purple text-center text-white py-3">
        Have a question or need assistance with your logistics needs? Our team
        is here to help. Contact us today for a personalized solution tailored
        to your business.
      </div>
      <nav className="flex justify-between items-center container ">
        <div>
          <img className="py-4" src="/logo.png" alt="" />
        </div>
        <div>
          <ul className="flex justify-between gap-4">
            <li>Home</li>
            <li>About</li>
            <div className="flex gap-2 items-center">
              <li>Membership</li>
              <IoIosArrowDown />
            </div>
            <li>Services</li>
            <li>Location</li>
            <li>Contact Us</li>
            <li>Affiliate Program</li>
          </ul>
        </div>
        <div className="flex gap-4">
          <button type="button" className="border  p-3 rounded-full">
            Agents
          </button>
          <button
            type="button"
            className="bg-purple text-white p-3 rounded-full"
          >
            Sign in
          </button>
        </div>
      </nav>
    </>
  );
}

export default App;

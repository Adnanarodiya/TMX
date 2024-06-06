import { Outlet } from "react-router-dom";
import Footer from "./components/pages/Footer";
import Header from "./components/Header";
function Layout() {
    return (
        <>
            <div className="bg-purple  text-center text-white py-3 text-[13px] sm:text-[15px] min-h-[50px]">
                <div className="container">
                    <p>
                        Have a question or need assistance with your logistics needs? Our
                        team is here to help. Contact us today for a personalized solution
                        tailored to your business.
                    </p>
                </div>
            </div>
            <Header />
            <Outlet />
            <Footer />
            <div className="bg-purple text-center min-h-[50px] text-white py-3">
                © 2024 TMX Global All rights reserved
            </div>
        </>
    );
}

export default Layout;
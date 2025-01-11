import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CrashCourse from "./CrashCourse";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CreatePage from "./CreatePage";
import AgentPage from "./AgentPage";
import BuyGenCreditsPage from "./BuyGenCreditsPage"; // Correct import for BuyGenCreditsPage
import FAQSection from "./FAQSection";

import SwiperComponent from "components/SwiperComponent";
import ShopPage from "./ShopPage"; // Import the ShopPage component
import PortfolioPage from "./PortfolioPage";
import ManagePage from "./ManagePage";
import BondPage from "./BondPage";
// In your main entry file (index.tsx or App.tsx)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <Router>
      <main className="pt-4">
        <Navbar />
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <section className="text-center max-w-screen-lg mx-auto py-2">
                  <h1 className="text-5xl font-bold text-accent2 mt-14">
                    ISAI Agent Studio<br />
                    <span className="text-accent1 text-3xl">Sneak Peak</span>
                  </h1>
                  <p className="text-3xl text-gray-300 mt-1 -mb-14">
                    Craft, Evolve, and Interact with User-made Intelligent NFTs.
                  </p>
                </section>

                {/* Swiper Component */}
                <section className="mt-0">
                  <SwiperComponent />
                  <CrashCourse />

                </section>
                <section className="mt-0">
                  <FAQSection />
                </section>
              </>
            }
          />

          {/* Dynamic Agent Page */}
          <Route path="/agent/:name" element={<AgentPage />} />

          {/* Create Character Page */}
          <Route path="/create" element={<CreatePage />} />

          {/* Shop Page Route */}
          <Route path="/shop" element={<ShopPage />} />

          {/* Manage Page Route */}
          <Route path="/manage" element={<ManagePage />} />

          {/* Portfolio Page Route */}
          <Route path="/portfolio" element={<PortfolioPage />} />

          {/* Bond Page */}
          <Route path="/bond" element={<BondPage />} />

          {/* Buy Gen Credits Page Route */}
          <Route path="/buy-gen-credits" element={<BuyGenCreditsPage />} /> {/* Ensure this route points to the BuyGenCreditsPage component */}

        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

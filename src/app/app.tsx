import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DndProvider } from "react-dnd"; // Import DndProvider
import { HTML5Backend } from "react-dnd-html5-backend"; // or any other backend you're using
import CrashCourse from "./CrashCourse";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CreatePage from "./CreatePage";
import AgentPage from "./AgentPage";
import BuyGenCreditsPage from "./BuyGenCreditsPage"; // Correct import for BuyGenCreditsPage
import FAQSection from "./FAQSection";
import OvermindPage from "./OvermindPage";
import SwiperComponent from "components/SwiperComponent";
import ShopPage from "./ShopPage"; // Import the ShopPage component
import ManagePage from "./ManagePage";
import BondPage from "./BondPage";

// Import the ChainHorizontalBar
import ChainHorizontalBar from "../components/ChainHorizontalBar";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react"; // Import useState
import { Chain } from "../utils/chains"; // Import the correct Chain type from utils/chains.ts

function App() {
  // Initialize selectedChain with null or a Chain type
  const [selectedChain, setSelectedChain] = useState<Chain | null>(null);

  return (
    <DndProvider backend={HTML5Backend}> {/* Wrap the entire app with DndProvider */}
      <Router>
        <main className="pt-4">
          <Navbar />

          {/* Add ChainHorizontalBar above your routes */}
          <ChainHorizontalBar selectedChain={selectedChain} setSelectedChain={setSelectedChain} />

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
            <Route
              path="/manage"
              element={<ManagePage selectedChain={selectedChain} />}
            />

            {/* Bond Page */}
            <Route path="/agents" element={<BondPage />} />
            
            {/* Overmind Page */}
            <Route path="/overmind" element={<OvermindPage />} />

            {/* Buy Gen Credits Page Route */}
            <Route path="/buy-gen-credits" element={<BuyGenCreditsPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </DndProvider>
  );
}

export default App;

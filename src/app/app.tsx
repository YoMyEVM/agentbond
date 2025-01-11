import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CreatePage from "./CreatePage";
import AgentPage from "./AgentPage";
import Card from "components/card";
import SwiperComponent from "components/SwiperComponent";
import ShopPage from "./ShopPage"; // Import the ShopPage component
import EquipPage from "./EquipPage";
import PortfolioPage from "./PortfolioPage";

// Features array with agent information and share prices
const features = [
  { name: "Agent1", description: "ssd", pfp: "/agents/1.png", sharePrice: 12.34, status: "offline" as "online" },
  { name: "Agent2", description: "sfdsd", pfp: "/agents/2.png", sharePrice: 45.67, status: "offline" as "offline" },
  { name: "Agent3", description: "sfds", pfp: "/agents/3.png", sharePrice: 89.01, status: "online" as "online" },
  { name: "Agent4", description: "sfsd", pfp: "/agents/4.png", sharePrice: 23.45, status: "offline" as "offline" },
  { name: "Agent5", description: "dsfsd", pfp: "/agents/5.png", sharePrice: 67.89, status: "online" as "online" },
  { name: "Agent6", description: "sdfss.", pfp: "/agents/6.png", sharePrice: 34.56, status: "online" as "offline" },
];

function ScrollToAgents() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#agents") {
      const agentSection = document.getElementById("agent-cards");
      if (agentSection) {
        agentSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToAgents />
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
                </section>

                {/* Bond to Invest text above Agent Cards */}
                <section className="text-center mt-8">
                  <h2 className="text-4xl font-semibold text-[#fff]">
                    Bond to Invest with an ISAI Agent
                  </h2>
                </section>

                {/* Agent Cards */}
                <section id="agent-cards" className="max-w-screen-lg xl:max-w-screen-xl mx-auto grid grid-cols-10 gap-4">
                  {features.map((props, index) => (
                    <div key={index} className="col-span-10 sm:col-span-5">
                      <Card
                        title={props.name}
                        description={props.description}
                        pfp={props.pfp}
                        href={`/agent/${props.name}`}
                        sharePrice={props.sharePrice}
                        status={props.status}
                      />
                    </div>
                  ))}
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

          {/* Equip Page Route */}
          <Route path="/equip" element={<EquipPage />} />

          {/* Portfolio Page Route */}
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

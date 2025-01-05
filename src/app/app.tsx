import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Card from "components/card";
import SwiperComponent from "components/SwiperComponent";
import Navbar from "../components/Navbar";
import AgentPage from "./AgentPage"; // Personal page for each agent
import Footer from "../components/Footer"; // Adjust the path as needed

// Features array with agent information and share prices
const features = [
  { name: "Agent1", description: "....", pfp: "/agents/1.png", sharePrice: 12.34 },
  { name: "Agent2", description: "....", pfp: "/agents/2.png", sharePrice: 45.67 },
  { name: "Agent3", description: "....", pfp: "/agents/3.png", sharePrice: 89.01 },
  { name: "Agent4", description: "....", pfp: "/agents/4.png", sharePrice: 23.45 },
  { name: "Agent5", description: "....", pfp: "/agents/5.png", sharePrice: 67.89 },
  { name: "Agent6", description: "....", pfp: "/agents/6.png", sharePrice: 34.56 },
];

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
                {/* Title and description */}
                <section className="text-center max-w-screen-lg mx-auto py-2">
                  <h1 className="text-5xl font-bold text-accent2 mt-14">
                    ISAI Agent Studio Coming Soon
                  </h1>
                  <p className="text-3xl text-gray-300 mt-1 -mb-14">
                    Craft, Evolve, and Interact with User-made Intelligent NFTs.
                  </p>
                </section>

                {/* Swiper Component */}
                <section className="mt-0">
                  <SwiperComponent />
                </section>

                {/* Agent Cards */}
                <section className="max-w-screen-lg xl:max-w-screen-xl mx-auto grid grid-cols-10 gap-4">
                  {features.map((props, index) => (
                    <div key={index} className="col-span-10 sm:col-span-5">
                      <Card
                        title={props.name}
                        description={props.description}
                        pfp={props.pfp}  // Pass image path to Card component
                        href={`/agent/${props.name}`} // Link to personal page
                        sharePrice={props.sharePrice} // Pass sharePrice here
                      />
                    </div>
                  ))}
                </section>
              </>
            }
          />

          {/* Dynamic Agent Page */}
          <Route path="/agent/:name" element={<AgentPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

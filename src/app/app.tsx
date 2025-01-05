import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Card from "components/card";
import SwiperComponent from "components/SwiperComponent";
import Navbar from "../components/Navbar";
import AgentPage from "./AgentPage"; // Personal page for each agent
import Footer from "../components/Footer"; // Adjust the path as needed


import {
  BeakerIcon,
  BookmarkIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  PhoneXMarkIcon,
  Bars3Icon,
  PencilIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";

const features = [
  { name: "Agent1", description: "....", pfp: CubeTransparentIcon },
  { name: "Agent2", description: "....", pfp: PencilIcon },
  { name: "Agent3", description: "....", pfp: BookmarkIcon },
  { name: "Agent4", description: "....", pfp: PhotoIcon },
  { name: "Agent5", description: "....", pfp: BeakerIcon },
  { name: "Agent6", description: "....", pfp: Bars3Icon },
  { name: "Agent7", description: "....", pfp: PhoneXMarkIcon },
  { name: "Agent8", description: "....", pfp: ChevronDownIcon },
  { name: "Agent9", description: "....", pfp: PhoneXMarkIcon },
  { name: "Agent10", description: "....", pfp: ChevronDownIcon },
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
                {/* Title and description */}
                <section className="text-center max-w-screen-lg mx-auto py-2">
                  <h1 className="text-3xl font-bold text-white mt-14">
                    ISAI Agent Studio
                  </h1>
                  <p className="text-base text-gray-300 mt-1 -mb-14">
                    Craft, Evolve, and Interact with User made Intelligent NFTs.
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
                        pfp={props.pfp}
                        href={`/agent/${props.name}`} // Link to personal page
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

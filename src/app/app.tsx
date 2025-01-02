import Card from "components/card";
import SwiperComponent from "components/SwiperComponent";
import Navbar from '../components/Navbar';

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
import Button from "components/button";
import CopyButton from "components/copy-button";

const features = [
  {
    name: "Agent1",
    description:
      "....",
    pfp: CubeTransparentIcon,
    docs: "https://vitejs.dev/",
  },
  {
    name: "Agent2",
    description: "....",
    pfp: PencilIcon,
    docs: "https://reactjs.org/",
  },
  {
    name: "Agent3",
    description:
      "....",
    pfp: BookmarkIcon,
    docs: "https://www.typescriptlang.org/",
  },
  {
    name: "Agent4",
    description: "....",
    pfp: PhotoIcon,
    docs: "https://tailwindcss.com/",
  },
  {
    name: "Agent5",
    description: "..",
    pfp: BeakerIcon,
    docs: "https://eslint.org/",
  },
  {
    name: "Agent6",
    description: "....",
    pfp: Bars3Icon,
    docs: "https://prettier.io/",
  },
  {
    name: "Agent7",
    description:
      "....",
    pfp: PhoneXMarkIcon,
    docs: "https://bradfrost.com/blog/post/atomic-web-design/",
  },
  {
    name: "Agent8",
    description:
      "....",
    pfp: ChevronDownIcon,
    docs: "https://github.com/vitejs/vite/issues/88#issuecomment-762415200",
  },
];

function App() {
  return (

    <main>
      <Navbar />
      {/* Title and description above the Swiper */}
      <section className="text-center max-w-screen-lg mx-auto py-2">
        <h1 className="text-2xl font-bold text-white mt-16">Welcome to Agent Dashboard</h1>
        <p className="text-base text-gray-300 mt-1 -mb-14">
          Explore the agents and their features below.
        </p>
      </section>

      {/* Swiper Component Section */}
      <section className="mt-0">
        <SwiperComponent />
      </section>
      <section className="max-w-screen-lg xl:max-w-screen-xl mx-auto grid grid-cols-10 gap-4">
        {features.map((props, index) => (
          <div key={index} className="col-span-10 sm:col-span-5">
            <Card
              title={props.name}
              description={props.description}
              pfp={props.pfp}
              href={props.docs}
            />
          </div>
        ))}
      </section>

      <section className="max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <div className="sm:flex sm:space-x-6 space-y-4 sm:space-y-0 items-center">
          <a href="https://github.com/jvidalv/vital">
            <Button>Visit on Github</Button>
          </a>
          <CopyButton text="npx degit jvidalv/vital my-app" />
        </div>
      </section>
    </main>
  );
}

export default App;

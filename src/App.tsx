import React from 'react';
import Slider from "./components/Slider";
import DropDown from "./components/DropDown";

export default function App() {
  return (
      <>
          <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
            <p className="text-3xl text-gray-700 font-bold mb-5 text-center">
              Time to choose your buddy &#128054;
            </p>
            {/*<p className="text-gray-500 text-lg">*/}
            {/*  React and Tailwind CSS in action*/}
            {/*</p>*/}
          </div>
          <div className="container mx-30">
              <DropDown />
              {/*<Slider />*/}
          </div>
      </>
  );
}

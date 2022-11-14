import React from 'react';
import Slider from "./components/Slider";
import DropDown from "./components/DropDown";
import Cards from "./components/Cards";

export default function App() {

  return (
      <div>
          <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10 text-center">
            <p className="text-10xl text-gray-700 font-bold mb-5 text-center">
              Time to choose your buddy &#128054;
            </p>
            <Slider />
            <DropDown />
            <Cards />
          </div>
      </div>
  );
}

import React, {Component} from 'react';
import Slider from "./Slider";
import Search from "./Search";
import Cards from "./Cards";
import Description from "./Description";
import Footer from "./Footer";

export class Body extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mx-44">
        <p className="text-4xl text-gray-700 font-bold text-center ">
          Because everyday is a Dog Day &#128054;
        </p>
        <Slider/>
        <Description />
        <p className="text-3xl text-gray-700 mb-3 p-10 text-center">
          Time to choose your buddy
        </p>
        <Search />
        <Footer />
      </div>
    );
  }
}

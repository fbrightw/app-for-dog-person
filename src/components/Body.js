import React, {Component} from 'react';
import Slider from "./Slider";
import DropDown from "./DropDown";
import Cards from "./Cards";
import Description from "./Description";

export default class Body extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedBreed: ''
    }

    this.onChoose = this.onChoose.bind(this);
  }

  onChoose(value) {
    this.setState({
      selectedBreed: value
    })
  }

  render() {
    return (
        <div className="mx-20 p-10 bg-gray-50 text-center z-10">
          <section>
            <p className="text-4xl text-gray-700 font-bold text-center ">
              Because everyday is a Dog Day &#128054;
            </p>
            <Slider/>
            <Description />
            <p className="text-3xl text-gray-700 mb-5 text-center">
              Time to choose your buddy
            </p>
            <DropDown onChoose={this.onChoose}/>
          </section>
          <Cards
              selectedBreed={this.state.selectedBreed}
          />
        </div>
    );
  }
}

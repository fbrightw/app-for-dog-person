import React, {Component} from 'react';
import Slider from "./Slider";
import DropDown from "./DropDown";
import Cards from "./Cards";

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
      <div className="container mx-auto p-10 bg-gray-100 text-center">
        <p className="text-5xl text-gray-700 font-bold text-center">
          Because everyday is a Dog Day &#128054;
        </p>
        <Slider/>
        <DropDown onChoose={this.onChoose}/>
        <Cards
            selectedBreed={this.state.selectedBreed}
        />
      </div>
    );
  }
}

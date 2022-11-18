import React, {Component} from 'react';
import {connect} from 'react-redux';
import Slider from "./Slider";
import DropDown from "./DropDown";
import Cards from "./Cards";

class Body extends Component {

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
      <div className="container mx-auto bg-indigo-600 rounded-xl shadow border p-8 m-10 text-center">
        <p className="text-9xl text-gray-700 font-bold text-center">
          Because everyday is a Dog Day. &#128054;
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

export default connect(state => ({
  breed: state.breed
}),
)(Body);
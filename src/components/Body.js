import React, {Component} from 'react';
import Slider from "./Slider";
import DropDown from "./DropDown";
import Cards from "./Cards";
import Description from "./Description";
import {connect, useDispatch} from 'react-redux'
import {changeStatus} from "../slices/LikedBreedsSlice";

class Body extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedBreed: ''
    }

    this.onChoose = this.onChoose.bind(this);
  }

  onChoose(value) {
    const LikedBreedInStore = this.props.liked;
    let isBreedInStore = LikedBreedInStore.breeds.find((el => el.name === value));
    let isLiked = (typeof isBreedInStore !== 'undefined') ? isBreedInStore.isLiked : false;
    const dispatch = useDispatch();
    dispatch(changeStatus({
      name: value,
      isLiked: isLiked,
    }))
    this.setState({
      selectedBreed: value,
    })
  }

  render() {
    return (
        <div className="mx-44 p-10 bg-gray-50 text-center z-auto">
          <p className="text-4xl text-gray-700 font-bold text-center ">
            Because everyday is a Dog Day &#128054;
          </p>
          <Slider/>
          <Description />
          <p className="text-3xl text-gray-700 mb-3 p-10 text-center">
            Time to choose your buddy
          </p>
          <DropDown onChoose={this.onChoose}/>
          <section id="search">
            <Cards selectedBreed={this.state.selectedBreed}
            />
          </section>
        </div>
    );
  }
}

export default connect(state => ({
   liked: state.likedBreeds
})
)(Body)
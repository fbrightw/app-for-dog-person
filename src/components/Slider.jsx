import React from 'react';
import '../index.css'
import SimpleImageSlider from "react-simple-image-slider";

export default function Slider() {
    const images = [
        {url: "https://somme2016.org/wp-content/uploads/2022/04/all-things-you-should-know-about-studying-abroad-1.png" },
        {url: "https://www.iesabroad.org/files/blog/images/nia.hill%40bison.howard.edu/2019-07-03/istock-698900018.jpg"}
    ];
    return (
        <div>
            <p class="text-2xl">
                blabal
            </p>
            {/*<SimpleImageSlider*/}
            {/*    autoplay={true}*/}
            {/*    width={'50%'}*/}
            {/*    height={'40%'}*/}
            {/*    images={images}*/}
            {/*    showBullets={true}*/}
            {/*    showNavs={true}>*/}
            {/*</SimpleImageSlider>*/}
        </div>
    );
};
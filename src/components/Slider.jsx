import React, {useState, useEffect} from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import "../index.css"

export default function Slider() {

    const [images, setImages] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // fetch('https://dog.ceo/api/breeds/image/random/10')
        fetch('https://api.thedogapi.com/v1/breeds/?limit=10', {
            credentials: 'omit'
        })
            .then(r => r.json())
            .then(r =>
            {
                setImages(
                    r.map(obj => ({
                        url: obj.image.url
                    })
                ));
                setIsLoaded(true);
            })
    }, [])

    if (isLoaded) {
       return (
            <>
              <SimpleImageSlider
                  style={{margin: '5% auto', borderRadius: '20%'}}
                  autoplay={true}
                  width={'50vw'}
                  height={'50vh'}
                  images={images}
                  showBullets={true}
                  showNavs={true}>
              </SimpleImageSlider>
              <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
                  <p className="text-5xl text-gray-700 font-bold mb-5 text-center">
                      Because everyday is a Dog Day. &#128054;
                  </p>
              </div>
            </>
        );
    }
    else {
        return (
            <></>
        )
    }
};
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
                  autoplay
                  width={'70vw'}
                  height={'60vh'}
                  images={images}
                  showBullets={true}
                  showNavs={true}>
              </SimpleImageSlider>
              <p className="font-mono italic text-3xl text-gray-700 font-bold mb-5 text-center">
                  Time to choose your buddy
              </p>
            </>
        );
    }
    else {
        return (
            <></>
        )
    }
};
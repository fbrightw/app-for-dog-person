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
        .then(r => {
          setImages(
              r.map(obj => ({
                    url: obj.image.url
                  })
              ));
          setIsLoaded(true);
        })
  }, [])

  return (
      <>
        {isLoaded &&
            <SimpleImageSlider
                style={{margin: '5% auto', borderRadius: '20%'}}
                autoplay
                width={'60vw'}
                height={'50vh'}
                images={images}
                showBullets={true}
                showNavs={true}>
            </SimpleImageSlider>
        }
      </>
  );
}

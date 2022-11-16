import React, {useEffect, useState} from 'react';
import {Button, Card} from "react-bootstrap";

// export interface Breed {
//   alt_names: string
//   experimental: number
//   hairless: number
//   hypoallergenic: number
//   id: string
//   life_span: string
//   name: string
//   natural: number
//   origin: string
//   rare: number
//   reference_image_id: any
//   rex: number
//   short_legs: number
//   suppressed_tail: number
//   temperament: string
//   weight_imperial: string
//   wikipedia_url: string
// }

interface IBreedInfo {
  weight: {
    imperial: string;
    metric: string;
  }
  height: {
    imperial: string;
    metric: string;
  }
  id: number;
  name: string;
  bred_for: string;
  life_span: string;
  temperament: string;
  reference_image_id: string;
}

interface ISelectedBreed {
  selectedBreed: string
}

export default function Cards(props: ISelectedBreed) {

  const [breedInfo, setBreedInfo] = useState<IBreedInfo[]>([])

  useEffect(() => {
    fetch(`https://api.thedogapi.com/v1/breeds/search/?q=${props.selectedBreed}`,
        {credentials: 'omit'})
        .then(response => response.json())
        .then(data => setBreedInfo(data))
  }, [props.selectedBreed])

    return (
        <Card style={{width: '18rem', margin: '5% auto'}}>
            {(props.selectedBreed !== '' && breedInfo.length > 0) &&
                <>
                  <Card.Img variant="top" src="holder.js/100px180"/>
                  <Card.Body>
                    <Card.Title>{breedInfo[0].name}</Card.Title>
                    <Card.Text>
                      {breedInfo[0].temperament}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </>
            }
        </Card>
    );
}

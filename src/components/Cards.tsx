import React, {useEffect, useState} from 'react';
import {Card, ListGroup} from "react-bootstrap";

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

interface IBreedImg {
  id: string,
  url: string,
  breeds: IBreedInfo[],
  width: string,
  height: string
}

export default function Cards(props: ISelectedBreed) {

  const [breedInfo, setBreedInfo] = useState<IBreedInfo[]>([])
  const [breedImg, setBreedImg] = useState<IBreedImg>({breeds: [], height: "", id: "", url: "", width: ""})
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    fetch(`https://api.thedogapi.com/v1/breeds/search/?q=${props.selectedBreed}`,
        {credentials: 'omit'})
        .then(response => response.json())
        .then(data => {
              setBreedInfo(data)
              loadImage(data)
            }
        )
  }, [props.selectedBreed])

  function loadImage(data: IBreedInfo[]) {
    fetch(`https://api.thedogapi.com/v1/images/${data[0].reference_image_id}`,
        {credentials: 'omit'})
        .then(response => response.json())
        .then(data => {
          setBreedImg(data);
          setDataLoaded(true);
        })
  }

    return (
        (props.selectedBreed !== '' && breedInfo.length > 0) ?
            <Card style={{width: '18rem', margin: '5% auto'}}>
                <Card.Img
                    variant="right"
                    src={breedImg.url}
                    style={{float: "right"}}
                />
                <Card.Body>
                    <Card.Title>{breedInfo[0].name}</Card.Title>
                    <ListGroup variant="flush">
                        <ListGroup.Item>{'height: '}{breedInfo[0].height.imperial}</ListGroup.Item>
                        <ListGroup.Item>{'weight: '}{breedInfo[0].weight.imperial}</ListGroup.Item>
                        <ListGroup.Item>{'temperament: '}{breedInfo[0].temperament}</ListGroup.Item>
                        <ListGroup.Item>{'life span: '}{breedInfo[0].life_span}</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
            : null
    );
}

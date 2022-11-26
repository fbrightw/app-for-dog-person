import React, {useEffect, useState} from 'react';
import {Card, ListGroup} from "react-bootstrap";
import {wishList} from "../utils";

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
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    fetch(`https://api.thedogapi.com/v1/breeds/search/?q=${props.selectedBreed}`,
        {credentials: 'omit'})
        .then(response => response.json())
        .then(data => {
              setBreedInfo(data)
              loadImage(data)
              setIsLiked(false)
            }
        )
  }, [props.selectedBreed])

  function loadImage(data: IBreedInfo[]) {
    fetch(`https://api.thedogapi.com/v1/images/${data[0].reference_image_id}`,
        {credentials: 'omit'})
        .then(response => response.json())
        .then(data => {
          setBreedImg(data);
        })
  }

  function onLikeClick() {
      setIsLiked(!isLiked)
      // if (isLiked)
      //     wishList.push(props.selectedBreed)
      // else
      //     wishList.filter(
      //         el !== {props.selectedBreed}
      //     )
  }

  function onArrowClick() {
      // @ts-ignore
      window.scrollTo({
          top: 0,
          behaviour: 'smooth'
      })
    }

    return (
        (props.selectedBreed !== '' && breedInfo.length > 0) ?
            <div style={{display: 'flex', flexWrap: 'wrap', alignContent: 'center'}}>
                <button
                    className="back-to-top"
                    style={{margin: '0 auto', color: "rgb(128, 128, 128)"}}
                    onClick={() => onArrowClick()}
                >
                    <i className="bi bi-arrow-up-circle" style={{fontSize: '50px'}}></i>
                </button>
                <Card style={{flexDirection: 'row', alignItems: 'center', padding: '10px', margin: '5% auto', width: '80%', float: 'right'}}>
                    <Card.Body>
                        <Card.Title>{breedInfo[0].name}</Card.Title>
                        <ListGroup variant="flush">
                            <ListGroup.Item>{'height: '}{breedInfo[0].height.imperial}</ListGroup.Item>
                            <ListGroup.Item>{'weight: '}{breedInfo[0].weight.imperial}</ListGroup.Item>
                            <ListGroup.Item>{'temperament: '}{breedInfo[0].temperament}</ListGroup.Item>
                            <ListGroup.Item>{'life span: '}{breedInfo[0].life_span}</ListGroup.Item>
                        </ListGroup>
                        <button
                            type="button"
                            className="btn btn-light"
                            onClick={() => onLikeClick()}
                        >
                            <span id="heart" className={isLiked ? "bi bi-heart-fill red-color" : "bi bi-heart-fill"}></span>
                        </button>
                    </Card.Body>
                    <div style={{width: '30%'}}>
                        <img src={breedImg.url}  alt="b" style={{borderRadius: '2%'}}/>
                    </div>
                </Card>
            </div>
            : null

    );
}

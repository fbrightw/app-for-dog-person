import React from 'react';
import {Button, Card} from "react-bootstrap";
import {store} from "../store";

export interface Breed {
  alt_names: string
  experimental: number
  hairless: number
  hypoallergenic: number
  id: string
  life_span: string
  name: string
  natural: number
  origin: string
  rare: number
  reference_image_id: any
  rex: number
  short_legs: number
  suppressed_tail: number
  temperament: string
  weight_imperial: string
  wikipedia_url: string
}



export default function Cards() {

    const breed = store.getState.breed

    return(
        <Card style={{ width: '18rem', margin: '5% auto'}}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

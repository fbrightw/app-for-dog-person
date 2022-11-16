import React, {useEffect, useState} from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import {store} from "../store";
export default function DropDown() {

    const [loading, setLoading] = useState(true);
    const [breeds, setBreeds] = useState([]);

    store.subscribe(() => console.log(store.getState()))
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/list/all')
            .then((response) => response.json())
            .then(data => {
                const breedArray = Object.keys(data.message).map(
                    breed => ({
                        name: breed,
                        href: `#${breed}`
                    })
                )
                setBreeds(breedArray);
                setLoading(false);
            })
    }, [])

    if (loading) {
        return (
            <div className="spinner-border m-5" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        )
    }
    else {
        return (
            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{"maxHeight": '200px', 'overflowY': 'auto'}}>
                        {breeds.map(breed => (
                            <Dropdown.Item
                                onClick={(value) => {
                                  store.dispatch({
                                    type: 'ON_SELECT_BREED',
                                    payload: value
                                  })
                                }}
                                key={breed.name}>
                                {breed.name}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }
}

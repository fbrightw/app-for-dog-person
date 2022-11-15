import React, {useEffect, useState} from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import {store} from "../store";
import {onSelectBreed} from "../store/action/onSelectBreed";

export default function DropDown() {

    const [loading, setLoading] = useState(true);
    const [breeds, setBreeds] = useState([]);
    const [selectedBreed, setSelectedBreed] = useState('')

    // const ui = useSelector(state => state.selectedBreed);

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
                                  store.dispatch(onSelectBreed(value))
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
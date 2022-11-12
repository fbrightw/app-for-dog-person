import React, {useEffect, useState} from "react";
import Dropdown from 'react-bootstrap/Dropdown';

export default function DropDown() {

    const [loading, setLoading] = useState(true);
    const [breeds, setBreeds] = useState([]);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/list/all')
            .then((response) => response.json())
            .then(data => {
                const breedArray = Object.keys(data.message);
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
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {breeds.map(breed => (
                    <Dropdown.Item href="#/action-1">
                        {breed}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
        )
    }
}

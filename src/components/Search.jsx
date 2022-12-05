import React, {useEffect, useState} from "react";
import MyDropdown from "../ui_elements/Dropdown/MyDropdown";

export default function Search(props) {

    const [loading, setLoading] = useState(true);
    const [breeds, setBreeds] = useState([]);

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

    if (loading === true) {
        return (
            <div className="spinner-border m-5" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        )
    }
    else {
      return (
          <MyDropdown
              data={breeds}
              onChoose={props.onChoose}
          />
      )
    }
}

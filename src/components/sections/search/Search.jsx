import React, {useEffect, useMemo, useState} from "react";
import MyDropdown from "../../../ui_elements/Dropdown/MyDropdown";
import Cards from "./Cards";

export default function Search(props) {

    const [loading, setLoading] = useState(true);
    const [breeds, setBreeds] = useState([]);
    const [selectedBreed, setSelectedBreed] = useState('')

    function onChoose(value) {
      setSelectedBreed(value)
    }

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

    return (
        <section id="search">
          {loading ?
            <div className="spinner-border m-5" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          :
            <MyDropdown
                data={breeds}
                onChoose={onChoose}
            />
          }
          <Cards
              selectedBreed={selectedBreed}
              isLiked={false}
          />
        </section>
    )
}

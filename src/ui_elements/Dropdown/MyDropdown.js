import React, {useState} from 'react';
import './styles.css'
import {useMemo} from "react";

const MyDropdown = (props) => {

  const [clickedDropdown, setClickedDropdown] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [dropdownContent, setDropdownContent] = useState(props.data);

  function onClickDropdown() {
    setClickedDropdown(!clickedDropdown);
  }

  const onInput = useMemo(() =>
  {setDropdownContent([...dropdownContent].filter(breed => breed.name.includes(inputValue)))}, [inputValue])

  const handleInputChange = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);
    onInput();
  }

  function breedChoose(e) {
    event.preventDefault();
    props.onChoose(e.target.value);
    setInputValue(e.target.value);
    setClickedDropdown(false);
  }

  return (
      <div className='select'>
        <div
            className='custom-select'
            onClick={onClickDropdown}
        >
          <div>
            <span className="label">Breed</span>
            <span className="value">
              <input
                type="text"
                placeholder="Select breed"
                value={inputValue}
                onChange={handleInputChange}
              />
            </span>
          </div>
          <i className='bx bx-chevron-down'></i>
        </div>
        {clickedDropdown
            ?
            <div className="option">
              <div className="custom-option">
                {dropdownContent.map(
                  breed => (
                      <option
                        key={`id_${breed.name}`}
                        onClick={breedChoose}
                      >
                        {breed.name}
                      </option>)
                )}
              </div>
            </div>
            :
            null
        }
      </div>
  );
};

export default MyDropdown;
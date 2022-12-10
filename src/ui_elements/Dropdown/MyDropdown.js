import React, {useState} from 'react';
import './styles.css'
import {useMemo} from "react";
import Options from "../../components/Options";

const MyDropdown = (props) => {

  const [clickedDropdown, setClickedDropdown] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [dropdownContent, setDropdownContent] = useState(props.data);

  function onClickDropdown() {
    setClickedDropdown(!clickedDropdown);
    scrollDown();
  }

  function scrollDown() {
    if (clickedDropdown) {
      window.scrollTo({
        bottom: 0,
        behaviour: 'smooth'
      })
    }
  }

  // const onInput = useMemo(() =>
  // {setDropdownContent([...dropdownContent].filter(breed => breed.name.includes(inputValue)))}, [inputValue])

  const handleInputChange = (event) => {
    let input = event.target.value;
    event.preventDefault();
    setInputValue(input);
    setDropdownContent([...props.data].filter(breed => breed.name.includes(input)))
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
        <Options
            dropdownContent={dropdownContent}
            onClick={breedChoose}
        />
            :
            null
        }
      </div>
  );
};

export default MyDropdown;
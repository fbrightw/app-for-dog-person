import React, {useState} from 'react';
import './styles.css'

const MyDropdown = (props) => {

  const [clickedDropdown, setClickedDropdown] = useState(false);
  const [inputValue, setInputValue] = useState('');

  function onClickDropdown(e) {
    setClickedDropdown(!clickedDropdown);
  }

  function handleChange(event) {
    event.preventDefault();
    setInputValue(event.target.value)

  }

  function breedChoose(e) {
    event.preventDefault();
    props.onChoose(e.target.value);
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
                onChange={handleChange}
            />
          </span>
          </div>
          <i className='bx bx-chevron-down'></i>
        </div>
        {clickedDropdown ?
            <div className="option">
              <div className="custom-option">
                {props.data.map(
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
            : null
        }
      </div>
  );
};

export default MyDropdown;
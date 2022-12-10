import React from 'react';

const Options = ({dropdownContent, onClick}) => {
  return (
      <div className="option1">
        <div className="custom-option">
          {dropdownContent.map(
              breed => (
                  <option
                      key={`id_${breed.name}`}
                      onClick={onClick}
                  >
                    {breed.name}
                  </option>)
          )}
        </div>
      </div>
  );
};

export default Options;
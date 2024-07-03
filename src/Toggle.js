import React from 'react';
import './Toggle.css'

const Toggle = ({checked, onCheckboxClick, index, disabled}) => {    

  return (
    <React.Fragment>
      <input
        className="react-switch-checkbox"
        type="checkbox"
        id={index}
        checked={checked}
        onChange={() => onCheckboxClick(index)}
        disabled={disabled}
      />
      <label
        style={{ background: '#fff0db', opacity: checked ? 1 : .7 }}
        className="react-switch-label"
        htmlFor={index}
      >
        <span className={`react-switch-button`}
          style={{background: '#fff'}}
        />
      </label>
    </React.Fragment>
  );
};

export default Toggle;
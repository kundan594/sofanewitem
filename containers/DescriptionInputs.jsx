import React from 'react';
import PropTypes from 'prop-types';
import Select from "../components/formComponent/Select";

const DescriptionInputs = ({ idx, descriptionState, handleDescriptionsChange }) => {
    const language = `language-${idx}`;
    const sentence1  = `sentence1-${idx}`;
    const sentence2  = `sentence2-${idx}`;
    const sentence3  = `sentence3-${idx}`;
    const langOptions =  [        
        "English",
        "Estonia"       
      ]
    return (
        <div key={`description-${idx}`}>
            <label htmlFor={language}>{`description #${idx + 1}`}</label>
            <Select 
                title={"Language"}
                name={language}
                options={langOptions}
                data-idx={idx}                
                className="language"               
                placeholder={"Select Language"}
                value={descriptionState[idx].language}
                onChange={handleDescriptionsChange}
                />
            
            <label>sentences</label>
            <input
                type="text"
                name={sentence1}
                data-idx={idx}
                id={sentence1}
                className="sentence1"
                value={descriptionState[idx].sentence1}
                onChange={handleDescriptionsChange}
            />
            <input
                type="text"
                name={sentence2}
                data-idx={idx}
                id={sentence2}
                className="sentence2"
                value={descriptionState[idx].sentence2}
                onChange={handleDescriptionsChange}
            />
            <input
                type="text"
                name={sentence3}
                data-idx={idx}
                id={sentence3}
                className="sentence3"
                value={descriptionState[idx].sentence3}
                onChange={handleDescriptionsChange}
            />
        </div>
    );
};

DescriptionInputs.propTypes = {
    idx: PropTypes.number,
    descriptionState: PropTypes.array,
    handleDescriptionsChange: PropTypes.func,
};

export default DescriptionInputs;

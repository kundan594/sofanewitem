import React from 'react';
import PropTypes from 'prop-types';
import Select from "../components/formComponent/Select";

const DescriptionInputs = ({ idx, descriptionState, handleDescriptionsChange }) => {
    const language = `language-${idx}`;
    const sentence1 = `sentence1-${idx}`;
    const sentence2 = `sentence2-${idx}`;
    const sentence3 = `sentence3-${idx}`;
    const langOptions = [
        {
            id: 0,
            name: "English",
            value: "english"
        },
        {
            id: 1,
            name: "Estonia",
            value: "estonia"
        }
    ]
    return (
        <div className="w-full" key={`description-${idx}`}>
            <div className="w-full">
                <Select
                    title={`Description #${idx+1}`}
                    name={language}
                    options={langOptions}
                    idx={idx}
                    classx="language"
                    placeholder={"Select Language"}
                    value={descriptionState[idx].language}
                    onChange={handleDescriptionsChange}
                />
            </div>
            <div className="w-full">
                <label htmlFor="first_name" className="block text-xs font-medium leading-5 text-gray-700">1. Sentence</label>
                <input
                    type="text"
                    name={sentence1}
                    data-idx={idx}
                    data-classx="sentence1"
                    id={sentence1}
                    className="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    value={descriptionState[idx].sentence1}
                    onChange={handleDescriptionsChange}
                    placeholder="Enter sentence"
                />
            </div>
            <div className="w-full">
                <label htmlFor="first_name" className="block text-xs font-medium leading-5 text-gray-700">2. Sentence</label>
                <input
                    type="text"
                    name={sentence2}
                    data-idx={idx}
                    data-classx="sentence2"
                    id={sentence2}
                    className="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    value={descriptionState[idx].sentence2}
                    onChange={handleDescriptionsChange}
                    placeholder="Enter sentence"
                />
            </div>
            <div className="w-full">
                <label htmlFor="first_name" className="block text-xs font-medium leading-5 text-gray-700">3. Sentence</label>
                <input
                    type="text"
                    name={sentence3}
                    data-idx={idx}
                    data-classx="sentence3"
                    id={sentence3}
                    className="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    value={descriptionState[idx].sentence3}
                    onChange={handleDescriptionsChange}
                    placeholder="Enter sentence"
                />
            </div>
        </div>
    );
};

DescriptionInputs.propTypes = {
    idx: PropTypes.number,
    descriptionState: PropTypes.array,
    handleDescriptionsChange: PropTypes.func,
};

export default DescriptionInputs;

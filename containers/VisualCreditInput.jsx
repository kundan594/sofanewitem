import React from 'react';
import PropTypes from 'prop-types';

const VisualcreditInputs = ({ idx, visualcreditState, handleVisualcreditsChange }) => {
    const urlId = `url-${idx}`;
    const link_text = `link_text-${idx}`;
    return (
        <div className="w-full" key={`visualcredit-${idx}`}>
            <div className="w-full flex space-x-2">
                <div className="w-1/2">
                    <label htmlFor={link_text} className="block text-sm font-medium leading-5 text-gray-700">Visual Credit #{idx + 1}</label>
                    <input
                        type="text"
                        name={link_text}
                        data-idx={idx}
                        id={link_text}
                        data-classx="link_text"
                        className="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        value={visualcreditState[idx].link_text}
                        onChange={handleVisualcreditsChange}
                        placeholder="Enter Text"
                    />
                </div>
                <div className="w-1/2">
                    <label htmlFor={urlId} className="block text-sm font-medium leading-5 text-gray-700">&nbsp;</label>                    
                    <input
                        type="text"
                        name={urlId}
                        data-idx={idx}
                        id={urlId}
                        data-classx="url"
                        className="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        value={visualcreditState[idx].url}
                        onChange={handleVisualcreditsChange}
                        placeholder="Enter URL"
                    />
                </div>
            </div>
        </div>
    );
};

VisualcreditInputs.propTypes = {
    idx: PropTypes.number,
    visualcreditState: PropTypes.array,
    handleVisualcreditsChange: PropTypes.func,
};

export default VisualcreditInputs;

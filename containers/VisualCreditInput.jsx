import React from 'react';
import PropTypes from 'prop-types';

const VisualcreditInputs = ({ idx, visualcreditState, handleVisualcreditsChange }) => {
    const urlId = `url-${idx}`;
    const link_text = `link_text-${idx}`;
    return (
        <div key={`visualcredit-${idx}`}>
            <label htmlFor={urlId}>{`visualcredit #${idx + 1}`}</label>
            <input
                type="text"
                name={urlId}
                data-idx={idx}
                id={urlId}
                className="url"
                value={visualcreditState[idx].url}
                onChange={handleVisualcreditsChange}
            />
            <label htmlFor={link_text}>Link_text</label>
            <input
                type="text"
                name={link_text}
                data-idx={idx}
                id={link_text}
                className="link_text"
                value={visualcreditState[idx].link_text}
                onChange={handleVisualcreditsChange}
            />
        </div>
    );
};

VisualcreditInputs.propTypes = {
    idx: PropTypes.number,
    visualcreditState: PropTypes.array,
    handleVisualcreditsChange: PropTypes.func,
};

export default VisualcreditInputs;

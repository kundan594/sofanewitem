import React from 'react';
import PropTypes from 'prop-types';

const NewcreditInputs = ({ idx, newscreditState, handleNewscreditsChange }) => {
    const urlId = `url-${idx}`;
    const link_text = `link_text-${idx}`;
    return (
        <div key={`newcredit-${idx}`}>
            <label htmlFor={urlId}>{`newcredit #${idx + 1}`}</label>
            <input
                type="text"
                name={urlId}
                data-idx={idx}
                id={urlId}
                className="url"
                value={newscreditState[idx].url}
                onChange={handleNewscreditsChange}
            />
            <label htmlFor={link_text}>Link_text</label>
            <input
                type="text"
                name={link_text}
                data-idx={idx}
                id={link_text}
                className="link_text"
                value={newscreditState[idx].link_text}
                onChange={handleNewscreditsChange}
            />
        </div>
    );
};

NewcreditInputs.propTypes = {
    idx: PropTypes.number,
    newscreditState: PropTypes.array,
    handleNewscreditsChange: PropTypes.func,
};

export default NewcreditInputs;

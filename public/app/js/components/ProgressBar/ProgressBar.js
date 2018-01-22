import React from 'react';

const ProgressBar = ({ label, value }) => (
    <div className="progress">
        <span className="progress__label">{label}</span>
        <div className="progress__bar">
            <div className="progress__value" style={{width: `${value}`}}></div>
        </div>
    </div>
);

export default ProgressBar;

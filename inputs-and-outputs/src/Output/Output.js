import React from 'react';
import Output from './Output.css'

const output = (props) => {
    return (
        <div className="Output">
            <p>If you would like to change your username please do so above!</p>
            <p>The username we have stored is {props.name}</p>
        </div>
    )
};

export default output;
import React from 'react';

const input = (props) => {
    return <input style={props.style} type="text" onChange={props.change} value={props.name}/>
};

export default input;
import React from 'react';

const textLength =  ({ length }) => {
    const color = length < 5 ? "#FF0000" : "#00FF00"
    const message = length < 5 ? "Text is too short" : "Text is long enough"

    return (
        <h1 style={{
            backgroundColor: color
        }}>
            {message}
        </h1>
    )
}

export default textLength;
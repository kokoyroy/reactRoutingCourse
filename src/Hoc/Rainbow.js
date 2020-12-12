import React from 'react';

const Rainbow = (WrappedComponent) => {
    const colours = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
    const randomColour = colours[Math.floor(Math.random() * 5)]
    let colour = `${randomColour}-text`;

    console.log(colour);
    return (props) => {
        return (
            <div className={colour}>
                <WrappedComponent  {...props} />
            </div>
        )
    }
}

export default Rainbow
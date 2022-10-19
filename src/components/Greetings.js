import React from "react";

const Greeting = (props) => {
    if (!props.name) {
        return (
            <div>
                <p>Hello World!</p>
            </div>
        )
    }
    return (
        <div>
            <p>Hello {props.name}</p>
        </div>
    )
}

export default Greeting;
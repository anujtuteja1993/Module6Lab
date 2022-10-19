import React from "react";

const Greeting = (props) => {
    if (!props.name) {
        return (<h1>Hello World!</h1>);
    }
    return (<h1>Hello {props.name}</h1>)
}

export default Greeting;
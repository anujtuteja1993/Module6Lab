import React from "react";

const Greeting = (props) => {
    // yep, works well!
    // if (!props.name) {
    //     return (
    //         <div>
    //             <p>Hello World!</p>
    //         </div>
    //     )
    // }
    // return (
    //     <div>
    //         <p>Hello {props.name}</p>
    //     </div>
    // )

    //a shorter way to do the above:
     return (
        <div>
            <p>Hello {props.name ? props.name : 'World!'}</p>
        </div>
    )
}

export default Greeting;
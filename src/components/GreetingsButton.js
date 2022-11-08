import React from "react";

class GreetingsButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "World",
        };
    }

    render() {

        const changeName = () => {
            this.setState({ name: "Anuj" });
        }
        
        return (
            <div>
                <p>Hello {this.state.name}</p>
                <button onClick={changeName}>Greet</button>
            </div>
        )
    }

}

export default GreetingsButton;
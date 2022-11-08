import React, { useState } from "react";

const Emoji = (props) => {

    let [emoji, setEmoji] = useState("😀");
    const changeEmoji = () => {
        if (emoji === "😀") {
            setEmoji("🙁")
        }
        else {
            setEmoji("😀")
        }
    }
    return (
        <div>
            <p>{emoji}</p>
            <button onClick={changeEmoji}>Change Emoji</button>
        </div>
    )
}

export default Emoji;
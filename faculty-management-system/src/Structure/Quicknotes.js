import React, { useState } from "react";
import "../styles/Quicknotes.css";

const note = {
    val: "Hello! I am a simple note\nI will show up on the dashboard\nYou can use me to keep remainders",
};

export default function Quicknotes() {
    const [text, setText] = useState(note.val);

    return (
        <div className="Quicknotes">
            <div className="Q-Top">
                <h1>NOTES</h1>
                <button className="Button--save">Save</button>
            </div>
            <div className="Q-Bottom">
                <div className="notes-area">
                    <textarea
                        className="notes-area-box"
                        type="text"
                        value={text}
                        onChange={(e) => {
                            e.preventDefault();
                            setText(e.target.value);
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
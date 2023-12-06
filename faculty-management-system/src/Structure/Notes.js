import React, { useState } from "react";
import "../styles/Notes.css";

const note = {
    val: "Hello! I am a simple note\nI will show up on the dashboard\nYou can use me to keep remainders",
};

export default function Notes() {
    const [noteValue, setnoteValue] = useState(note.val);

    return (
        <div className="Notes">
            <h1>Notes</h1>
            <div className="Notes-box">
                
                <div className="Bottom">
                    {/* <pre>{i.val}</pre> */}
                    <textarea
                        className="notes-container"
                        type="text"
                        value={noteValue}
                        onChange={(e) => {
                            e.preventDefault();
                            setnoteValue(e.target.value);
                        }}
                    ></textarea>
                </div>
                <div className="Top">
                    <button className="Button--save">Save</button>
                </div>
            </div>
        </div>
    );
}


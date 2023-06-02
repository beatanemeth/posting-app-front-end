import React, { useState } from "react"


function SearchBar({ onQuery }) {
    const [enteredQuery, setEnteredQuery] = useState("");

    function enteredQueryHandler(e) {
        setEnteredQuery(e.target.value);

        const enteredQueryText = enteredQuery;

        onQuery(enteredQueryText);
    }


    return (
        <input
            type="text"
            placeholder="Search Post Title"
            value={enteredQuery}
            onChange={enteredQueryHandler}
        />
    )
}

export default SearchBar;

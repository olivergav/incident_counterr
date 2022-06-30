import React from 'react';

function SetCounter(props) {
    return (
        <div>
            <form onSubmit={(event) => {
                event.preventDefault();
            }}></form>

            <label htmlFor="set-to">Set Count</label>
            <input type="number" id="set-to"/>
            <input type="submit"/>
        </div>
    );
}

export default SetCounter;
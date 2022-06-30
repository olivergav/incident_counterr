import React from 'react';

function Counter() {
    const incident = 'Incident';
    const counter = 0;

    return (
        <div>
            <h1>Days since last {incident}</h1>
            <p>{counter}</p>

            <section>
                <button>Increment</button>
                <button>Reset</button>
                <button>Decrement</button>
            </section>
        </div>
    );
}

export default Counter;
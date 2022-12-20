/*
import React, { useEffect, useState } from 'react';





function App() {

    let [ backendData, setBackendData ] = useState([{}]);
    useEffect(()=> {
        fetch("/api").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data);
            }
        )
    }, [])

    return (
        <div className="App">
            {
            (typeof backendData.users === 'undefined') ?

            (<p>Loading...</p>) :
            (backendData.users.map((user, i) => (
                <p key={i}>{user}</p>
            )))
            }
            test
        </div>
    );
}

export default App;
*/
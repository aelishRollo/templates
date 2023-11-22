import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import { useState } from 'react';



export default function Counter() {

    let [foo, setFoo] = useState(0)     //make foo a stateful variable
    function handleClick() {            //update foo each time the function is called
        setFoo(foo + 1)
    }

    return (
        <div>
            <button onClick={handleClick}>                      
                The Tomes, the Library, the Magic {foo}
            </button>

        </div>
    );
}

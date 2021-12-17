import React from 'react'
import './App.css';
import Example from "./index";
import Reviews from "./Components/Reviews/Reviews";
import Like from "./Icons/Icons";

function App() {


    return (
        <div className="App">
            <h3>Количество звёзд</h3>
            <Example />
            <Reviews />
            <Like />
        </div>
    );
}

export default App;

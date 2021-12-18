import React from 'react'
import './App.css';
import Reviews from "./Components/Reviews/Reviews";
import Filter from "./Components/Filter";

function App() {


    return (
        <div className="App">
            <Filter/>
            <Reviews/>
        </div>
    );
}

export default App;

import React, {useState} from 'react'
import './App.css';
import Reviews from "./Components/Reviews/Reviews";
import Filter from "./Components/Filter";

function App() {

    const [priceFilter, setPriceFilter] = useState([])

    return (
        <div className="App">
            <Filter/>
            <Reviews/>
        </div>
    );
}

export default App;

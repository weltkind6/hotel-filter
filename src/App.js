import React, {useState} from 'react'
import './App.css';
import Reviews from "./Components/Reviews/Reviews";
import Filter from "./Components/Filter";
import {reviewsData} from "./UI/data";

function App() {

    // Count
    const [countFilter, setCountFilter] = useState(reviewsData)
    const [countInput, setCountInput] = useState('')
    // Price
    const [priceInput, setPriceInput] = useState('')


    const filterHandler = () => {
        setCountFilter([...countFilter].filter(el => el.price >= Number(priceInput) && el.count >= Number(countInput)))
    }



    return (
        <div className="App">
            <Filter
                filter={filterHandler}
                setCountInput={setCountInput}
                setPriceInput={setPriceInput}
            />
            <Reviews
                count={countFilter}
            />
        </div>
    );
}

export default App;


//setPriceFilter(([...reviewsData].sort((a, b) => a.count < b.count ? 1 : -1)))

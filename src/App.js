import React, {useState} from 'react'
import './App.css';
import Reviews from "./Components/Reviews/Reviews";
import Filter from "./Components/Filter";
import {reviewsData} from "./UI/data";

function App() {

    const [priceFilter, setPriceFilter] = useState(reviewsData)
    const filterByReviewCount = () => {
        setPriceFilter(([...reviewsData].filter(el => el.count > Number(input))))
    }

    const [input, setInput] = useState('')


    return (
        <div className="App">
            <Filter
                filter={filterByReviewCount}
                setInput={setInput}
            />
            <Reviews
                price={priceFilter}
            />
        </div>
    );
}

export default App;


//setPriceFilter(([...reviewsData].sort((a, b) => a.count < b.count ? 1 : -1)))

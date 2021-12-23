import React, {useState} from 'react'
import Reviews from "./Components/Reviews/Reviews";
import Filter from "./Components/Filter";
import {reviewsData} from "./UI/data";
import RangeSlider from "./UI/RangeSlider";
import "./App.css";




function App() {

    // Count
    const [countFilter, setCountFilter] = useState(reviewsData)
    const [countInput, setCountInput] = useState('')
    // Price
    const [priceInput, setPriceInput] = useState('')
    const [priceInput2, setPriceInput2] = useState('')

    // RangeSlider
    const [val, setVal] = useState([0, 40]);


    const filterHandler = () => {
        setCountFilter([...countFilter]
            .filter(el => el.price >= Number(priceInput) && el.price < Number(priceInput2) && el.count >= Number(countInput)))
    }


    return (
        <div className="App">

            <Filter
                filter={filterHandler}
                setCountInput={setCountInput}
                val={val}
                setVal={setVal}
            />
            <RangeSlider
                val={val}
                setVal={setVal}
            />
            <Reviews
                count={countFilter}
            />
        </div>
    );
}

export default App;



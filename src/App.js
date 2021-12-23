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

    // RangeSlider
    const [val, setVal] = useState([600, 1500]);
    // Filter
    const filterHandler = () => {
        setCountFilter([...countFilter]
            .filter(el => el.price >= val[0] && el.price <= 2300 && el.count >= Number(countInput)))
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



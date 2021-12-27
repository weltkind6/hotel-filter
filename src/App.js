import React, {useState, createContext, useContext} from 'react'
import Reviews from "./Components/Reviews/Reviews";
import Filter from "./Components/Filter/Filter";
import {reviewsData} from "./UI/data";
import RangeSlider from "./UI/RangeSlider";

function App() {

    // Count
    const [countFilter, setCountFilter] = useState(reviewsData)
    const [countInput, setCountInput] = useState('')

    // RangeSlider
    const [val, setVal] = useState([600, 1500]);
    const [filteredStart, setFilteredStart] = useState('')
    console.log(filteredStart)
    // Filter
    const filterHandler = () => {
        setCountFilter([...countFilter]
            .filter(el => el.price >= val[0]
                && el.price <= [val[1]]
                && el.count >= Number(countInput)
                && filteredStart.includes(el.stars)
            ))
    }

    return (

        <div className="App">
            <Filter
                filter={filterHandler}
                setCountInput={setCountInput}
                val={val}
                setVal={setVal}
                setFilteredStart={setFilteredStart}
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



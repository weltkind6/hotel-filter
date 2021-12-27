import React, {useState} from 'react'
import Reviews from "./Components/Reviews/Reviews";
import Filter from "./Components/Filter/Filter";
import {reviewsData} from "./UI/data";
import RangeSlider from "./UI/RangeSlider";
import NotFound from "./Components/NotFound/NotFound";

function App() {

    // Count
    const [countFilter, setCountFilter] = useState(reviewsData)
    const [countInput, setCountInput] = useState('')
    const [postFound, setPostFound] = useState(false)

    // RangeSlider
    const [val, setVal] = useState([600, 1500]);
    const [filteredStart, setFilteredStart] = useState('')

    // Filter
    const filterHandler = () => {
        const filtered = [...countFilter].filter(el => el.price >= val[0]
            && el.price <= [val[1]]
            && el.count >= Number(countInput)
            && filteredStart.includes(el.stars))
        filtered.length > 0 ? setCountFilter(filtered) : setCountFilter([])
        setPostFound(true)
    }

    const resetFilterHandler = () => {
        setCountFilter(reviewsData)
    }

    return (

        <div className="App">
            <Filter
                filter={filterHandler}
                setCountInput={setCountInput}
                val={val}
                setVal={setVal}
                setFilteredStart={setFilteredStart}
                reset={resetFilterHandler}
            />
            <RangeSlider
                val={val}
                setVal={setVal}
            />
            {postFound ? <NotFound/> : <Reviews count={countFilter}/>}
        </div>
    );
}

export default App;



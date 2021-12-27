import React from 'react';
import './Filter.css'
import Example from "./SelectStar/SelectStar";
import ReviewsCount from "../ReviewsCount/ReviewsCount";
import Price from "../Price/Price";




const Filter = ({filter, setCountInput, val, setVal, setFilteredStart}) => {

    const ExampleHandler = example => {
        setFilteredStart(example.map(el => el.id))
    }

    return (
        <div>
            <h3>Количество звёзд</h3>
            <Example
                exam={ExampleHandler}
            />
            <ReviewsCount
                setCountInput={setCountInput}
            />
            <Price
                setVal={setVal}
                val={val}
            />
            <button
                onClick={() => filter()}
                type="button"
                className="btn btn-primary"
            >Применить фильтр
            </button>
        </div>
    );
};

export default Filter;

//
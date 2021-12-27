import React from 'react';
import './Filter.css'
import Example from "./SelectStar/SelectStar";
import ReviewsCount from "../ReviewsCount/ReviewsCount";
import Price from "../Price/Price";


const Filter = ({filter, setCountInput, val, setVal, setFilteredStart, reset}) => {

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
            <div className='buttonsBlock'>
                    <button
                        onClick={() => filter()}
                        type="button"
                        className="btn btn-primary"
                    >Применить фильтр
                    </button>

                   <button
                       style={{border: '2px solid #EAEAEA'}}
                       onClick={() => reset()}
                       type="button"
                       className="btn resetButton">Очистить фильтр
                   </button>
            </div>
        </div>
    );
};

export default Filter;

//
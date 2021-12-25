import React from 'react';
import './Filter.css'
import Example from "./SelectStar/SelectStar";
import ReviewsCount from "../ReviewsCount/ReviewsCount";
import Price from "../Price/Price";




const Filter = ({filter, setCountInput, val, setVal}) => {

    const ExampleHandler = example => {
        if(example.map(i => i.value).includes('one')) {
            console.log('One here!')
        }
        else if(example.map(i => i.value).includes('two')) {
            console.log('Two here!')
        }

        console.log('This arr consist of:', example.map(el => el.id))

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
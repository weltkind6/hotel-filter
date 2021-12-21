import React, {useState} from 'react';
import './Filter.css'
import Example from "../index";
import ReviewsCount from "./ReviewsCount/ReviewsCount";
import Price from "./Price/Price";


const Filter = ({filter, setCountInput, setPriceInput}) => {


    return (
        <div>
            <h3>Количество звёзд</h3>
            <Example/>
            <ReviewsCount
                setCountInput={setCountInput}
            />
            <Price setPriceInput={setPriceInput}/>
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
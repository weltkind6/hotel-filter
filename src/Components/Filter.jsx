import React, {useState} from 'react';
import './Filter.css'
import Example from "../index";
import ReviewsCount from "./ReviewsCount/ReviewsCount";
import Price from "./Price/Price";


const Filter = ({filter, setInput}) => {


    return (
        <div>
            <h3>Количество звёзд</h3>
            <Example/>
            <ReviewsCount
                setInput={setInput}
            />
            <Price/>
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
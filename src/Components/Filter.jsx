import React from 'react';
import './Filter.css'
import Example from "../index";
import ReviewsCount from "./ReviewsCount/ReviewsCount";
import Price from "./Price/Price";

const Filter = () => {
    return (
        <div>
            <h3>Количество звёзд</h3>
            <Example/>
            <ReviewsCount/>
            <Price/>
            <button type="button" className="btn btn-primary">Применить фильтр</button>
        </div>
    );
};

export default Filter;

//
import React from 'react';
import './Filter.css'
import Example from "../index";
import ReviewsCount from "./ReviewsCount/ReviewsCount";
import Price from "./Price/Price";
import {reviewsData} from "../UI/data";

const Filter = () => {
    const filterByPrice = () => {
        console.log(reviewsData.sort((a, b) => a.price < b.price ? 1 : -1))
    }
    return (
        <div>
            <h3>Количество звёзд</h3>
            <Example/>
            <ReviewsCount/>
            <Price/>
            <button
                type="button"
                className="btn btn-primary"
                onClick={filterByPrice}
            >Применить фильтр
            </button>
        </div>
    );
};

export default Filter;

//
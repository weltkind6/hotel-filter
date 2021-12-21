import React, {useState} from 'react';
import './Reviews.css'
import Star, {StarEmpty} from "../../Icons/Icons";
import {reviewsData} from "../../UI/data";


const Reviews = ({count, priceValue}) => {

    const starsRender = (count) => {
        if (count === 1) {
            return <div style={{display: 'flex'}}>
                <Star/> <StarEmpty/> <StarEmpty/> <StarEmpty/> <StarEmpty/>
            </div>;
        } else if (count === 2) {
            return (
                <div style={{display: 'flex'}}>
                    <Star/> <Star/> <StarEmpty/> <StarEmpty/> <StarEmpty/>
                </div>
            );
        } else if (count === 3) {
            return (
                <div style={{display: 'flex'}}>
                    <Star/> <Star/> <Star/> <StarEmpty/> <StarEmpty/>
                </div>
            );
        } else if (count === 4) {
            return (
                <div style={{display: 'flex'}}>
                    <Star/> <Star/> <Star/> <Star/> <StarEmpty/>
                </div>
            );
        } else if (count === 5) {
            return (
                <div>
                    <div style={{display: 'flex'}}>
                        <Star/> <Star/> <Star/> <Star/> <Star/>
                    </div>
                </div>
            );
        }
    };


    return (
        <div className='reviews'>
            {count.map(review => <div className="reviews__wrapper" key={review.id}>
                <div className="reviews__body">
                    <h4>{review.name}</h4>
                    <div className='reviews-rate'>
                        {starsRender(review.stars)}
                        <div style={{marginLeft: '3em'}}>{review.count}</div>
                    </div>
                    <p>{review.body}</p>
                </div>

                <div className='booking-block'>
                    <button type="button" className="btn btn-secondary">
                        Забронировать
                    </button>
                    <div>
                        <div><strong>{review.price} ₽</strong></div>
                        <div>Цена за 1 ночь</div>
                    </div>
                </div>
            </div>)}
        </div>
    );
};

export default Reviews;
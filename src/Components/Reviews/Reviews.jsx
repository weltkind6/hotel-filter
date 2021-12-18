import React from 'react';
import './Reviews.css'
import Like from "../../Icons/Icons";
import {reviewsData} from "../../UI/data";


const Reviews = () => {


    return (
        <div className='reviews'>
            {reviewsData.map(review => <div className="reviews__wrapper">
                <div className="reviews__body">
                    <h4>{review.name}</h4>
                    <div className='reviews-rate'>
                        <Like/>
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
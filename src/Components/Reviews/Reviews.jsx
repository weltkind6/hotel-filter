import React from 'react';
import './Reviews.css'
import Like from "../../Icons/Icons";


const Reviews = () => {
    return (
        <div className='reviews'>
            <div className="reviews__wrapper">
                <div className="reviews__body">
                    <h4>Marina In</h4>
                    <div className='reviews-rate'>
                        <Like/>
                        <div>23 отзыва</div>
                    </div>
                    <p>Этот 4-звездочный отель расположен в центре города. На его территории есть бассейн с терассой и
                        сауна. Из номеров открывается вид на море.</p>
                </div>
            </div>

        </div>
    );
};

export default Reviews;
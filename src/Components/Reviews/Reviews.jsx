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
                        <div style={{marginLeft: '3em'}}>23 отзыва</div>
                    </div>
                    <p>Этот 4-звездочный отель расположен в центре города. На его территории есть бассейн с терассой и
                        сауна. Из номеров открывается вид на море.</p>
                </div>

                <div className='booking-block'>
                    <button type="button" className="btn btn-secondary">
                        Забронировать
                    </button>
                    <div>
                        <div><strong>2 800 ₽</strong></div>
                        <div>Цена за 1 ночь</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Reviews;
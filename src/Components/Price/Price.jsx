import React from 'react';
import './Price.css'
import {Line} from "../../Icons/Icons";

export const Price = ({setPriceInput}) => {

    return (
        <div>
            <h3>Цена</h3>
            <div className='input-block'>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="от 0 ₽"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={e => setPriceInput(e.target.value)}
                    />
                </div>
                <div>
                    <Line/>
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="до 1500 ₽"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={e => console.log(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Price;
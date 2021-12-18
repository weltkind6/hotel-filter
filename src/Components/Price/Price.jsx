import React from 'react';
import './Price.css'
import {Line} from "../../Icons/Icons";

const Price = () => {
    return (
        <div>
            <h3>Цена</h3>
            <div className='input-block'>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="от 0 ₽" aria-label="Username"
                           aria-describedby="basic-addon1"/>
                </div>
                <div>
                    <Line/>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="до 1500 ₽" aria-label="Username"
                           aria-describedby="basic-addon1"/>
                </div>
            </div>
        </div>
    );
};

export default Price;
import React from 'react';
import './Price.css'
import {Line} from "../../Icons/Icons";

export const Price = ({ val, setVal}) => {

    return (
        <div>
            <h3>Цена</h3>
            <div className='input-block'>
                <div className="input-group mb-3">
                    <input
                        value={val[0]}
                        type="text"
                        className="form-control"
                        placeholder="от 0 ₽"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={e => setVal([e.target.value, val[1]])}
                    />
                </div>
                <div>
                    <Line/>
                </div>
                <div className="input-group mb-3">
                    <input
                        value={val[1]}
                        type="text"
                        className="form-control"
                        placeholder="до 1500 ₽"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={e => setVal([val[0], e.target.value])}
                    />
                </div>
            </div>
        </div>
    );
};

export default Price;
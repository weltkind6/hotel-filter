import React from 'react';

const ReviewsCount = ({setCountInput}) => {

    return (
        <div>
            <h3>Количество отзывов</h3>
            <div className="input-group mb-3">
                <input
                    onChange={e => setCountInput(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Например, от 10" aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </div>
        </div>
    );
};

export default ReviewsCount;
import React from 'react'
import './App.css';
import Example from "./index";
import Reviews from "./Components/Reviews/Reviews";
import Like from "./Icons/Icons";
import ReviewsCount from "./Components/ReviewsCount/ReviewsCount";
import Price from "./Components/Price/Price";
import Filter from "./Components/Filter";

function App() {


    return (
        <div className="App">
            <h3>Количество звёзд</h3>
            <Example/>
            <ReviewsCount/>
            <Price/>
            <Filter/>
            <Reviews/>
        </div>
    );
}

export default App;

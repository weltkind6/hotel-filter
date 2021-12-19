import React from "react";
import {ImStarFull} from "react-icons/im";
import {AiOutlineLine} from "react-icons/ai";


const Star = () => {
    return (
        <div>
            <ImStarFull style={{color: 'gold', fontSize: '25px', marginRight: '5px'}}/>
        </div>
    )
}

export const StarEmpty = () => {
    return (
        <div>
            <ImStarFull style={{color: 'gray', fontSize: '25px', marginRight: '5px'}}/>
        </div>
    )
}

export default Star;


export const Line = () => {
    return (<AiOutlineLine style={{color: 'grey', fontSize: '36px', width: '15px', margin: '0 5px'}}/>)
}




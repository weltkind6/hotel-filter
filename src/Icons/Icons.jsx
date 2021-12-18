import React from "react";
import {ImStarFull} from "react-icons/im";
import {AiOutlineLine} from "react-icons/ai";


const Like = () => {
    return (
        <div>
            <ImStarFull style={{color: 'gold', fontSize: '25px'}}/>
            <ImStarFull style={{color: 'gold', fontSize: '25px'}}/>
            <ImStarFull style={{color: 'gold', fontSize: '25px'}}/>
            <ImStarFull style={{color: 'gold', fontSize: '25px'}}/>
            <ImStarFull style={{color: 'gold', fontSize: '25px'}}/>
        </div>
    )
}

export default Like;


export const Line = () => {
    return (<AiOutlineLine style={{color: 'grey', fontSize: '36px', width: '15px', margin: '0 5px'}}/>)
}




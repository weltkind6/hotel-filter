import React from "react"
import {Slider} from "@material-ui/core";

function RangeSlider({val, setVal}) {

    const updateRange = (e, data) => {
        setVal(data);
    };
    return (
        <div className="App">
            <div style={{width: 500, margin: 60}}>
                <Slider
                    value={val}
                    onChange={updateRange}
                    min={300}
                    max={5000}
                />
            </div>
            {" "}
        </div>
    );
}

export default RangeSlider;

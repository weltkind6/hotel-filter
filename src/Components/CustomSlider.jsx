// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Slider from '@mui/material/Slider';
// import {useEffect} from 'react'
//
// export default function RangeSlide() {
//     const [sliderValues, setSliderValues] = React.useState([20, 37]);
//
//     const handleChangeSlider = (event, newValue) => {
//         setSliderValues(newValue);
//
//     };
//
//     return (
//         <Box>
//             <input value={sliderValues[0]}
//                    onChange={e => setSliderValues([e.target.value,sliderValues[1]])}
//             />
//             <input value={sliderValues[1]}
//                    onChange={e => setSliderValues([sliderValues[0],e.target.value])}
//             />
//             <Slider
//                 getAriaLabel={() => 'Temperature range'}
//                 value={sliderValues}
//                 onChange={(handleChangeSlider)}
//                 valueLabelDisplay="auto"
//             />
//         </Box>
//     );
// }
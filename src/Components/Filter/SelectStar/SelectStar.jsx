import {components} from "react-select";
import makeAnimated from "react-select/animated";
import React, {useState} from "react";
import MySelect from "../../../UI/MySelect";
import {colourOptions} from "../../../UI/data";

const Option = props => {
    return (
        <div>
            <components.Option {...props}>
                <input
                    type="checkbox"
                    checked={props.isSelected}
                    onChange={() => null}
                />{" "}
                <label>{props.label}</label>
            </components.Option>
        </div>
    );
};

const MultiValue = props => (
    <components.MultiValue {...props}>
        <span>{props.data.label}</span>
    </components.MultiValue>
);

const animatedComponents = makeAnimated();

// export default class Example extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             optionSelected: null
//         };
//     }
//
//     handleChange = selected => {
//         this.setState({
//             optionSelected: selected
//         });
//     };
//
//     render() {
//
//         return (
//             <MySelect
//                 options={colourOptions}
//                 isMulti
//                 closeMenuOnSelect={false}
//                 hideSelectedOptions={false}
//                 components={{Option, MultiValue, animatedComponents}}
//                 onChange={this.handleChange}
//                 allowSelectAll={true}
//                 value={this.state.optionSelected}
//             />
//         );
//     }
// }

const Example = ({exam}) => {
    const [state, setState] = useState({optionSelected: null})
    // const [selectedValue, setSelectedValue] = useState('')

    const handleChange = selected => {
        setState({
            optionSelected: selected
        });
       exam(selected)
    };

    return (
        <MySelect
            options={colourOptions}
            isMulti
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            components={{Option, MultiValue, animatedComponents}}
            onChange={handleChange}
            allowSelectAll={true}
            value={state.optionSelected}
        />
    )

}

export default Example


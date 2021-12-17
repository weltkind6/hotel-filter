import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import makeAnimated from "react-select/animated";
import {components} from "react-select";
import {colourOptions} from "./UI/data";
import MySelect from "./UI/MySelect";

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

export default class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            optionSelected: null
        };
    }

    handleChange = selected => {
        this.setState({
            optionSelected: selected
        });
    };

    render() {
        return (
            <MySelect
                options={colourOptions}
                isMulti
                closeMenuOnSelect={false}
                hideSelectedOptions={false}
                components={{Option, MultiValue, animatedComponents}}
                onChange={this.handleChange}
                allowSelectAll={true}
                value={this.state.optionSelected}
            />
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Example/>, rootElement);

reportWebVitals();

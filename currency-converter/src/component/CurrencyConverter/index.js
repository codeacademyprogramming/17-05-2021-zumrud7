import "./index.scss";
import React, { Component } from "react";
import Select from "react-select";
import RateValue from "./RateValue";
// import RateValue from "./rateValue";
// import RateValue from "./rateValue";
import axios from "axios";
// import rates from '../../data/rates.json'


class CurrencyConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectOptions: [],
      // id: "",
      // name: "",
    };
  }

  async getOptions() {
    const res = await axios.get("rates.json");
    const data = res.data;

    const options = data.map((d) => ({
      value: d.value,
      label: d.code,
    }));


    this.setState({ selectOptions: options });

  }

  handleChange(e) {
    this.setState({ value: e.value, code: e.label });
  }

  componentDidMount() {
    this.getOptions();
  }

  render() {
    const selectStyles = {
      control: (base) => ({
        ...base,
        fontSize: "11px",
        color: "#9DA5B7",
        height: "40px",
        border: "none",
        boxShadow:
          "-7px -7px 10px rgba(255, 255, 255, 0.5), 7px 7px 10px rgba(202, 206, 220, 0.31)",
        borderRadius: "10px",
        "&:focus": {
          border: "0 !important",
        },
      }),
      valueContainer: (provided, state) => ({
        ...provided,
        height: "40px",
      }),
      indicatorSeparator: (state) => ({
        display: "none",
      }),
      indicatorsContainer: (provided, state) => ({
        ...provided,
        height: "40px",
        padding: "0px!important",
      }),
      input: (provided, state) => ({
        ...provided,
        margin: "0px",
      }),
      indicatorContainer: (provided, state) => ({
        ...provided,
        height: "40px",
        padding: "0px!important",
      }),
    };


    return (
      <div className="container">
        <div className="currencyConverter">
          <div className="converter-box">
            <div className="wrapper">
              <label>From</label>
              <div className="input_wrapper">
                <input type="text" defaultValue="1" />
                <div className="selectBox">
                  <Select
                    options={this.state.selectOptions}
                    onChange={this.handleChange.bind(this)}
                    styles={selectStyles}
                  />
                </div>
              </div>
            </div>
            <div className="pattern">
              <img src={`${process.env.PUBLIC_URL}/assets/switch.svg`} />
            </div>
            <div className="wrapper">
              <label>To</label>
              <div className="input_wrapper">
                <RateValue />
                <div className="selectBox">
                  <Select
                    options={this.state.selectOptions}
                    onChange={this.handleChange.bind(this)}
                    styles={selectStyles}
                  />
                </div>
              </div>
            </div>
          </div>
          <button className="btn-blue">Exchange</button>
        </div>
      </div>
    );
  }
}

export default CurrencyConverter;

import React, { Component } from 'react'

class ConvertBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      TempC: '',
      TempF: '',
    }
  }

  handleChange = (e) => {
    let TempF, TempC

    let value = parseFloat(e.target.value)
    console.log('==>: ConvertBox -> handleChange -> value', value)
    let name = e.target.name

    // if (!value.isNumber()) return
    // if (Number.isNaN(value)) {

    // }
    if (isNaN(value)) {
      this.setState({
        TempC: '',
        TempF: '',
      })
    } else if (name === 'C') {
      TempF = value * 1.8 + 32

      this.setState({
        TempC: value,
        TempF,
      })
    } else if (name === 'F') {
      TempC = (value - 32) / 1.8
      this.setState({
        TempF: value,
        TempC,
      })
    }
  }

  render() {
    const { TempC, TempF } = this.state

    return (
      <form className="ConvertBox">
        <fieldset>
          <legend>Enter your C</legend>
          {/* <input type="text" onChange={(e) => this.handleChange(e)} value={TempC} /> */}
          <textarea
            onChange={(e) => this.handleChange(e)}
            value={TempC}
            name="C"
            rows="2"
          ></textarea>
        </fieldset>
        <fieldset>
          <legend>Enter your F</legend>
          <textarea
            onChange={(e) => this.handleChange(e)}
            value={TempF}
            name="F"
            rows="2"
          ></textarea>
        </fieldset>
      </form>
    )
  }
}

export default ConvertBox

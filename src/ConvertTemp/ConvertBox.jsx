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

    const value = parseFloat(e.target.value)
    const name = e.target.name

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
    const { handlePassTemp } = this.props

    return (
      <form className="ConvertBox">
        <fieldset>
          <legend>Enter your C</legend>

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
        <button onClick={handlePassTemp(TempC)}>check</button>
      </form>
    )
  }
}

export default ConvertBox

import React, { Component } from 'react'
import ConvertBox from './ConvertBox'
import TempInfo from './TempInfo'

export default class ConvertTemp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      temp: '',
    }
  }

  handlePassTemp = (temper) => (event) => {
    event.preventDefault()
    this.setState({
      temp: temper,
    })
  }

  render() {
    return (
      <div className="ConvertTemp">
        <ConvertBox handlePassTemp={this.handlePassTemp} />

        <TempInfo temp={this.state.temp} />
      </div>
    )
  }
}

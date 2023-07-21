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

  handlePassTemp = (temp) => {
    console.log(temp)
  }

  render() {
    return (
      <div className="ConvertTemp">
        <ConvertBox handlePassTemp={this.handlePassTemp} />

        <TempInfo temp={this.temp} />
      </div>
    )
  }
}

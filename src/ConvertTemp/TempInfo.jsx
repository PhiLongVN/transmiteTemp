import React, { Component } from 'react'

class TempInfo extends Component {
  render() {
    const { temp } = this.props
    console.log('==>: TempInfo -> render -> temp', temp)
    return (
      <>
        {(() => {
          if (temp === '') return

          return <>{temp >= 100 ? <div>lon hon 100</div> : <div>ko hon</div>}</>
        })()}
      </>
    )
  }
}

export default TempInfo

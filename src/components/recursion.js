import React, { Component } from 'react'

export default class Recursion extends Component{
  state = { recursive: false, string: "Recursion!!" }


  render(){
    console.log(this.state.string)
    this.setState({recursive: true, string: `${this.state.string} Recursion!!` })
    return(
      <div>

      </div>
    )
  }

}

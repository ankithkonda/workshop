import React, { Component } from 'react'

class MyInputComponent extends Component {

    render(){


        return <input type="string" value={this.props.title} onChange={(e)=>{

            this.props.onInputChange(e.target.value)

        }} placeholder='Title Input'/>
    }
}

export default MyInputComponent
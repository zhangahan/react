import React, { Component } from 'react';
import './login.css';

class InputItem extends Component{
    render () {
        return (
            <input type={this.props.type} id={this.props.id} placeholder={this.props.title} className={this.props.className} defaultValue={this.props.name}/>
        )
    }
}
export default InputItem;
import React, { Component } from 'react';
import select from './img/444.png';
import './login.css';

class SelectImg extends Component{
    render () {
        return (
            <img src={select} alt="" className={this.props.class} />
        )
    }
}
export default SelectImg;
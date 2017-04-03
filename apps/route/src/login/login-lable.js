import React, { Component } from 'react';
import InputItem from './login-input';
import Identifying from './identifying';
import './login.css';

class LableItem extends Component{
    render () {
        return (
            <label htmlFor="">
                <InputItem id={"write"} title={"验证码"} type={"text"}/>
                <Identifying getId={this.props.getId}/>
            </label>
        )
    }
}
export default LableItem;
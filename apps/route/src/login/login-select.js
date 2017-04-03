import React, { Component } from 'react';
import './login.css';

class SelectItem extends Component{
    render () {
        return (
            <select type="text" className="select-item"  defaultValue="0">
                {
                    this.props.prompt.map((val,index)=><option key={index} value={index}>{val}</option>)
                }
                </select>
        )
    }
}
export default SelectItem;
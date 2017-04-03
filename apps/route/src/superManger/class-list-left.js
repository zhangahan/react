import React, { Component } from 'react';
import '../Background-home/background-home.css';

class ClassListLeft extends Component{
    render () {
        return (
            <li>
                <div className="brbt_left">
                    <div className="brbt_left_img">
                        <img src={this.props.img} alt="" />
                        <span>{this.props.course}</span>
                    </div>
                    <div className="tuoyuan"></div>
                </div>
                <div className="brbt_right">{this.props.store}</div>
            </li>
        )
    }
}
export default ClassListLeft;


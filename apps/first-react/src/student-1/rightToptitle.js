/**
 * Created by Administrator on 2017/3/1 0001.
 */
import React , { Component } from 'react';
import './student.css';

class RightToptitle extends Component {
    render() {
        return (
            <div className="box_body_item" style={{backgroundColor:this.props.bg}}>
                <div className="liebiao_a" style={{backgroundImage:`url(${this.props.img})`}}></div>
                <h2 style={{color:this.props.color}}>{this.props.title}</h2>
            </div>
        );
    }
}

export default RightToptitle;
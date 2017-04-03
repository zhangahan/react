/**
 * Created by Administrator on 2017/3/1 0001.
 */
import React , { Component } from 'react';
import './student.css';
import MoneyImg from './money.png';

class RightTop extends Component {
    render() {
        return (
            <div className="box_body_header">
                <div className="money-logo" style={{backgroundImage:`url(${MoneyImg})`}}></div>
                <div className="box_body_title">
                    <h1>本教学周期薪酬</h1>
                    <p>The teaching cycle pay</p>
                </div>
                <h2 className="number"><span>￥</span>{this.props.data.score}</h2>
            </div>
        );
    }
}

export default RightTop;
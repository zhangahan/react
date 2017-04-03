import React, { Component } from 'react';
import './background-home.css';
import money from './img/money.png';

class StudentDetailRight extends Component{
    render () {
        return (
            <div className="details-right">
                <div className="details-right-inner">
                    <img src={money} alt="" />
                        <h1>
                            <span>本教学周期薪酬</span>
                        </h1>
                </div>
                <h1 className="details-right-score"><span>￥</span>{this.props.student.score}</h1>
            </div>
        )
    }
}
export default StudentDetailRight;
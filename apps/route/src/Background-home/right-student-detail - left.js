import React, { Component } from 'react';
import './background-home.css';

class StudentDetailLeft extends Component{
    render () {
        return (
                <div className="details-left">
                    <div className="details-left-top">{this.props.student.sname}</div>
                    <div className="details-left-bottom">
                        <h1>学号：{this.props.student.sno}</h1>
                        <h1>市场部：{this.props.student.market}</h1>
                        <h1>入学日期：2016年5月</h1>
                        <h1>学制：{this.props.student.term}</h1>
                    </div>
                </div>
        )
    }
}
export default StudentDetailLeft;
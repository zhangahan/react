import React, { Component } from 'react';
import '../Background-home/background-home.css';
import logo from '../Background-home/img/logo.png';



class Header extends Component {
    constructor(props) {
        super(props);
        this.whitchCourse = this.whitchCourse.bind(this);
       
    }
    whitchCourse() {
        let cycle;
        let time = new Date().getYear() + 1900;
        this.props.courseList.map((obj, index)=> {
            // console.log(this.props.courseList[index].cname);
            if (obj.cname == this.props.grade.course) {
                cycle =<div className="teaching-cycle">
                            <span>{time}&nbsp;第{index+1}教学周期</span>
                            <span>|</span>
                            <span>{this.props.courseList[index].cname}</span>
                        </div>
            }
        }, this);
        return cycle
    }
    render() {
        // console.log(this.props.courseList);
        return (
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                {this.whitchCourse()}
                <div className="teacher">
                    <span>任课老师：{this.props.grade.teacher}</span>
                    <span>|</span>
                    <span>班主任：{this.props.grade.header}</span>
                </div>
                <div className="link">
                    <img src={this.props.img} alt="" onClick={this.props.click}/>
                </div>
            </div>
        );
    }
    
}


export default Header;
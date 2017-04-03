import React , { Component } from 'react';
import './student.css';
import logo from './logo.png';


class Header extends Component {
    render() {
        return (
            <header>
                <ul className="nav">
                    <li>
                        <img src={logo} alt=""/>
                    </li>
                    <li>{this.props.date.year}年&nbsp;{this.props.date.name}</li>
                    <li>|</li>
                    <li>第三门课程《html/css》</li>
                    <li>任课老师：{this.props.teacher.teacher}</li>
                    <li>|</li>
                    <li>班主任：{this.props.teacher.header}</li>
                    <li onClick={()=>this.props.fn}>
                        <img src={this.props.img} onClick={()=>this.props.fnB(0)}/>
                    </li>
                </ul>
            </header>
        );
    }
}

export default Header;
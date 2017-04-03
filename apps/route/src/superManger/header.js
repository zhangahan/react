import React, { Component } from 'react';
import '../Background-home/background-home.css';
import logo from '../Background-home/img/logo.png';
import setup from '../Background-home/img/setup.png';
import back from '../Background-home/img/administrator.png';



class             Header extends Component {
    constructor(props) {
        super(props);
       
       
    }

    render() {
        // console.log(this.props.courseList);
        return (
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>

                <div className="teacher teacher-change">
                    <span>数字媒体学院：{this.props.store.grade.gname}</span>
                    <span>|</span>
                    <span>{this.props.store.period.name}</span>
                </div>
                <div className="link">
                    {
                        this.props.store.set==1?<img src={setup}  onClick={()=>this.props.store.onHeader(2)}/>:<img src={back}  onClick={()=>this.props.store.onHeader(1)}/>
                    }

                </div>
            </div>
        );
    }
    
}


export default Header;
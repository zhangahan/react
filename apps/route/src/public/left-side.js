import React, { Component } from 'react';
import LeftSideTop from './left-side-top';
import LeftSideBottom from './left-side-bottom';
import '../Background-home/background-home.css';

class LeftSide extends Component {
    render() {
        return (
            <div className="left-box">
                <LeftSideTop />
                <ul className="left-box-bottom">
                    {
                        this.props.pathname=="/student/repos"||this.props.pathname=="/student/detail"?this.props.students.map((obj,index)=>{
                            return (
                                <LeftSideBottom student={obj} key={index} changeIndex={this.props.changeIndex} index={index} clickedStudent={this.props.clickedStudent}/>
                            )
                        },this):<li onClick={()=>this.props.changeIndex(this.props.clickedStudent)} style={{backgroundColor:"#eed63b",color:"#333",fontWeight:"bold"}}>学生管理</li>
                    }
                </ul>
            </div>
        );
    }
}

export default LeftSide;

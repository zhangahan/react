import React, { Component } from 'react';
import '../Background-home/background-home.css';

class LeftSideBottom extends Component {
    render() {
        // console.log(this.props.name);
        return (
            <li onClick={()=>this.props.changeIndex(this.props.index)}
                style={this.props.clickedStudent==this.props.index?{backgroundColor:"#eed63b",color:"#333",fontWeight:"bold"}:{}}>{this.props.student.sname}</li>
        )
    }
}

export default LeftSideBottom;

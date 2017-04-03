import React, { Component } from 'react';
import '../Background-home/background-home.css';

class LeftSideBottom extends Component {
    render() {
        // console.log(this.props.name);
        return (
            <li onClick={()=>this.props.store.onLink(this.props.index)}
                style={this.props.store.linkIndex==this.props.index?{backgroundColor:"#eed63b",color:"#333",fontWeight:"bold"}:{}}>{this.props.students.sname}</li>
        )
    }
}

export default LeftSideBottom;

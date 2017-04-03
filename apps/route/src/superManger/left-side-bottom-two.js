import React, { Component } from 'react';
import '../Background-home/background-home.css';

class LeftSideBottomTwo extends Component {
    render() {
        // console.log(this.props.name);
        return (
            <ul className="left-box-bottom">
                <li onClick={()=>this.props.store.onHeader(2)} style={this.props.store.set==2?{backgroundColor:"#eed63b",color:"#333",fontWeight:"bold"}:{}}>班级设置</li>
                <li onClick={()=>this.props.store.onHeader(3)} style={this.props.store.set==3?{backgroundColor:"#eed63b",color:"#333",fontWeight:"bold"}:{}}>奖惩设置</li>
            </ul>

        )
    }
}

export default LeftSideBottomTwo;

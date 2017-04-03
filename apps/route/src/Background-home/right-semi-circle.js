import React, { Component } from 'react';
import '../Background-home/background-home.css';

class SemiCircle extends Component {
    constructor(props) {
        super(props);
        this.changeIndex = this.changeIndex.bind(this);
    }
    render() {
        // console.log(this.props.obj);  
        return (
            <li onClick={this.changeIndex}>{this.props.obj.sname}</li>
        );
    }
    changeIndex(val,index){
        this.props.changeContorl(this.props.index);
        this.props.showMask(this.props.obj);
    }
}

export default SemiCircle;

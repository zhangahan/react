import React, { Component } from 'react';
import '../Background-home/background-home.css';

class MinusItem extends Component {
    constructor(props) {
        super(props);
        this.changeIndex = this.changeIndex.bind(this);
    }
    render() {
        // console.log(this.props.rewards);
        return (
            <li onClick={this.changeIndex}>
                <div className="circle"></div>
                <h2>{this.props.rewards.score}<span>$</span></h2>
                <h1>{this.props.rewards.name}</h1>
            </li>
        )
    }
    changeIndex(val,index){
        this.props.changeContorl(this.props.index);
        this.props.showMask(this.props.rewards);
    }
}

export default MinusItem;

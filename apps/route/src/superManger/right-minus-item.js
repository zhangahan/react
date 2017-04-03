/**
 * Created by Administrator on 2017/3/30 0030.
 */
import React, { Component } from 'react';
import '../Background-home/background-home.css';

class MinusItem extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        // console.log(this.props.rewards);
        return (
            <li onClick={()=>this.props.store.onMask(this.props.obj)}>
                <div className="circle"></div>
                <h2>{this.props.obj.score}<span>$</span></h2>
                <h1>{this.props.obj.name}</h1>
            </li>
        )
    }

}

export default MinusItem;
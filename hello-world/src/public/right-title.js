import React, { Component } from 'react';
import '../Background-home/background-home.css';


class RightSideTitle extends Component {
    render() {
        return (
            <div className="middle-title" style={{backgroundColor:this.props.bg}}>
                <div className="list-icon" style={{marginTop:this.props.marginTop}}>
                    <img src={this.props.img} alt="" />
                </div>
                <h1 style={{color:this.props.color}}>{this.props.name}</h1>
            </div>
        )
    }
}

export default RightSideTitle;

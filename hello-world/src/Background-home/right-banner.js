import React, { Component } from 'react';
import '../Background-home/background-home.css';
import money from './img/money.png'

class RightSideBanner extends Component {
    render() {
        return (
            <div className="middle-banner">
                <div className="middle-banner-inner">
                    <div className="money">
                        <img src={money} alt="" />
                    </div>
                    <h1 className="banner-title">{this.props.title}</h1>
                    <h1 className="banner-score"><span>￥</span>{this.props.score}</h1>
                </div>
            </div>
        )
    }
}

export default RightSideBanner;

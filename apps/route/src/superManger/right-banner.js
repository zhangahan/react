import React, { Component } from 'react';
import '../Background-home/background-home.css';
import money from '../Background-home/img/money.png'

class RightSideBanner extends Component {
    render() {
        return (
            <div className="middle-banner" style={{backgroundColor:this.props.background}}>
                <div className="middle-banner-inner">
                    <div className="money">
                        <img src={money} alt="" />
                    </div>
                    <h1 className="banner-title">{this.props.title}</h1>
                    <h1 className="banner-score"><span>￥</span>{this.props.store.grades[this.props.store.ulIndex].list[this.props.store.linkIndex].score}</h1>
                </div>
            </div>
        )
    }
}

export default RightSideBanner;

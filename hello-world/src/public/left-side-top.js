import React, { Component } from 'react';
import '../Background-home/background-home.css';
import logoImg from '../Background-home/img/logo-img.png'

class LeftSideTop extends Component {
    render() {
        return (
            <div className="left-box-top" style={{backgroundImage:`url(${logoImg})`}}>
                <div className="left-top-black">
                    <div className="head-portrait">
                        <img src={logoImg} alt="" />
                    </div>
                    <h4>WEB1508A</h4>
                    <h4>人数：29人</h4>
                    <h4>总额：33000元</h4>
                    <h6>2017年2月16日</h6>
                </div>
            </div>
        )
    }
}

export default LeftSideTop;
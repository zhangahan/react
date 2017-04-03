import React, { Component } from 'react';
import '../Background-home/background-home.css';
import logoImg from '../Background-home/img/logo-img.png'

class LeftSideTop extends Component {
    render() {
        let time=this.props.store.grade.updateTime;
        return (
            <div className="left-box-top" style={{backgroundImage:`url(${logoImg})`}}>
                <div className="left-top-black">
                    <div className="head-portrait">
                        <img src={logoImg} alt="" />
                    </div>
                    <h4>WEB{this.props.store.grade.gname}</h4>
                    <h4>人数：{this.props.store.grade.gcount}人</h4>
                    <h4>总额：{this.props.store.grade.gscore}元</h4>
                    <h6>{`${time.slice(0,4)}年${time.slice(5,7)}月${time.slice(8,10)}日`}</h6>
                </div>
            </div>
        )
    }
}

export default LeftSideTop;
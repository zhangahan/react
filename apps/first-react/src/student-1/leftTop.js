/**
 * Created by Administrator on 2017/2/28 0028.
 */
import React , { Component } from 'react';
import './student.css';
import Headportrait from './class_title.png';
import LogoImg from './logo-img.png';


class LeftTop extends Component {
    render() {
        return (
            <div>
                <div className="side_left_header">
                    <img src={Headportrait} alt=""/>
                    <div className="mohu"></div>
                    <div className="radius_header">
                        <div className="radius_header_top" style={{backgroundImage:`url(${LogoImg})`}}></div>
                        <span>{this.props.teacher.gname}</span>
                        <span>人数：{this.props.teacher.gcount}人</span>
                        <span>总额：{this.props.teacher.gscore}</span>
                        <span>{this.props.date.startDate}</span>
                    </div>
                </div>

            </div>
        );
    }
}

export default LeftTop;
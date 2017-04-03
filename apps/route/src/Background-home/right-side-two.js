import React, { Component } from 'react';
import './background-home.css';
import SemiCircle from './right-semi-circle';
import RightSideTitle from '../public/right-title.js';
import listO from './img/list1.png';

class RightSideTwo extends Component {
    
    render() {
        // console.log(this.props.student);
        return (
            <div className="middle">
                <div className="middle-inner">
                    <RightSideTitle img={listO} name={"奖励加薪项目"} />
                    <ul className="semi-circle">
                        {
                            this.props.studentArr.map((obj,index)=>{
                                return(
                                        <SemiCircle key={index} obj={obj} index={index} showMask={this.props.showMask} numColor={this.props.numColor} changeColor={this.props.changeColor} changeContorl={this.props.changeContorl}/>
                                    )

                            })
                        }

                        <li onClick={()=>this.props.showMask(this.props.studentArr[0])}>+</li>
                    </ul>

                </div>
            </div>
        )
        
    }

}

export default RightSideTwo;

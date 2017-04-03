import React, { Component } from 'react';
import '../Background-home/background-home.css';
import RightSideBanner from './right-banner.js';
import RightSideTitle from '../public/right-title.js';
import listO from './img/list1.png';
import listTwo from './img/list2.png';
import BonusItem from './right-bonus-item.js';
import MinusItem from './right-minus-item.js'

class RightSide extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="middle" >
                <div className="middle-inner">
                    <RightSideBanner title={"本教学周期薪酬"} score={this.props.student.score} clickDetail={this.props.clickDetail} detail={"查看详情>>"}/>
                    <RightSideTitle img={listO} name={"奖励加薪项目"} />
                    <ul className="bonus-items">
                        {
                            this.props.rewards.map((obj,index)=>{
// console.log(index)
                                if(obj.type==1){
                                    // arr.push(obj);
                                    return (
                                            <BonusItem
                                                key={index}
                                                rewards={obj}
                                                showMask={this.props.showMask}
                                                changeContorl={this.props.changeContorl}
                                                index={index}
                                                numColor={this.props.numColor}
                                                changeColor={this.props.changeColor}
                                            />
                                        )
                                }
                            },this)
                        }
                    </ul>
                    <RightSideTitle img={listTwo} name={"惩罚减薪项目"} bg={"#544B14"} color={"#fff"} marginTop={"0"} />
                    <ul className="minus-item">
                        {
                            this.props.rewards.map((obj,index)=>{
                                if(obj.type==2){
                                    return (
                                        <MinusItem key={index}
                                                   rewards={obj}
                                                   showMask={this.props.showMask}
                                                   index={index}
                                                   changeContorl={this.props.changeContorl}/>
                                    )
                                }
                            },this)
                        }
                    </ul>
                </div>
            </div>
        )
    }

}

export default RightSide;

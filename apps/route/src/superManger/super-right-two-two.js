/**
 * Created by Administrator on 2017/3/29 0029.
 */
import React, { Component } from 'react';
import '../Background-home/background-home.css';
import  RightSideTitle from "../public/right-title";
import MinusItem from "./right-minus-item";
import AddItem from "./right-bonus-item"
import list1 from "../Background-home/img/list1.png";
import list2 from "../Background-home/img/list2.png"

class RightSuperTwoRight extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="middle" >
                <div className="middle-inner">
                    <RightSideTitle img={list1} name={"奖励加薪项"} />
                    <ul className="bonus-items">
                        {
                            this.props.store.rewards.map((obj,index)=>{
                                if(obj.type==1){
                                    return(
                                        <AddItem key={index} index={index}  store={this.props.store} obj={obj}/>
                                    )
                                }
                            })
                        }
                    </ul>

                    <RightSideTitle img={list2} name={"惩罚减薪项"} bg={"#544B14"} color={"#fff"} marginTop={"0"}/>
                    <ul className="minus-item">
                        {
                            this.props.store.rewards.map((obj,index)=>{
                                if(obj.type==2){
                                    return(
                                        <MinusItem key={index} index={index}  store={this.props.store} obj={obj}/>
                                    )
                                }
                            })
                        }
                    </ul>

                </div>
            </div>
        )
    }

}

export default RightSuperTwoRight;

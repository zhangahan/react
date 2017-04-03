import React , { Component } from 'react';
import './background-home.css';

class Mask extends Component {
    render() {
        // console.log(this.props.reward);
        return (
            <div className="maskbox" style={{display:this.props.flag==false?"none":"block"}}>
                <div className="mask">
                    <div className="mask-list">
                        <p>{this.props.reward.type==1?"奖励加薪项目":"惩罚减薪项目"}</p>
                        <div className="changess">
                            <h1>{this.props.reward.name}</h1>
                            <h2>{this.props.reward.type==1?"+":""}{this.props.reward.score}<span>$</span></h2>
                        </div>
                        <label>
                            <div className="btn btn-n" onClick={this.props.cancelMask}>取消</div>
                            <div className="btn btn-y" onClick={()=>this.props.changeScore(this.props.reward)}>确定</div>
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

export default Mask;

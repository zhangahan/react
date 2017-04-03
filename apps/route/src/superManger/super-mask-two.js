/**
 * Created by Administrator on 2017/3/30 0030.
 */
import React , { Component } from 'react';
import '../Background-home/background-home.css';
import select from '../Background-home/img/select.png'

class SuperMaskTwo extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="popup_box" style={this.props.store.flag==false?{display:"none"}:{display:"block"}}>
                <div className="popup_box_bg">
                    <div className="popup popup-change">
                        <p>学生基本信息</p>
                        <form action="">
                            <label htmlFor="">
                                <div className="label_div">奖金</div>
                                <input type="text" placeholder={this.props.store.flag.name} ref="moneyName"/>
                            </label>
                            <label htmlFor="">
                                <div className="label_div">奖项</div>
                                <input type="text" placeholder={this.props.store.flag.score} ref="listName"/>
                            </label>
                            <label htmlFor="">
                                <div className="label_div">状态</div>
                                <select name="" id="" style={{backgroundImage:`url(${select})`}}>
                                    <option value="">正常</option>
                                    <option value="">保留</option>
                                </select>
                            </label>
                            <label htmlFor="">
                                <div className="close" onClick={()=>this.props.store.onMask(false)}>取消</div>
                                <input type="button" value="确定" onClick={()=>this.props.store.onMask(false)}/>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SuperMaskTwo;

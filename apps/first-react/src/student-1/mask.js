/**
 * Created by Administrator on 2017/3/2 0002.
 */
import React , { Component } from 'react';
import './student.css';

class Mask extends Component {
    constructor(props){
        super(props);
        this.remove=this.remove.bind(this);
        this.sure=this.sure.bind(this);
        this.state={
            score:this.props.data.score
        }
    }
    render() {
        console.log(this.props.nameNum)
        console.log(this.props.names)
        return (
            <div className="maskbox" style={this.props.name>-1?{display:"block"}:{display:"none"}}>
                <div className="mask">
                    <div className="mask-list">
                        <p>{this.props.name<=this.props.nameNum?"奖励加薪项目":"惩罚减薪项目"}</p>
                        <div className="changess">
                            <h1>{this.props.names.id<this.props.nameNum?this.props.names.name:this.props.names.name}</h1>
                            <h2>{this.props.names.id<this.props.nameNum?this.props.names.score:this.props.names.score}<span>$</span></h2>
                        </div>
                        <label>
                            <div className="btn btn-n" onClick={this.remove}>取消</div>
                            <div className="btn btn-y" onClick={this.sure}>确定</div>
                        </label>
                    </div>
                </div>
            </div>
        )
    }
    remove(){
        this.props.changeBoxR(-1);
    }
    sure(){
        this.props.changeBoxR(-1);
        var score = (this.props.data.score)+=(this.props.names.id<this.props.nameNum.id?this.props.names.score:this.props.names.score);
        this.setState({
            score:score
        })
    }
}

export default Mask;
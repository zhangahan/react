import React, { Component } from 'react';
import '../Background-home/background-home.css';

 class BonusItem extends Component {
     constructor(props) {
         super(props);
        this.changeIndex = this.changeIndex.bind(this);
     }
    render() {
        // console.log(this.props.color)
        // console.log(this.props.index);
        var colors=["#5ac76c","#dea033","#dd3333","#5bc6bb","#5a88c6","#885ac6","#ff7f50","#6495ed","#2f4f4f","#daa520"];
        // console.log(this.props.arr);
        return (
            <li
                style={this.props.numColor==this.props.rewards.id?{backgroundColor:colors[this.props.index%5]}:{}}
                onClick={this.changeIndex} 
                onMouseOver={()=>this.props.changeColor(this.props.rewards)}>
                <h1 style={this.props.numColor==this.props.rewards.id?{color:"#fff"}:{color:colors[this.props.index%5]}}>{this.props.rewards.name}</h1>
                <h2 style={this.props.numColor==this.props.rewards.id?{color:"#fff"}:{color:colors[this.props.index%5]}}>+{this.props.rewards.score}<span style={this.props.numColor==this.props.rewards.id?{color:"#fff"}:{}}>$</span></h2>
            </li>
        )
    }
     changeIndex(val,index){
         this.props.changeContorl(this.props.index);
         this.props.showMask(this.props.reward);
     }
}

export default BonusItem;


// onMouseOver={()=>this.props.MouseOver(this.props.rewards)} style={this.props.numI==this.props.rewards.id-2?{backgroundColor:colors[this.props.index>=colors.length?this.props.index-colors.length:this.props.index],color:"#fff",boxShadow:"0 0 10px"+colors[this.props.index>=colors.length?this.props.index-colors.length:this.props.index]}:{borderTopWidth:0,borderLeftWidth:0,borderRightWidth:0,borderBottomWidth:"1px",borderColor:colors[this.props.index>=colors.length?this.props.index-colors.length:this.props.index],borderStyle:"solid",color:colors[this.props.index>=colors.length?this.props.index-colors.length:this.props.index]}} onMouseOut={()=>this.props.MouseOut(this.props.rewards)}
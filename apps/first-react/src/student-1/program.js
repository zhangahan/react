/**
 * Created by Administrator on 2017/3/2 0002.
 */
import React , { Component } from 'react';
import './student.css';

class Program extends Component {
    constructor(props) {
        super(props);
        this.changeColor = this.changeColor.bind(this);
        this.changeColorLeave = this.changeColorLeave.bind(this);
        this.state = {
            color:'',
            num:0
        }
    }
    render() {
        var names = this.props.name;
        var colors=["#5ac76c","#dea033","#dd3333","#5bc6bb","#5a88c6","#885ac6","#ff7f50","#6495ed","#2f4f4f","#daa520"];
        return (
            <ul className="box_body_pay">
                {
                    names.map(function(value,index){
                        return(

                            <li key={index} onClick={()=>this.props.fn(index)} onMouseOver={()=>this.changeColor(value)} style={this.state.num==value.id-2?{backgroundColor:colors[index>=colors.length?index-colors.length:index],color:"#fff",boxShadow:"0 0 10px"+colors[index>=colors.length?index-colors.length:index]}:{borderTopWidth:0,borderLeftWidth:0,borderRightWidth:0,borderBottomWidth:"1px",borderColor:colors[index>=colors.length?index-colors.length:index],borderStyle:"solid",color:colors[index>=colors.length?index-colors.length:index]}} onMouseOut={()=>this.changeColorLeave(value)}>
                                <h2 style={this.state.num==value.id-2?{color:this.state.color}:{color:colors[index]}}>{names[index].name}</h2>
                                <h1 style={this.state.num==value.id-2?{color:this.state.color}:{}}>+{names[index].score}<span style={this.state.num==value.id-2?{color:"#fff"}:{}}>$</span></h1>
                            </li>
                        )
                    },this)
                }
            </ul>
        );
    }
    changeColor(val){
        this.setState({
            num:val.id-2,
            color:'#fff'
        })
    }
    changeColorLeave(val){
        this.setState({
            num:0,
            color:'#fff'
        })
    }
}

export default Program;
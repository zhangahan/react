import React, { Component } from 'react';
import LeftSideTop from './left-side-top';
import LeftSideBottom from './left-side-bottom';
import LeftSideBottomTwo from './left-side-bottom-two';
import '../Background-home/background-home.css';

class LeftSide extends Component {
    constructor(props) {
        super(props);
        this.change=this.change.bind(this);
    }
    render() {
        var color=["#5AC66C","#DEA036","#DE3636","#5AC6BB","#5A88C6"];
        return (
            <div className="left-box">
                <LeftSideTop store={this.props.store}/>
                    {this.props.store.set==1?
                        (this.props.store.grades.map((obj,index)=>{
                                return(
                                    <ul className="left-box-bottom left-box-bottom-change" key={index}>
                                        <li  style={this.props.store.ulIndex==index?{backgroundColor:color[index%5],color:"#fff"}:{backgroundColor:"rgba(239,214,59,0.6)",color:"#fff"}} onClick={()=>this.change(obj,index)}>{obj.gname}</li>

                                    {
                                        this.props.store.ulIndex==index?
                                        <ul className="left-box-bottom" style={{paddingBottom:0}}>
                                            {
                                                obj.list.map((obj,index)=>{
                                                    return (
                                                        <LeftSideBottom students={obj} key={index} store={this.props.store} index={index}/>
                                                    )
                                                })
                                            }
                                        </ul>:""
                                    }
                                    </ul>
                                )
                            })) :
                            <LeftSideBottomTwo store={this.props.store}/>
                    }

            </div>
        );
    }
    change(obj,index){
        this.props.store.onUlLink(index);
        this.props.store.onLink(0);
    }
}

export default LeftSide;

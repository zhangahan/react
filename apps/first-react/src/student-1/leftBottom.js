/**
 * Created by Administrator on 2017/2/28 0028.
 */
import React , { Component } from 'react';
import './student.css';

class LeftBottom extends Component {
    constructor(props){
        super(props);
        this.changeBackground=this.changeBackground.bind(this);
        this.state={
            clickDiv:1
        }
    }
    render() {
        var names = this.props.name;
        return (
            <ul className="left_li">
                {
                    names.map(function(obj,index){
                        return(
                            <li key={index} data={obj} onClick={()=>this.changeBackground(names,index)} style={this.state.clickDiv===obj.id?{backgroundColor:"#efd63b",color:"#333"}:{}}>{names[index].sname}</li>
                        )
                    },this)
                }
            </ul>
        );
    }
    changeBackground(names,index){
        this.props.fn(index);
        this.setState({
            clickDiv:names[index].id
        })
    }
}

export default LeftBottom;
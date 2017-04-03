/**
 * Created by Administrator on 2017/3/2 0002.
 */
import React , { Component } from 'react';
import './student.css';

class Delprogram extends Component {

    render() {
        var arr = this.props.name;
        return (
            <ul className="box_body_punish">
                {
                    arr.map(function(value,index){
                        return(
                            <li key={index} onClick={()=>this.props.fn(index+this.props.namea)}>
                                <div></div>
                                <h1>{arr[index].score}<span>$</span></h1>
                                <h2>{arr[index].name}</h2>
                            </li>
                        )
                    },this)
                }
            </ul>
        );
    }
}

export default Delprogram;
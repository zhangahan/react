/**
 * Created by Administrator on 2017/3/30 0030.
 */
import React, { Component } from 'react';

class AddItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var colors=["#5ac76c","#dea033","#dd3333","#5bc6bb","#5a88c6","#885ac6","#ff7f50","#6495ed","#2f4f4f","#daa520"];
        return (
            <li onClick={()=>this.props.store.onMask(this.props.obj)}>
                <h1>{this.props.obj.name}</h1>
                <h2>{this.props.obj.score}<span>$</span></h2>
            </li>
        )
    }

}

export default AddItem;

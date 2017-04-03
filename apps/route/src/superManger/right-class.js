import React, { Component } from 'react';
import '../Background-home/background-home.css';

class RightClass extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var color=["#5AC66C","#DEA036","#DE3636","#5AC6BB","#5A88C6"];
        return (
            <ul className="box_body_pay">
                {
                    this.props.store.grades.map((obj,index)=>{
                        return(
                            <li key={index} style={{ background: "linear-gradient(to left top,transparent 50% ,"+color[index%5]+" 0) no-repeat 100% 100% / 1.5em 1.5em, linear-gradient(315deg,transparent 1.07em ,"+color[index%5]+" 0)"}} onClick={()=>this.props.store.onMask(obj)}>{obj.gname}</li>
                        )
                    })
                }
                <li onClick={()=>this.props.store.onMask(this.props.store.grades[1])}><span>+</span></li>
            </ul>
        )
    }
}

export default RightClass;


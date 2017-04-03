/**
 * Created by Administrator on 2017/3/12 0012.
 */
import React , { Component } from 'react';
import '../student-1/student.css';

class TwoRight extends Component {
    render() {
        var names = this.props.names;
        return (
            <ul className="bocbtom">
                {
                    names.map(function(value,index){
                        return(
                                <li key={index}>
                                    <a href="#">{names[index].sname}</a>
                                </li>
                            )
                    },this)
                }
            </ul>
        );
    }
}

export default TwoRight;
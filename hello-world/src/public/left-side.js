import React, { Component } from 'react';
import LeftSideTop from './left-side-top';
import LeftSideBottom from './left-side-bottom';
import '../Background-home/background-home.css';

class LeftSide extends Component {
    render() {
        // console.log(this.props.students);
        return (
            <div className="left-box">
                <LeftSideTop />
                <ul className="left-box-bottom">
                    {
                        this.props.students.map((obj,index)=>{
                            return (
                                <LeftSideBottom student={obj} key={index} changeIndex={this.props.changeIndex} index={index} clickedStudent={this.props.clickedStudent}/>
                            )
                        },this)
                    }

                </ul>
            </div>

        );
    }
}

export default LeftSide;

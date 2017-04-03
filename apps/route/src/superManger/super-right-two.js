import React, { Component } from 'react';
import '../Background-home/background-home.css';
import RightSideTitle from '../public/right-title';
import RightClass from './right-class';
import heads from '../Background-home/img/1_03.png';

class RightSuperTwo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="middle">
                <div className="middle-inner">
                    <RightSideTitle img={heads} name={"班级设置"}/>
                    <RightClass store={this.props.store}/>
                </div>
            </div>
        )
    }
}

export default RightSuperTwo;


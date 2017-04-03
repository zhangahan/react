import React, { Component } from 'react';
import '../Background-home/background-home.css';
import ClassList from './class-list';
import TeacherDetail from '../Background-home/teach-detail';
import RightSideTitle from '../public/right-title';
import RightSideBanner from './right-banner';
import teacher from '../Background-home/img/teacher_23.png';



class RightSuper extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="middle">
                <div className="middle-inner">
                    <ClassList store={this.props.store}/>
                    <RightSideTitle img={teacher} name={"班级教师"}/>
                    <TeacherDetail />
                    <RightSideBanner  title={"本周期教学薪资"} store={this.props.store}/>
                </div>
            </div>
        )
    }
}

export default RightSuper;


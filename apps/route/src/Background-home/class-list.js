import React, { Component } from 'react';
import './background-home.css';
import ClassListLeft from './class-list-left';
import term from './img/teacher_15.png';
import course from './img/today.png';

class ClassList extends Component{
    render () {
        return (
            <ul className="box_right_bottom_top">
                <ClassListLeft img={term} course={"学期"}/>
                <ClassListLeft img={course} course={"课程"}/>
            </ul>
        )
    }
}
export default ClassList;


import React, { Component } from 'react';
import '../Background-home/background-home.css';
import ClassListLeft from './class-list-left';
import term from '../Background-home/img/teacher_15.png';
import course from '../Background-home/img/today.png';

class ClassList extends Component{
    render () {
        return (
            <ul className="box_right_bottom_top">
                <ClassListLeft img={term} course={"学期"} store={this.props.store.period.name}/>
                <ClassListLeft img={course} course={"课程"} store={this.props.store.grade.course}/>
            </ul>
        )
    }
}
export default ClassList;


import React, { Component } from 'react';
import './background-home.css';
import TeacherDetailIn from './teacher-detail-inner';


class TeacherDetail extends Component{
    render () {
        return (
            <div className="box_right_bottom_bottom">
                <TeacherDetailIn />
                <TeacherDetailIn />
                <TeacherDetailIn />
            </div>
        )
    }
}
export default TeacherDetail;

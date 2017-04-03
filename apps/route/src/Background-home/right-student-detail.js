import React, { Component } from 'react';
import './background-home.css';
import StudentDetailLeft from './right-student-detail - left'
import StudentDetailRight from './right-student-detail-right'

class StudentDetail extends Component{
    render () {
        return (
            <div className="details">
                <StudentDetailLeft student={this.props.student}/>
                <StudentDetailRight student={this.props.student} />
            </div>
        )
    }
}
export default StudentDetail;
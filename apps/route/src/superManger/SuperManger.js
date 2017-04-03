import React, { Component }from 'react';
import {connect} from'react-redux';
import Header from './header.js';
import RightSuperTwo from './super-right-two';
import RightSuper from './right-superManger';
import RightSuperTwoRight from './super-right-two-two';
import LeftSide from './left-side.js';
import SuperMaskOne from './super-mask-one';
import SuperMaskTwo from './super-mask-two';
import {leftLinkRight,headerLink,leftLinkBottom,maskControl,changeData} from './action';
import {  hashHistory} from 'react-router';

class SuperManger extends Component{
    constructor(props) {
        super(props);
    }
    render () {
        console.log(this.props);
        return (
            <div>
                <Header store={this.props}/>
                <div id="box">
                    {this.props.set==1?
                        <RightSuper store={this.props}/>:(this.props.set==2?<RightSuperTwo store={this.props}/>:<RightSuperTwoRight store={this.props}/>)

                    }
                    <LeftSide store={this.props}/>
                </div>
                {
                    this.props.set==2?<SuperMaskOne store={this.props}/>:<SuperMaskTwo store={this.props}/>
                }

            </div>
        )
    }
}

function maneger(state) {
    console.log(state);
    return {
        grade:state.totalReducer.teacherLoginData.grade,
        gradeList:state.totalReducer.teacherLoginData.gradeList,
        period:state.totalReducer.teacherLoginData.period,
        students: state.totalReducer.teacherLoginData.students,
        linkIndex:state.containerLink.contentLink.linkIndex||0,
        set:state.containerLink.contentLink.set||1,
        ulIndex:state.containerLink.contentLink.ulIndex||0,
        flag:state.containerLink.contentLink.flag||false,
        grades:state.containerLink.data.grades,
        rewards:state.containerLink.data.rewards,
        courseList:state.containerLink.data.courseList,
        teacherList:state.containerLink.data.teacherList
    }
}
const mapDispatchToProps = {
    onLink:leftLinkRight,
    onHeader:headerLink,
    onUlLink:leftLinkBottom,
    onMask:maskControl,
    changeData:changeData

};
export default connect(maneger,mapDispatchToProps)(SuperManger);
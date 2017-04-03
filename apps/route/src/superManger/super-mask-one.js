
import React , { Component } from 'react';
import '../Background-home/background-home.css';
import select from '../Background-home/img/select.png'

class SuperMaskOne extends Component {
    constructor(props) {
        super(props);
        this.add=this.add.bind(this);
    }
    render() {
        return (
            <div className="popup_box" style={this.props.store.flag==false?{display:"none"}:{display:"block"}}>
                <div className="popup_box_bg">
                    <div className="popup">
                        <p>班级基本信息</p>
                        <form action="">
                            <label htmlFor="">
                                <div className="label_div">班级</div>
                                <select name="" id="" style={{backgroundImage:`url(${select})`}} ref="className">
                                    <option value={this.props.store.flag.gname}>{this.props.store.flag.gname}</option>
                                    {
                                        this.props.store.grades.map((obj,index)=>{
                                            return <option value={obj.gname} key={index}>{obj.gname}</option>
                                        })
                                    }
                                </select>
                            </label>
                            <label htmlFor="">
                                <div className="label_div">课程</div>
                                <select name="" id="" style={{backgroundImage:`url(${select})`}} ref="courseList">
                                    <option value={this.props.store.flag.course}>{this.props.store.flag.course}</option>
                                    {
                                        this.props.store.courseList.map((obj,index)=>{
                                            return <option value={obj.cname} key={index}>{obj.cname}</option>
                                        })
                                    }
                                </select>
                            </label>
                            <label htmlFor="">
                                <div className="label_div">任课老师</div>
                                <select name="" id="" style={{backgroundImage:`url(${select})`}} ref="teacher">
                                    <option value={this.props.store.flag.teacher}>{this.props.store.flag.teacher}</option>
                                    {
                                        this.props.store.teacherList.map((obj,index)=>{
                                            if(obj.type==1){
                                                return <option value={obj.tname} key={index}>{obj.tname}</option>
                                            }
                                        })
                                    }
                                </select>
                            </label>
                            <label htmlFor="">
                                <div className="label_div">班主任</div>
                                <select name="" id="" style={{backgroundImage:`url(${select})`}} ref="header">
                                    <option value={this.props.store.flag.header}>{this.props.store.flag.header}</option>
                                    {
                                        this.props.store.teacherList.map((obj,index)=>{
                                            if(obj.type==2){
                                                return <option value={obj.tname} key={index}>{obj.tname}</option>
                                            }
                                        })
                                    }
                                </select>
                            </label>
                            <label htmlFor="">
                                <div className="label_div">班级状态</div>
                                <select name="" id="" style={{backgroundImage:`url(${select})`}}>
                                    <option value="">正常</option>
                                    <option value="">保留</option>
                                </select>
                            </label>
                            <label htmlFor="">
                                <div className="close" onClick={()=>this.props.store.onMask(false)}>取消</div>
                                <input type="button" defaultValue="确定" onClick={this.sure}/>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    add(){
        this.props.store.onMask(false);
    }

}

export default SuperMaskOne;

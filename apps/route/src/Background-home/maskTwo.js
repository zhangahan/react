
import React , { Component } from 'react';
import './background-home.css';
import select from './img/select.png'

class MaskTwo extends Component {
    constructor(props) {
        super(props);
        this.changeObj=this.changeObj.bind(this);
    }
    render() {
        console.log(this.props.student);
        return (
            <div className="popup_box" style={{display:this.props.flag==false?"none":"block"}}>
                <div className="popup_box_bg">
                    <div className="popup">
                        <p>学生基本信息</p>
                        <form action="">
                            <label htmlFor="">
                                <div className="label_div">姓名</div>
                                <input type="text" defaultValue={this.props.student.sname} ref="names"/>
                            </label>
                            <label htmlFor="">
                                <div className="label_div">班级</div>
                                <select name="" id="" style={{backgroundImage:`url(${select})`}}>
                                    <option defaultValue="">{this.props.student.sno}</option>
                                    <option defaultValue="">1503A</option>
                                    <option defaultValue="">1507B</option>
                                    <option defaultValue="">1508A</option>
                                </select>
                            </label>
                            <label htmlFor="">
                                <div className="label_div">学号</div>
                                <input type="text" defaultValue="150001" ref="class"/>
                            </label>
                            <label htmlFor="">
                                <div className="label_div">性别</div>
                                <select name="" id="" style={{backgroundImage:`url(${select})`}}>
                                    <option defaultValue="">{this.props.student.sex==1?"女":"男"}</option>
                                    <option defaultValue="">女</option>
                                    <option defaultValue="">男</option>
                                </select>
                            </label>
                            <label htmlFor="">
                                <div className="label_div">身份证</div>
                                <input type="text" defaultValue="13235366774532" />
                            </label>
                            <label htmlFor="">
                                <div className="close" onClick={this.props.cancelMask}>取消</div>
                                <input type="button" value="确定" onClick={this.changeObj}/>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    changeObj(){
        let obj={
            "id": 1,
            "pid": 1,
            "sname": "张壮壮",
            "sex": "1",
            "identity": "123",
            "sno": "160201",
            "init": 100000,
            "score": 10425,
            "status": "1",
            "createTime": null,
            "updateTime": "2017-03-05 17:36:33",
            "market": "鲁东市场部",
            "pic": null,
            "beginsDate": null,
            "term": "一年",
            "birthday": "123"
        };
        obj.sname=this.refs.names.value;
        this.props.students.push(obj);
        console.log(this.props.students);
        this.props.cancelMask(false);
    }
}

export default MaskTwo;

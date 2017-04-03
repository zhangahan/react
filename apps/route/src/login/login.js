import React, { Component }from 'react';
import SelectItem from './login-select';
import InputItem from './login-input';
import ReactDOM from 'react-dom';
import LableItem from './login-lable';
import bgImage from './img/login-bg.jpg';
import './login.css';
import {connect} from'react-redux';
import {teacherLoginData} from './action';
import {hashHistory} from 'react-router';

class Login extends Component{
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.getIden = this.getIden.bind(this);
        this.state={
            college:"数字媒体web",
            authority:"学生",
            username: "admin",
            password: "admin",
            id:""
        }
    }
    render () {
        console.log(this.state.id);
        return (
            <div className="bigbox" style={{backgroundImage:`url(${bgImage})`}}>
                <div className="box">
                    <div className="bgbox">
                        <form action="">
                            <div className="formbg">
                                <SelectItem prompt={['数字媒体web','数字媒体ui']} ref="college"/>
                                <SelectItem prompt={['学生','教师','超级管理员']} ref="authority"/>
                                <InputItem className={"username"} title={"用户名"} type={"text"} ref="username" name=""/>
                                <InputItem className={"pass"} title={"密码"} type={"password"} ref="password" name=""/>
                                <LableItem getId={this.getIden} ref="identify"/>
                                <input type="button"  id="btn" defaultValue="登录" className="button" onClick={this.login} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }

    //判断点击登录按钮时 校验数据输入是否正确
    login(){
        let college = parseInt(ReactDOM.findDOMNode(this.refs.college).value)+1;
        let authority = ReactDOM.findDOMNode(this.refs.authority).value;
        let username = ReactDOM.findDOMNode(this.refs.username).value;
        let password = ReactDOM.findDOMNode(this.refs.password).value;
        let identify = ReactDOM.findDOMNode(this.refs.identify).children[0].value;

        if ((identify.toLowerCase() == this.state.id.toLowerCase())){
            fetch(`http://192.168.60.110:8080/cms/login/login.do?roleName=${username}&password=${password}&roleType=1&officeType=1`)
                .then(json=>json.json())
                .then(json=> {
                    // console.log(json);
                    if (json.status == 201) {
                        alert(json.message);
                    } else if (json.status == 200) {
                        if(authority==1){
                            this.props.onSuper(json);
                            hashHistory.push("/student/repos");
                        }else if(authority==2){
                            this.props.onSuper(json);
                            hashHistory.push("/super");
                        }
                        /*console.log(this.props);
                         this.props.dispatch(teacherLoginData(json));*/

                    }
                }, err=> {
                    alert("服务器异常");
                })
        }else {
            alert("验证码错误")
        }


    }

    //用来把验证码的内容传过来  判断不分大小写 是否输入正确
    getIden(value) {
        this.setState({
            id: value
        })
    }
}
function manger(state) {
    return {}
}
const mapDispatchToProps = {
    onSuper:teacherLoginData
};
export default connect(manger,mapDispatchToProps)(Login);
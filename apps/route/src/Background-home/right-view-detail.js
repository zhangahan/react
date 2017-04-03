import React, { Component } from 'react';
import './background-home.css';
import todayTit from './img/today.png';
import teacher from './img/teacher_23.png';
import RightSideTitle from '../public/right-title.js';
import StudentDetail from './right-student-detail';
import RightSideBanner from './right-banner';
import ClassList from './class-list';
import TeacherDetail from './teach-detail';
import cancle from './img/cancle.png';



class ViewDetail extends Component {
    constructor(props) {
        super(props);
        this.del=this.del.bind(this);
        this.state={
            details:this.props.details,
            oparateRecord:false,
            sum:0
        }
    }
    componentWillMount(){
        if(!this.state.oparateRecord){
            var details=this.state.details;
            let todayArr=[];
            let historyArr={};
            let order=[];
            let today= new Date();
            today = `${today.getYear()+1900}${(today.getMonth()+1).toString().length==1?"0"+(today.getMonth()+1):today.getMonth()+1}${(today.getDate()+1).toString().length==1?"0"+(today.getDate()+1):today.getDate()}`;
            details.map(function(obj,index){
                let token;
                token = obj.time.slice(0,10).replace(/-/g,"");
                obj.token=token;
                order.push(token);
            });

            order=[...new Set(order)];

            order.sort((a,b)=>{
                return b-a;
            });

            if(order[0]==today){
                order.splice(0,1);
            }

            order.forEach((token,index)=>{
                historyArr[token]=[];
            });

            details.forEach((obj,index)=>{
                if(obj.token==today){
                    todayArr.push(obj)
                }else{
                    historyArr[obj.token].push(obj);
                }
            });
            console.log(todayArr);
            console.log(historyArr);
            this.setState({
                oparateRecord:{
                    todayArr,
                    historyArr,
                    order
                }
            })
        }
    }
    // var sum=0;

    componentDidMount(){
        if(this.state.sum==0){
            var arr=[];
            var num=0;
            this.state.oparateRecord.order.map((token,index)=>{
                {
                    this.state.oparateRecord.historyArr[token].map((obj,index)=>{
                        {
                            arr.push(obj.operate)
                        }
                    })
                }
            });
            arr.map((obj,index)=>{
                num+=arr[index];
            });
            this.setState({
                sum:num
            })
        }

    }



    render() {
        var colors=["#5ac76c","#dea033","#dd3333","#5bc6bb","#5a88c6","#885ac6","#ff7f50","#6495ed","#2f4f4f","#daa520"];
        // console.log(this.state.sum);
        /*console.log(this.state.oparateRecord);
        console.log(this.state.oparateRecord.todayArr);*/
        let today= new Date();
        let add=2+this.props.add * 2;
        let order=[...this.state.oparateRecord.order];
        order = order.splice(0,add);
        // console.log(order);
        return (
            <div className="middle">
                <div className="middle-inner">
                    <StudentDetail student={this.props.student}/>
                    <RightSideTitle img={todayTit} name={"今日奖罚记录"} />

                    <div className="box_right_center_center">
                        <div className="brcc_left">
                            <div className="brcc_left_line">
                                <div className="brcc_left_radius"></div>
                            </div>
                        </div>
                        <div className="brcc_right">
                            <div className="brcc_right_title">
                                <span>{today.getYear()+1900+"年"}{(today.getMonth()+1).toString().length==1?"0"+(today.getMonth()+1)+"月":(today.getMonth()+1)+"月"}{(today.getDate()+1).toString().length==1?"0"+(today.getDate()+1)+"日":today.getDate()+"日"}</span>
                            </div>
                            <ul className="record">
                                {
                                    this.state.oparateRecord.todayArr.length==0?"无记录":this.state.oparateRecord.todayArr.map((obj,index)=>{
                                        return (
                                             <li key={index}>
                                                <h1>{obj.des}</h1>
                                                <h2>{obj.operate}<span>$</span></h2>
                                                <img src={cancle} alt="" onClick={()=>this.del(obj,index)}/>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <RightSideBanner background={"#fff"} title={"历史平均薪资"} score={this.state.sum}/>
                    <ClassList />
                    <RightSideTitle img={teacher} name={"班级教师"} />
                    <TeacherDetail />
                    <RightSideTitle img={todayTit} name={"历史奖罚记录"} />

                    <div className="box_right_center_center">
                        <div className="brcc_left">
                            <div className="brcc_left_line">
                                <div className="brcc_left_radius"></div>
                            </div>
                        </div>

                            {
                                order.map((token,index)=>{
                                    return (
                                        <div className="brcc_right" key={index}>
                                            <div className="brcc_right_title">
                                                <span>{`${token.slice(0,4)}年${token.slice(4,6)}月${token.slice(6,8)}日`}</span>
                                            </div>
                                            <ul className="record">
                                                {
                                                    this.state.oparateRecord.historyArr[token].map((obj,index)=>{
                                                        return (
                                                            <li key={index} style={{backgroundColor:colors[index%5]}}>
                                                                <h1 style={{color:"#fff"}}>{obj.des}</h1>
                                                                <h2 style={{color:"#fff"}}>{obj.operate}<span style={{color:"#fff"}}>$</span></h2>
                                                            </li>
                                                        )
                                                    })
                                                 }
                                            </ul>
                                        </div>
                                    )
                                })
                            }


                    </div>
                </div>
            </div>
        )
    }
    del(obj,index){
        this.props.changeDel(obj);
        this.state.oparateRecord.todayArr.splice(index,1);
    }

}

export default ViewDetail;


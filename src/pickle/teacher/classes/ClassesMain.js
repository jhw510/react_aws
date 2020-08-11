import React, {useState, useEffect} from 'react';
import {Input, Table, FormGroup, Label} from 'reactstrap'
import PerfectScrollbar from 'react-perfect-scrollbar'
import Timetable from './timetable/Timetable'
import Timer from './timer/Timer'

import moment from 'moment'
import DatePicker from 'react-modern-calendar-datepicker'
import 'react-modern-calendar-datepicker/lib/DatePicker.css';

import {NavLink} from 'react-router-dom'
import axios from 'axios'

import './classesMain.css'


const Completionist = () => <span>수업에 참여하세요</span>
const timeLeft = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
        //여기서 setinterval 설정한 다음 useeffect 사용하고 setInterval이 0이면 
        //useeffect에서 타이머가 다시 돌아갈 수 있게 하는 함수 불러옴
      return <Completionist />;
    } else {
      return <span>{hours}:{minutes}:{seconds}</span>;
    }
  };

const ClassesMain = ({ match }) => {
    function create() {
        window.open("/streamings")
    }
    const [openDropbox, setOpenDropbox] = useState(false)
    const [today,setToday] = useState(moment().format('YYYY-MM-DD'))
    const [calendar, setCalendar] = useState(false)
    const [subjectDetail,setSubjectDetail] = useState(false)
    const [startCountdown, setStartCountdown] = useState(false)
    let curTime = moment().format('LTS')
    let a = curTime.split(':')

    const subjectData = payload =>{
        setSubjectDetail({title : payload.title, content:payload.content, file : payload.file})
    }
    // useEffect = (()=>{
    //     if(curTime[1] === 50){
    //     function startTimer() {setStartCountdown(true)}
    //     }
    // })

    return (
        <>
            <div className="classes_wrapper">
                <div className="classes_container">
                    {/* space for calendar  */}
                    <DatePicker/>
                    <NavLink to={`${match.url}/timetable`}><button className="timetable_button ">Modify</button></NavLink>
                </div>
                <div className="classes_container">
                    <div className="classes_detail">
                            subject Name :<br/>
                            instructor :
                    </div>
                    <div>
                        { subjectDetail === false &&
                        <PerfectScrollbar>
                        <div className="timetable_board timetable_align">
                            <Table hover className="timetable_subject_detail" >
                                <thead>
                                <tr>
                                    <th>차시</th>
                                    <th>학습 목표</th>
                                    <th>첨부파일</th>
                                </tr>
                                </thead>
                                <tbody id="curriculum_list">
                                {/* {subject.map((no, i) => (
                                    <tr key={i}>
                                    <td>{i}</td>
                                    <td>{subject.goal}</td>
                                    <td>{subject.file}</td>
                                    </tr>
                                ))} */}
                                <tr>
                                    <td>1</td>
                                    <td onClick={e=>setSubjectDetail(!subjectDetail)} >Title</td>
                                    <td>📄</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td onClick={e=>setSubjectDetail(!subjectDetail)}>Title</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td onClick={e=>setSubjectDetail(!subjectDetail)}>Title</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td onClick={e=>setSubjectDetail(!subjectDetail)}>Title</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td onClick={e=>setSubjectDetail(!subjectDetail)}>Title</td>
                                    <td>📄</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td onClick={e=>setSubjectDetail(!subjectDetail)}>Title</td>
                                    <td></td>
                                </tr>
                                </tbody>
                            </Table>
                            
                            <div>
                            <NavLink to={`${match.url}/detail`}><button className="timetable_button ">Modify</button></NavLink>
                            </div>
                            
                        </div>
                        </PerfectScrollbar>
                        }
                        {subjectDetail === true &&
                        <div className="classes_curriculum">
                            <div className="timetable_board">
                                <div className="attendance_margin">
                                    <Table bordered hover className="timetable_subject_detail">
                                        <tr>
                                            <td><input type="text">title</input></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                file
                                            </td>
                                        </tr>
                                        <tr className="content_height">
                                            <td>content</td>

                                        </tr>

                                    </Table>

                                    {/* <div><h3>weekly_goal</h3></div>
                                    <div className="margin">file</div>
                                    <div className="margin" className="weekly_content"><h3>weeklyContent</h3></div> */}
                                    <div>
                                       <button className="timetable_button attendance_margin " onClick={e=>setSubjectDetail(!subjectDetail)}> List </button>
                                       <NavLink to={`${match.url}/detail`}><button className="timetable_button attendance_margin">Modify</button></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                    <div className="button_container attendance_margin">
                        
                        <div >
                            <Timer/>
                            
                        </div>

                        <button className="streaming_button"><NavLink to="/streamings">CREATE</NavLink></button>
                        {/*<button onClick={onStreaming}>CREATE</button>*/}
                    </div>
                </div>
            </div>
        </>
    );
}


export default ClassesMain;
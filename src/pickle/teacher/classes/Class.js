import React, {useState, useEffect} from 'react';
import moment from 'moment'
import axios from 'axios'
import {Input,Table, FormGroup, Label} from 'reactstrap'
import Countdown from "react-countdown";
import './modal.css'
import './classesMain.css'
import {NavLink} from 'react-router-dom'

const Class = ({ match }) => {
    function create() {
        window.open("/streaming")
    }
    const [openDropbox, setOpenDropbox] = useState(false)
    const [today,setToday] = useState(moment().format('YYYY-MM-DD'))
    const [calendar, setCalendar] = useState(false)
    const [scheduleModal, setScheduleModal] = useState("close")
    const [subjectDetail,setSubjectDetail] = useState("close")
    const [startCountdown, setStartCountdown] = useState(false)
    let curTime = moment().format('LTS')
    let a = curTime.split(':')

    const insert = () => {
        alert(`hi love`)
    }
    const showCalendar = e =>{
        alert(`open calendar`)
        setCalendar(!calendar)
    }
    const onShowModal = e =>{
        setScheduleModal("open")
    }
    const onModalClose = e => {
        setScheduleModal ("close")
    }
    const subjectData = payload =>{
        setSubjectDetail({title : payload.title, content:payload.content, file : payload.file})
    }
    const onSubjectTitle = e => {
        setSubjectDetail("open")
    }
    const onToList = e =>{
        alert(`to list`)
        setSubjectDetail("close")
    }
    const onStreaming = ()=>{
        alert(`start streaming`)
    }
    const onSubmit = () => dispatch =>{
        axios.get()
            .then(()=>{
                setScheduleModal("close")
            })
            .catch(error => {throw(error)})
    }
    // useEffect = (()=>{
    //     if(curTime[1] === 50){
    //     function startTimer() {setStartCountdown(true)}
    //     }
    // })

    return (
        <>
            <div id="wrapper">
                <div id="timetable_container">
                    <div id="timetable_date">
                        <table>
                            <td><h4>{today}</h4></td>
                            <td><img onClick={showCalendar} src="https://www.freepngimg.com/thumb/calendar/8-2-calendar-free-download-png.png"/></td>
                        </table>
                    </div>
                    <Table hover id="timetable">
                        <tbody>
                        <tr>
                            <td id="class_no">0</td>
                            <td>MON</td>
                            <td>TUE</td>
                            <td>WED</td>
                            <td>THU</td>
                            <td>FRI</td>
                        </tr>
                        <tr>
                            <td id="class_no">1</td>
                            <td onClick={insert}></td>
                            <td onClick={insert}></td>
                            <td><button onClick={insert}> </button></td>
                            <td><button onClick={insert}></button></td>
                            <td><button onClick={insert}></button></td>
                        </tr>
                        <tr>
                            <td id="class_no">2</td>
                            <td><button onClick={insert}></button></td>
                            <td><button onClick={insert}></button></td>
                            <td><button onClick={insert}> </button></td>
                            <td><button onClick={insert}></button></td>
                            <td><button onClick={insert}></button></td>
                        </tr>
                        <tr>
                            <td id="class_no">3</td>
                            <td onClick={() => alert('aa')}></td>
                            <td><button onClick={insert}></button></td>
                            <td><button onClick={insert}> </button></td>
                            <td><button onClick={insert}></button></td>
                            <td><button onClick={insert}></button></td>
                        </tr>
                        <tr>
                            <td id="class_no">4</td>
                            <td><button onClick={insert}></button></td>
                            <td><button onClick={insert}></button></td>
                            <td><button onClick={insert}> </button></td>
                            <td><button onClick={insert}></button></td>
                            <td><button onClick={insert}></button></td>
                        </tr>
                        <tr>
                            <td id="class_no">5</td>
                            <td><button onClick={insert}></button></td>
                            <td><button onClick={insert}></button></td>
                            <td><button onClick={insert}> </button></td>
                            <td><button onClick={insert}></button></td>
                            <td><button onClick={insert}></button></td>
                        </tr>
                        <tr>
                            <td id="class_no">6</td>
                            <td><button onClick={insert}></button></td>
                            <td><button onClick={insert}></button></td>
                            <td><button onClick={insert}> </button></td>
                            <td><button onClick={insert}></button></td>
                            <td><button onClick={insert}></button></td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
                <div id="board_container">
                    <div id="class_detail">
                        <table id = "table_divided">
                            <tr>
                                <td>
                                    subject Name :<br/>
                                    instructor :
                                </td>
                                <td>
                                    <button onClick={onShowModal}>Change</button>
                                </td>
                            </tr>
                        </table>
                        { scheduleModal === "open" &&
                        <>
                            <div className="Modal-overlay" />
                            <div className="Modal">
                                <p className="title">Change Schedule</p>
                                <div className="content">

                                    <div>
                                        <FormGroup>
                                            <Label>Day</Label>
                                            <Input type="select" name="select" id="exampleSelect">
                                                <option value="M">월요일</option>
                                                <option value="Tu">화요일</option>
                                                <option value="W">수요일</option>
                                                <option value="Th">목요일</option>
                                                <option value="F">금요일</option>
                                            </Input>
                                        </FormGroup>
                                    </div>
                                    <div>
                                        <FormGroup>
                                            <Label>Time</Label>
                                            <Input type="select" name="select" id="exampleSelect">
                                                <option value="1">1교시</option>
                                                <option value="2">2교시</option>
                                                <option value="3">3교시</option>
                                                <option value="4">4교시</option>
                                                <option value="5">5교시</option>
                                                <option value="6">6교시</option>
                                            </Input>
                                        </FormGroup>
                                    </div>
                                </div>
                                <div className="button-wrap">
                                    <button onClick={onModalClose}> Cancel </button>
                                    <button onClick={onSubmit}> Confirm </button>
                                </div>
                            </div>
                        </>
                        }
                    </div>
                    <div>
                        { subjectDetail === "close" &&
                        <div id="class_curriculum">
                            <Table hover id= "curriculum_table">
                                <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Goal</th>
                                    <th>File</th>
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
                                    <td>자바의 이해</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td onClick={onSubjectTitle}>Title</td>
                                    <td></td>
                                </tr>
                                </tbody>
                            </Table>
                        </div>
                        }
                        {subjectDetail === "open" &&
                        <div id="class_curriculum">
                            <div id="subjectDetail_container">
                                <div className="margin">
                                    <div><h3>weekly_goal</h3></div>
                                    <div className="margin">file</div>
                                    <div className="margin" id="weekly_content"><h3>weeklyContent</h3></div>
                                    <div><button id="goal_detail" onClick={onToList}> List </button></div>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                    <div id="button_container">
                        {startCountdown === false &&
                        <div>Time left: --:--:--</div>
                        }
                        {startCountdown === true &&
                        <div >
                            {/* Time left: {hours}:{minutes}:{seconds}  */}
                            <Countdown date = {curTime + 600000}/>
                        </div>}

                        <button ><NavLink to="/streaming">CREATE</NavLink></button>
                        {/*<button onClick={onStreaming}>CREATE</button>*/}
                    </div>
                </div>
            </div>
        </>
    );
}


export default Class;
import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';

import {Input,Table, FormGroup, Label} from 'reactstrap'
import PerfectScrollbar from 'react-perfect-scrollbar'
import './attendance.css';
import './attendanceMain.css';

import { useSelector,useDispatch} from 'react-redux'
import axios from 'axios';

const attendanceType = {GET_ATTENDANCE : 'attendance/GET_ATTENDANCE'}

export const getAttendance = action => ({type: attendanceType.GET_ATTENDANCE, payload: action.payload})
export const attendanceReducer = (state = [], action) =>{
    switch(action.type) {
        case attendanceType.GET_ATTENDANCE : return {...state, payload: action.payload}
        default: return state
    }
}

export const studentAttendance = () => dispatch =>{
    axios.get(`javaurl`)
        .then(jdata =>{
            dispatch(getAttendance(jdata.data))
        })
        .catch(err=>{throw(err)})
}

const Attendance = ({match}) => {

    const [searchword, setSearchword] = useState("all")
    const [grade, setGrade] = useState('')
    const [ban, setBan] = useState('')
    
    const onSearch = e => {
        e.preventDefault()
        setSearchword(e.target.value)
    }
    
    const goAttendanceSearch = () =>{ 
        setGrade(document.getElementById("gradeSelect").value) 
        setBan(document.getElementById("banSelect").value)
        console.log(grade)
        console.log(ban) //한번에 안바뀌는거같은뎅...
        // axios.get() 버튼 누르면 바로 axios로 연결되어 가져올 수 있도록
    }

    const results = useSelector(state => state.airportReducer)
    const dispatch = useDispatch()
    useEffect(()=>{
        if(searchword === "all") dispatch(studentAttendance())
        else{
            if(!results.data) dispatch(studentAttendance())
        }

    })

    return (
        <>
            <div className="detail_wrapper">
                <div className="detail_header">
                    <div className="detail_toggle_container" >
                        <Label className="attendance_margin">학년</Label>
                        <FormGroup className="attendance_selector">
                            <Input type="select" name="select" id="gradeSelect">
                                <option value="1">1학년</option>
                                <option value="2">2학년</option>
                                <option value="3">3학년</option>
                            </Input>
                        </FormGroup>
                    
                        <Label className="attendance_margin">반</Label>
                        <FormGroup className="attendance_selector">
                            <Input type="select" name="select" id="banSelect">
                                <option value="1">1반</option>
                                <option value="2">2반</option>
                                <option value="3">3반</option>
                                <option value="4">4반</option>
                                <option value="5">5반</option>
                                <option value="6">6반</option>
                                <option value="7">7반</option>
                                <option value="8">8반</option>
                                <option value="9">9반</option>
                                <option value="10">10반</option>
                                <option value="11">11반</option>
                                <option value="12">12반</option>
                                <option value="13">13반</option>
                                <option value="14">14반</option>
                                <option value="15">15반</option>
                            </Input>
                        </FormGroup>
                    <div >
                        <button className="attendance_button " onClick={goAttendanceSearch}>SEARCH</button>
                    </div>
                </div>
                    <div className="detail_glyphicon_container">
                        <NavLink to={`${match.url}/attendance`}><div style={{marginLeft:"0.5rem", float:"right"}} class="glyph-icon simple-icon-chart attendance_glyphicon"></div></NavLink>
                    </div>
            
            {searchword === "all" &&
            <div className="table_container">
                <div className="searchbox_container">
                    <div>
                    <   button className="attendance_search_button attendance_margin" onClick={onSearch}>search</button>
                    </div>
                    <div style={{float:"right"}}>
                        <input id="search"
                            className="attendance_margin"
                            style={{ float:"right", marginRight:'0'}}
                            type="text"
                            placeholder="Search">
                        </input>
                    </div>
                </div>
                    <Table striped hover className='attendance_table'>
                        <thead>
                        <tr>
                            <td>순번</td>
                            <td>학번</td>
                            <td>학생명</td>
                            <td>츨결</td>
                            <td>합계</td>
                            <td>1월</td>
                            <td>2월</td>
                            <td>3월</td>
                            <td>4월</td>
                            <td>5월</td>
                            <td>6월</td>
                            <td>7월</td>
                            <td>8월</td>
                            <td>9월</td>
                            <td>10월</td>
                            <td>11월</td>
                            <td>12월</td>
                            <td>Note</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td scope="row">1</td>
                            <td>1010</td>
                            <td>김이나</td>
                            <td>today </td>
                            <td>2</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>1</td>
                            <td>0</td>
                            <td>1</td>
                            <td>0</td>
                            <td>Note</td>
                        </tr>
                        <tr>
                            <td scope="row">2</td>
                            <td>1011</td>
                            <td>길이나</td>
                            <td>today </td>
                            <td>2</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>3</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>1</td>
                            <td>0</td>
                            <td>1</td>
                            <td>0</td>
                            <td>Note</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
                }
            </div>
            </div>
        </>
    );
};
export default Attendance;
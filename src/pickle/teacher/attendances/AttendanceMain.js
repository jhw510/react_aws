import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';

import {Input, FormGroup, Label} from 'reactstrap'
import PerfectScrollbar from 'react-perfect-scrollbar'

import {chartTooltipColor} from './chart/chartTooltip'
import DailyChart from './chart/DailyChart'
import WeeklyChart from './chart/WeeklyChart'
import {ACalendar} from './calendar/Calendar'

import axios from 'axios';


const selectDetailType = {SELECT_DETAIL : "tattendance/SELECT_DETAIL"}
const selectDetailRequest = action => ({type:selectDetailType.SELECT_DETAIL, payload: action.payload })
export const tAttendanceReducer = (state={}, action) =>{
    switch(action.type){
        case 'SELECT_DETAIL' : return {state, payload:action.payload}
        default: return state
    }
}

const AttendanceMain = ({match}) => {
    const [grade, setGrade] = useState('')
    const [ban, setBan] = useState('')
    
    const dailyChartData = {
        labels: ['출석', '결석', '지각'],
        datasets: [
            {
                label: '출결 현황',
                borderColor: ['#184f90','#00365a','#8a9fb4'],
                backgroundColor: ['rgba(24,79,144,0.1)','rgba(0,54,90,0.1)','rgba(138,159,180,0.1)'],
                data: [70, 10, 20], //자바와 통신해서 받아야 하는 값
                hoverBackgroundColor:['#184f90','#00365a','#8a9fb4'],
                hoverBorderColor:['rgba(24,79,144,0.1)','rgba(0,54,90,0.1)','rgba(138,159,180,0.1)'],
                borderWidth: '2.5',
            },
        ]
    }
    const weeklyChartData = {
        labels: ['월', '화', '수', '목', '금'],
        datasets: [
            {
                label: '출석',
                data: [70, 80, 90, 90, 70],
                borderColor: '#184f90',
                pointBackgroundColor: chartTooltipColor.foregroundColor,
                pointBorderColor: chartTooltipColor.themeColor1,
                pointHoverBackgroundColor: chartTooltipColor.themeColor1,
                pointHoverBorderColor: chartTooltipColor.foregroundColor,
                pointRadius: 6,
                pointBorderWidth: 2,
                pointHoverRadius: 8,
                fill: false,
            },
            {
                label: '결석',
                data: [10, 5, 5, 0, 20],
                borderColor: '#00365a',
                pointBackgroundColor: chartTooltipColor.foregroundColor,
                pointBorderColor: chartTooltipColor.themeColor1,
                pointHoverBackgroundColor: chartTooltipColor.themeColor1,
                pointHoverBorderColor: chartTooltipColor.foregroundColor,
                pointRadius: 6,
                pointBorderWidth: 1,
                pointHoverRadius: 8,
                fill: false,
            },
            {
                label: '지각',
                data: [20, 15, 5, 10, 10],
                borderColor: '#8a9fb4',
                pointBackgroundColor: chartTooltipColor.foregroundColor,
                pointBorderColor: chartTooltipColor.themeColor1,
                pointHoverBackgroundColor: chartTooltipColor.themeColor1,
                pointHoverBorderColor: chartTooltipColor.foregroundColor,
                pointRadius: 6,
                pointBorderWidth: 2,
                pointHoverRadius: 8,
                fill: false,
            },
        ],
    };
    
    

    const goAttendanceSearch = () =>{ 
        setGrade(document.getElementById("gradeSelect").value) 
        setBan(document.getElementById("banSelect").value)
        console.log(grade)
        console.log(ban) //한번에 안바뀌는거같은뎅...
        // axios.get() 버튼 누르면 바로 axios로 연결되어 가져올 수 있도록
    }
    return (
        <>
        <PerfectScrollbar>
            <div className="attendance_wrapper">
                <div className="attendance_header">
                    <div className="toggle_container">
                        <Label className="">학년</Label>
                        
                            <FormGroup className="attendance_selector">
                                <Input type="select" name="select" id="gradeSelect">
                                    <option value="1">1학년</option>
                                    <option value="2">2학년</option>
                                    <option value="3">3학년</option>
                                </Input>
                            </FormGroup>
                        
                        <Label className="">반</Label>
                    
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
                
                    <div className="attendance_glyphicon_container">
                        <NavLink to={`${match.url}/detail`}><div style={{marginLeft:"0.5rem", float:"right"}} class="glyph-icon simple-icon-list attendance_glyphicon"></div></NavLink>
                    </div>
                </div>
                <div className="attendance_container">
                    <ACalendar/>
                </div>
                <div className="attendance_container">
                    <div><h4>DAILY</h4></div>
                    <div className="attendance_chart daily">
                        <DailyChart  shadow={false} data={dailyChartData}/>
                    </div>
                    

                    
                </div>
                <div className="toggle_container" style={{height:"4%"}}>
                    <h4>Weekly</h4>
                </div>
                <div className="attendance_chart weekly">
                    
                    <div className="weekly_chart attendance_margin">
                        <WeeklyChart shadow={false} data={weeklyChartData}/>
                    </div>    
                </div>

            </div>
            </PerfectScrollbar>
        </>
    );
};
export default AttendanceMain;
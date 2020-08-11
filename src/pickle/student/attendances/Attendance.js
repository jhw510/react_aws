import React, {useState} from 'react';
import './attendance.css';
import {Card, CardBody, Row, Col} from 'reactstrap';
import Calendar from 'react-calendar'
import Clock from "react-live-clock";
import {MDBTable, MDBTableBody, MDBTableHead} from "mdbreact";
import 'react-calendar/dist/Calendar.css';
//import ReactTable from 'react-table'
//import Colgroup from 'react-colgroup';
//import 'react-daypicker/lib/DayPicker.css';
//import DayPicker from 'react-daypicker';


const Attendance = () => {
    const [selectDate, setSelectDate] = useState("")
    const [dateChange, setDateChange] = useState("")

    const onDayClick = e =>{
        e.preventDefault()
        setSelectDate(e.target.value)
    }

    const onDateChange = e =>{
        e.preventDefault()
        setDateChange(e.target.value)
    }

    const data = {
        columns: [
            {
                label: '교시',
                field: 'id',
                sort: 'asc'
            },
            {
                label: '수업명',
                field: 'first',
                sort: 'asc'
            },
            {
                label: '출결',
                field: 'last',
                sort: 'asc'
            },
            {
                label: '사유',
                field: 'detail',
                sort: 'asc'
            }
        ],
        rows: [
            {
                'id': 1,
                'first': '물리학',
                'last': '지각',
                'detail': '병원'
            },
            {
                'id': 2,
                'first': '국어',
                'last': '',
                'detail': ''
            },
            {
                'id': 3,
                'first': '영어',
                'last': '',
                'detail': ''
            },
            {
                'id': 4,
                'first': '수학',
                'last': '',
                'detail': ''
            },
            {
                'id': 5,
                'first': '한국사',
                'last': '',
                'detail': ''
            },
            {
                'id': 6,
                'first': '생활과 윤리',
                'last': '',
                'detail': ''
            },
            {
                'id': 7,
                'first': '수학',
                'last': '',
                'detail': ''
            }
        ]};

    return (
        <>
            <div>
                <Card>
                    <CardBody>
                        <h2 className="s_atte_header">홍길동 출석 현황</h2>
                    </CardBody>
                </Card>
            </div>

            <div className="s_atte_topatte">
                <Card>
                    <CardBody>
                        <Row>
                            <Col><div className="s_atte_circle"> 출석 </div></Col>
                            <Col className="s_attendance">53 회</Col>
                            <Col><div className="s_atte_circle"> 지각 </div></Col>
                            <Col className="s_attendance">1 회</Col>
                            <Col><div className="s_atte_circle"> 조퇴 </div></Col>
                            <Col className="s_attendance">3 회</Col>
                            <Col><div className="s_atte_circle"> 결석 </div></Col>
                            <Col className="s_attendance">1 회</Col>
                        </Row>
                    </CardBody>
                </Card>
            </div>

            <div>
                <Row>
                    <Col className="s_atte_col_left">
                        <Card>
                            <CardBody>
                                <div className="s_atte_date">
                                    <Clock format={'YYYY년'}/>
                                </div>
                                <Calendar className="s_atte_calendar"
                                          onChange={onDateChange}
                                          value={dateChange}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className="s_atte_col_right">
                        <Card>
                            <CardBody>
                                <div className="s_atte_date">
                                    <Clock format={'MM월 DD일'}/>
                                </div>
                                <div className="s_atte_scroll">
                                    <MDBTable>
                                        <MDBTableHead columns={data.columns} />
                                        <MDBTableBody rows={data.rows} />
                                    </MDBTable>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
};
export default Attendance;
import React, {useState} from 'react';
import axios from 'axios'
import './modal.css'
import './class.css'
import {Card, CardBody, Row, Container, Col, Button} from 'reactstrap';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import ListGroup from 'react-bootstrap/ListGroup'
import DatePicker from "react-modern-calendar-datepicker";
import Clock from 'react-live-clock';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';


//import { Table } from "react-fluid-table";
//import {Table, Navbar,Form,FormControl,Button,DropdownButton,Dropdown} from "react-bootstrap";
//import {range } from "rxjs";
//import {faker} from 'react-faker';
//import BaseTable, { Column } from 'react-base-table'
//import 'react-base-table/styles.css'
//import { Table, Column } from 'react-notable'




const Class = () => {
    const [selectedDay, setSelectedDay] = useState(null);
    const [counter, setCounter] = React.useState(600);
    const [showDetail, setShowDetail] = useState(false);


    const pushBtn = () => {
        axios.get("인텔리제이 url","")
    }
    const pushListBtn = () => {
    }

    const data = {
        columns: [
            {
                label: '차시',
                field: 'id',
                sort: 'asc'
            },
            {
                label: '교과진도 운영계획',
                field: 'first',
                sort: 'asc'
            },
            {
                label: '수업자료',
                field: 'last',
                sort: 'asc'
            }
        ],
        rows: [
            {
                'id': 1,
                'first': '극 갈래의 이해 - 성난 기계',
                'last': '상기 자료.pdf'
            },
            {
                'id': 2,
                'first': '교술 갈래의 이해-상기',
                'last': ''
            },
            {
                'id': 3,
                'first': '교술 갈래의 이해 - 상기',
                'last': ''
            },
            {
                'id': 4,
                'first': '우리 문학의 전통과 가치 - 향가(제망매가)',
                'last': ''
            },
            {
                'id': 5,
                'first': '우리 문학의 전통과 가치 - 시조',
                'last': ''
            },
            {
                'id': 6,
                'first': '가사 문학의 이해 - 관동별곡1',
                'last': ''
            },
            {
                'id': 7,
                'first': '가사 문학의 이해 - 관동별곡2',
                'last': ''
            }
        ]};

    const data2 = {
        columns: [
            {
                label: '번호',
                field: 'id',
                sort: 'asc'
            },
            {
                label: '평가항목',
                field: 'id',
                sort: 'asc'
            },
            {
                label: '마감일',
                field: 'first',
                sort: 'asc'
            }
        ],
        rows: [
            {
                'id': 1,
                'first': '창작시조 발표',
                'last': '2020-06-03'
            },
            {
                'id': 2,
                'first': '관동별곡 분석 보고서',
                'last': '2020-07-03'
            }
        ]};

    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);


    return (
        <>
            <div className="s_class_card1">
                <Card>
                    <CardBody>
                        <div>
                            <text className="s_class_name">홍길동</text>
                        </div>
                    </CardBody>
                </Card>
            </div>

            <Container className="s_class_container">
                <Row>
                    <Col className="s_class_col_left">
                        <Card>
                            <CardBody>
                                <div className="s_class_calendar">
                                    <Row>
                                        <Col className="s_class_clock">
                                            <Clock format={'YYYY년 MM월 DD일'}/>
                                        </Col>
                                        <Col className="s_class_datepicker">
                                            <DatePicker
                                                value={selectedDay}
                                                onChange={setSelectedDay}
                                                inputPlaceholder="Select a day"
                                                shouldHighlightWeekends
                                            />
                                        </Col>
                                    </Row>
                                </div>
                                <div className="s_class_timetable_frame">
                                    <div className="s_class_timetable">
                                        <thead className="s_class_timebody">
                                        <tr className="s_class_tr">
                                            <th className="s_class_time1"></th>
                                            <th className="s_class_time">월</th>
                                            <th className="s_class_time">화</th>
                                            <th className="s_class_time">수</th>
                                            <th className="s_class_time">목</th>
                                            <th className="s_class_time">금</th>
                                        </tr>
                                        <tbody>
                                        <tr>
                                            <td className="s_class_td">1</td>
                                            <td className="s_class_td_sub">
                                                <ListGroup.Item action variant="success" className="s_class_list">
                                                    <h3>물리학</h3><h7>오한석</h7>
                                                </ListGroup.Item>
                                            </td>
                                            <td className="s_class_td_sub">
                                                <ListGroup.Item action variant="warning" className="s_class_list">
                                                    <h3>국어</h3><h7>김은주</h7>
                                                </ListGroup.Item>
                                            </td>
                                            <td className="s_class_td_sub">
                                                <ListGroup.Item action variant="danger" className="s_class_list">
                                                    <h3>한국사</h3><h7>최태성</h7>
                                                </ListGroup.Item>
                                            </td>
                                            <td className="s_class_td_sub">
                                                <ListGroup.Item action variant="info" className="s_class_list">
                                                    <h3>수학</h3><h7>신승범</h7>
                                                </ListGroup.Item>
                                            </td>
                                            <td className="s_class_td_sub">
                                                <ListGroup.Item action variant="dark" className="s_class_list">
                                                    <h3>영어</h3><h7>이준석</h7>
                                                </ListGroup.Item>
                                            </td>


                                        </tr>
                                        <tr>
                                            <td className="s_class_td">2</td>
                                            <td className="s_class_td_sub">
                                                <ListGroup.Item action variant="success" className="s_class_list">
                                                    <h3>물리학</h3><h7>오한석</h7>
                                                </ListGroup.Item>
                                            </td>
                                            <td className="s_class_td_sub">
                                                <ListGroup.Item action variant="warning" className="s_class_list">
                                                    <h3>국어</h3><h7>김은주</h7>
                                                </ListGroup.Item>
                                            </td>
                                            <td className="s_class_td_sub">
                                                <ListGroup.Item action variant="danger" className="s_class_list">
                                                    <h3>한국사</h3><h7>최태성</h7>
                                                </ListGroup.Item>
                                            </td>
                                            <td className="s_class_td_sub">
                                                <ListGroup.Item action variant="info" className="s_class_list">
                                                    <h3>수학</h3><h7>신승범</h7>
                                                </ListGroup.Item>
                                            </td>
                                            <td className="s_class_td_sub">
                                                <ListGroup.Item action variant="dark" className="s_class_list">
                                                    <h3>영어</h3><h7>이준석</h7>
                                                </ListGroup.Item>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="s_class_td">3</td>
                                            <td className="s_class_td_sub">
                                                <ListGroup.Item action variant="success" className="s_class_list">
                                                    <h3>물리학</h3><h7>오한석</h7>
                                                </ListGroup.Item>
                                            </td>
                                            <td className="s_class_td_sub">
                                                <ListGroup.Item action variant="warning" className="s_class_list">
                                                    <h3>국어</h3><h7>김은주</h7>
                                                </ListGroup.Item>
                                            </td>
                                            <td className="s_class_td_sub">
                                                <ListGroup.Item action variant="danger" className="s_class_list">
                                                    <h3>한국사</h3><h7>최태성</h7>
                                                </ListGroup.Item>
                                            </td>
                                            <td className="s_class_td_sub">
                                                <ListGroup.Item action variant="info" className="s_class_list">
                                                    <h3>수학</h3><h7>신승범</h7>
                                                </ListGroup.Item>
                                            </td>
                                            <td className="s_class_td_sub">
                                                <ListGroup.Item action variant="dark" className="s_class_list">
                                                    <h3>영어</h3><h7>이준석</h7>
                                                </ListGroup.Item>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="s_class_td">4</td>
                                            <td className="s_class_td_sub">
                                                <ListGroup.Item action variant="success" className="s_class_list">
                                                    <h3>물리학</h3><h7>오한석</h7>
                                                </ListGroup.Item>
                                            </td>
                                            <td className="s_class_td_sub">
                                                <ListGroup.Item action variant="warning" className="s_class_list">
                                                    <h3>국어</h3><h7>김은주</h7>
                                                </ListGroup.Item>
                                            </td>
                                            <td className="s_class_td_sub">
                                                <ListGroup.Item action variant="danger" className="s_class_list">
                                                    <h3>한국사</h3><h7>최태성</h7>
                                                </ListGroup.Item>
                                            </td>
                                            <td className="s_class_td_sub">
                                                <ListGroup.Item action variant="info" className="s_class_list">
                                                    <h3>수학</h3><h7>신승범</h7>
                                                </ListGroup.Item>
                                            </td>
                                            <td className="s_class_td_sub">
                                                <ListGroup.Item action variant="dark" className="s_class_list">
                                                    <h3>영어</h3><h7>이준석</h7>
                                                </ListGroup.Item>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="s_class_td">5</td>
                                            <td className="s_class_td_sub">
                                                <ListGroup.Item action variant="success" className="s_class_list">
                                                    <h3>물리학</h3><h7>오한석</h7>
                                                </ListGroup.Item>
                                            </td>
                                            <td className="s_class_td_sub">
                                                <ListGroup.Item action variant="warning" className="s_class_list">
                                                    <h3>국어</h3><h7>김은주</h7>
                                                </ListGroup.Item>
                                            </td>
                                            <td className="s_class_td_sub">
                                                <ListGroup.Item action variant="danger" className="s_class_list">
                                                    <h3>한국사</h3><h7>최태성</h7>
                                                </ListGroup.Item>
                                            </td>
                                            <td className="s_class_td_sub">
                                                <ListGroup.Item action variant="info" className="s_class_list">
                                                    <h3>수학</h3><h7>신승범</h7>
                                                </ListGroup.Item>
                                            </td>
                                            <td className="s_class_td_sub">
                                                <ListGroup.Item action variant="dark" className="s_class_list">
                                                    <h3>영어</h3><h7>이준석</h7>
                                                </ListGroup.Item>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="s_class_td">6</td>
                                            <td className="s_class_td_sub">
                                                <ListGroup.Item action variant="success" className="s_class_list">
                                                    <h3>물리학</h3><h7>오한석</h7>
                                                </ListGroup.Item>
                                            </td>
                                            <td className="s_class_td_sub">
                                                <ListGroup.Item action variant="warning" className="s_class_list">
                                                    <h3>국어</h3><h7>김은주</h7>
                                                </ListGroup.Item>
                                            </td>
                                            <td className="s_class_td_sub">
                                                <ListGroup.Item action variant="danger" className="s_class_list">
                                                    <h3>한국사</h3><h7>최태성</h7>
                                                </ListGroup.Item>
                                            </td>
                                            <td className="s_class_td_sub">
                                                <ListGroup.Item action variant="info" className="s_class_list">
                                                    <h3>수학</h3><h7>신승범</h7>
                                                </ListGroup.Item>
                                            </td>
                                            <td className="s_class_td_sub">
                                                <ListGroup.Item action variant="dark" className="s_class_list">
                                                    <h3>영어</h3><h7>이준석</h7>
                                                </ListGroup.Item>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="s_class_td">7</td>
                                            <td className="s_class_td_sub">
                                                <ListGroup.Item action variant="success" className="s_class_list">
                                                    <h3>물리학</h3><h7>오한석</h7>
                                                </ListGroup.Item>
                                            </td>
                                            <td className="s_class_td_sub">
                                                <ListGroup.Item action variant="warning" className="s_class_list">
                                                    <h3>국어</h3><h7>김은주</h7>
                                                </ListGroup.Item>
                                            </td>
                                            <td className="s_class_td_sub">
                                                <ListGroup.Item action variant="danger" className="s_class_list">
                                                    <h3>한국사</h3><h7>최태성</h7>
                                                </ListGroup.Item>
                                            </td>
                                            <td className="s_class_td_sub">
                                                <ListGroup.Item action variant="info" className="s_class_list">
                                                    <h3>수학</h3><h7>신승범</h7>
                                                </ListGroup.Item>
                                            </td>
                                            <td className="s_class_td_sub">
                                                <ListGroup.Item action variant="dark" className="s_class_list">
                                                    <h3>영어</h3><h7>이준석</h7>
                                                </ListGroup.Item>
                                            </td>
                                        </tr>
                                        </tbody>
                                        </thead>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className="s_class_col_right">
                        <Card>
                            <CardBody>
                                <div className=".s_class_detail">
                                    <div className="s_class_title">
                                        <h3 className="s_class_sub">화요일 1교시(09:00~09:50) 국어</h3>
                                        <h3 className="s_class_sub">담당교사: 서지은</h3>
                                    </div>
                                    { showDetail === false &&
                                    <div className="s_class_scroll">
                                        <MDBTable scrollY>
                                            <MDBTableHead columns={data.columns} />
                                            <MDBTableBody rows={data.rows} onClick={e => setShowDetail(!showDetail)}/>
                                        </MDBTable>
                                    </div>}
                                    {showDetail === true &&
                                    <div className="s_class_scroll">
                                        <div className="s_class_detail_con">
                                            <MDBTable>
                                                <tr><h2 className="s_class_detail_header">교술 갈래의 이해 - 상기</h2></tr>
                                                <tr>
                                                    <div className="s_class_detail_file">
                                                        <Row>
                                                            <Col><text className="s_class_detail_file_txt1"> 상기 자료.pdf</text></Col>
                                                            <Col><text className="s_class_detail_file_txt2">down</text></Col>
                                                        </Row>
                                                    </div>
                                                </tr>
                                            </MDBTable>
                                            <div className="s_class_detail_main">

                                            </div>
                                            <div className="s_class_Listbtn">
                                                <Button color="success" onClick={pushListBtn}>목록</Button>
                                            </div>
                                        </div>

                                    </div>}
                                    <div>
                                        <h4 className="s_class_h4">수행평가</h4>
                                        <MDBTable scrollY className="s_class_scroll2">
                                            <MDBTableHead columns={data2.columns} />
                                            <MDBTableBody rows={data2.rows} />
                                        </MDBTable>
                                    </div>

                                    <div>
                                        <h5 className="s_class_counter">수업 시작까지 {counter}</h5>
                                        <Button className="s_class_btn" onClick={pushBtn}>수강 시작</Button>
                                    </div>

                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}


export default Class;
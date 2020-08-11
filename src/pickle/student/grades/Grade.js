import React, { useEffect, useState} from 'react';
import { Bar, Line, Radar } from 'react-chartjs-2';
import axios from 'axios'
import {Card, CardBody, Row, Col, Table} from 'reactstrap';
import './grades.css'

//import { Chart } from 'chart.js';
//import Colgroup from 'react-colgroup';
//import { useSelector,useDispatch } from 'react-redux';
//import { lineChartOptions } from './chartConfig';


const SEARCH_GRADE = 'grade/SEARCH_GRADE';
const searchAction = data => ({type: SEARCH_GRADE, payload: data});
export const gradeReducer = (state = {}, action) => {
    switch (action.type) {
        case SEARCH_GRADE: return action.payload
        default: return state
    }
}
const searchGradeThunk = data => dispatch => {
    axios.post('/grade', {})
        .then(res => {dispatch(searchAction(res.data))})
        .catch(err => {throw(err)})
}




const Grade = () => {
    const [selectGrade, setSelectGrade] = useState(null);
    const [selectClass, setSelectClass] = useState(null);
    const [selectUser, setSelectUser] = useState(null);
    const [selectExam, setSelectExam] = useState(null);
    const [checkedKor, setCheckedKor] = useState(false);
    const [checkedEng, setCheckedEng] = useState(false);
    const [checkedMat, setCheckedMat] = useState(false);
    const [checkedHis, setCheckedHis] = useState(false);
    const [checkedPhl, setCheckedPhl] = useState(false);
    const [checkedEco, setCheckedEco] = useState(false);
    const [checkedPhy, setCheckedPhy] = useState(false);
    const [checkedBio, setCheckedBio] = useState(false);
    const [checkedFor, setCheckedFor] = useState(false);
    const [chartDataMain , setChartDataMain] = useState({});
    const [chartDataAllSub , setChartDataAllSub] = useState({});
    const [chartDataMain2, setChartDataMain2] = useState({});
    const [showDetail, setShowDetail] = useState(false);

    //const [] = useSelector()

    //const [subject, setSubject] =useState([])



    const chart1 = ()=>{
        setChartDataMain({
            labels:['물리학','수학','한국사','국어'],
            datasets:[
                {
                    label: '내 점수',
                    data:[84,68,79,91],
                    backgroundColor:[
                        '#81d056','#3737dc','#db9957','#e5e883'
                    ]
                },
                {
                    label:'과목 평균점수',
                    data:[57,48,62,36],
                    backgroundColor:[
                        '#446f2d','#1c1c79','#8b5d2d','#b8bd26'
                    ]
                }
            ]
        })
    }


    const chart2 = ()=>{
        setChartDataAllSub({
            labels:['물리학','수학','한국사','국어'],
            datasets:[
                {
                    label: "1학기 1회",
                    data:[56,35,65,58],
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    borderColor: '#81d056'

                },
                {
                    label: "1학기 2회",
                    data:[84,68,79,91],
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    borderColor: '#375ad0'

                }
            ]
        })
    }

    const chart3 = ()=>{
        setChartDataMain2({
            labels:['1학기 1회','1학기 2회'],
            datasets:[
                {
                    label: '물리학',
                    data:[79,91],
                    borderColor: '#81d056'
                },
                {
                    label: '수학',
                    data:[65,68],
                    borderColor: '#5674e2'
                }
            ]
        })
    }


    useEffect(()=>{chart1()},[])
    useEffect(()=>{chart2()},[])
    useEffect(()=>{chart3()},[])



    const gradeChanger =e => {
        e.preventDefault()
        setSelectGrade(e.target.value)
    }
    const classChanger =e => {
        e.preventDefault()
        setSelectClass(e.target.value)
    }
    const userChanger =e => {
        e.preventDefault()
        setSelectUser(e.target.value)
    }
    const examChanger =e => {
        e.preventDefault()
        setSelectExam(e.target.value)
    }
    const onChangeKor = e =>{
        e.preventDefault()
        setCheckedKor(e.target.checked)
    }
    const onChangeEng = e =>{
        e.preventDefault()
        setCheckedEng(e.target.checked)
    }
    const onChangeMat = e =>{
        e.preventDefault()
        setCheckedMat(e.target.checked)
    }
    const onChangeHis = e =>{
        e.preventDefault()
        setCheckedHis(e.target.checked)
    }
    const onChangePhl = e =>{
        e.preventDefault()
        setCheckedPhl(e.target.checked)
    }
    const onChangeEco = e =>{
        e.preventDefault()
        setCheckedEco(e.target.checked)
    }
    const onChangePhy = e =>{
        e.preventDefault()
        setCheckedPhy(e.target.checked)
    }
    const onChangeBio = e =>{
        e.preventDefault()
        setCheckedBio(e.target.checked)
    }
    const onChangeFor = e =>{
        e.preventDefault()
        setCheckedFor(e.target.checked)
    }




    return (
        <>
            <div className="s_grade_header">
                <Card>
                    <CardBody>
                        <h2>홍길동 성적분석</h2>
                    </CardBody>
                </Card>
            </div>

            { showDetail === false &&
            <div>
                <div className="s_grade_search">
                    <Card>
                        <CardBody className="s_grade_cb">
                            <div>
                                <Table>
                                    <tr>
                                        <td><h2>검색</h2></td>
                                        <td className="s_grade_td_lb"><label>학년</label></td>
                                        <td className="s_grade_td">
                                            <select className="s_grade_selectSize" value={selectGrade} onChange={gradeChanger}>
                                                <option>선택</option>
                                                <option value={"firstGrade"}>1학년</option>
                                                <option value={"secondGrade"}>2학년</option>
                                                <option value={"thirdGrade"}>3학년</option>
                                                <option value={"all"}>전학년</option>
                                            </select>
                                        </td>

                                        <td className="s_grade_td_lb"><label> 시험 </label></td>
                                        <td className="s_grade_td"><select className="s_grade_selectSize" value={selectExam} onChange={examChanger}>
                                            <option>선택</option>
                                            <option value={"exam1_1"}>1학기 1회고사</option>
                                            <option value={"exam1_2"}>1학기 2회고사</option>
                                            <option value={"exam2_1"}>2학기 1회고사</option>
                                            <option value={"exam2_2"}>2학기 2회고사</option>
                                            <option value={"exam1"}>1학기</option>
                                            <option value={"exam2"}>2학기</option>
                                            <option value={"examAll"}>전체</option>
                                        </select>
                                        </td>

                                        <td className="s_grade_td_lb"><label> 과목 </label></td>
                                        <td className="s_grade_td">
                                            <text className="s_grade_text">국어</text>
                                            <input type="checkbox" className="s_grade_click" checked={checkedKor} onChange={onChangeKor}/>
                                            <text className="s_grade_text">영어</text>
                                            <input type="checkbox" checked={checkedEng} onChange={onChangeEng}/>
                                            <text className="s_grade_text">수학</text>
                                            <input type="checkbox" checked={checkedMat} onChange={onChangeMat}/>
                                            <text className="s_grade_text">생활과 윤리</text>
                                            <input type="checkbox" checked={checkedPhl} onChange={onChangePhl}/>
                                            <text className="s_grade_text">경제</text>
                                            <input type="checkbox" checked={checkedEco} onChange={onChangeEco}/>
                                            <text className="s_grade_text">물리</text>
                                            <input type="checkbox"  checked={checkedPhy} onChange={onChangePhy}/>
                                            <text className="s_grade_text">생명과학</text>
                                            <input type="checkbox" checked={checkedBio} onChange={onChangeBio}/>
                                            <text className="s_grade_text">한국사</text>
                                            <input type="checkbox" checked={checkedHis} onChange={onChangeHis}/>
                                            <text className="s_grade_text">제 2 외국어</text>
                                            <input type="checkbox" checked={checkedFor} onChange={onChangeFor}/></td>
                                        <td><button className="s_grade_btn" onClick={e => setShowDetail(!showDetail)}>검색</button></td>
                                    </tr>
                                </Table>
                            </div>
                        </CardBody>
                    </Card>
                </div>


                <div className="s_grade_center">
                    <Row>
                        <Col className="s_grade_col_left">
                            <Card>
                                <CardBody>
                                    <Bar data={chartDataMain}/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className="s_grade_col_right">
                            <Card>
                                <CardBody>
                                    <Line data={chartDataMain}/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>}

            {showDetail === true &&
            <div>
                <div className="s_grade_search">
                    <Card>
                        <CardBody>
                            <div>
                                <Row className="s_grade_search_body">
                                    <Col className="s_grade_h2"><h2>검색</h2></Col>
                                    <Col className="s_grade_label"><label> 학년</label></Col>
                                    <Col><select className="s_grade_selectSize" value={selectGrade} onChange={gradeChanger}>
                                        <option>선택</option>
                                        <option value={"firstGrade"}>1학년</option>
                                        <option value={"secondGrade"}>2학년</option>
                                        <option value={"thirdGrade"}>3학년</option>
                                        <option value={"all"}>전학년</option>
                                    </select>
                                    </Col>

                                    <Col><label className="s_grade_label"> 시험 </label></Col>
                                    <Col><select className="s_grade_selectSize" value={selectExam} onChange={examChanger}>
                                        <option>선택</option>
                                        <option value={"exam1_1"}>1학기 1회고사</option>
                                        <option value={"exam1_2"}>1학기 2회고사</option>
                                        <option value={"exam2_1"}>2학기 1회고사</option>
                                        <option value={"exam2_2"}>2학기 2회고사</option>
                                        <option value={"exam1"}>1학기</option>
                                        <option value={"exam2"}>2학기</option>
                                        <option value={"examAll"}>전체</option>
                                    </select>
                                    </Col>

                                    <Col><label className="s_grade_label2"> 과목 </label></Col>
                                    <Col><text className="s_grade_text">국어</text></Col>
                                    <input type="checkbox" checked={checkedKor} onChange={onChangeKor}/>
                                    <text className="s_grade_text">영어</text>
                                    <input type="checkbox" checked={checkedEng} onChange={onChangeEng}/>
                                    <text className="s_grade_text">수학</text>
                                    <input type="checkbox" checked={checkedMat} onChange={onChangeMat}/>
                                    <text className="s_grade_text">생활과 윤리</text>
                                    <input type="checkbox" checked={checkedPhl} onChange={onChangePhl}/>
                                    <text className="s_grade_text">경제</text>
                                    <input type="checkbox" checked={checkedEco} onChange={onChangeEco}/>
                                    <text className="s_grade_text">물리</text>
                                    <input type="checkbox"  checked={checkedPhy} onChange={onChangePhy}/>
                                    <text className="s_grade_text">생명과학</text>
                                    <input type="checkbox" checked={checkedBio} onChange={onChangeBio}/>
                                    <text className="s_grade_text">한국사</text>
                                    <input type="checkbox" checked={checkedHis} onChange={onChangeHis}/>
                                    <text className="s_grade_text">제 2 외국어</text>
                                    <input type="checkbox" checked={checkedFor} onChange={onChangeFor}/>
                                    <Col><button className="s_grade_btn" onClick={e => setShowDetail(!showDetail)}>검색</button></Col>
                                </Row>
                            </div>
                        </CardBody>
                    </Card>
                </div>


                <div className="s_grade_center">
                    <Row>
                        <Col className="s_grade_col_left">
                            <Card>
                                <CardBody>
                                    <Bar data={chartDataMain2}/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className="s_grade_col_right">
                            <Card>
                                <CardBody>
                                    <Line data={chartDataMain}/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>



                <div className="s_grade_center">
                    <Row>
                        <Col className="s_grade_col_left">
                            <Card>
                                <CardBody>
                                    <Radar data={chartDataAllSub}/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className="s_grade_col_right">
                            <Card>
                                <CardBody>
                                    <Line data={chartDataMain}/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>


                <div className="s_grade_center">
                    <Row>
                        <Col className="s_grade_col_left">
                            <Card>
                                <CardBody>
                                    <Bar data={chartDataMain}/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className="s_grade_col_right">
                            <Card>
                                <CardBody>
                                    <Line data={chartDataMain}/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>



                <div className="s_grade_center">
                    <Row>
                        <Col className="s_grade_col_left">
                            <Card>
                                <CardBody>
                                    <Bar data={chartDataMain}/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className="s_grade_col_right">
                            <Card>
                                <CardBody>
                                    <Line data={chartDataMain}/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>

            </div>}


        </>
    )};

export default Grade;
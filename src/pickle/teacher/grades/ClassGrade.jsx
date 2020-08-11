import React from "react";
import {Row, Card, CardBody, CardTitle} from 'reactstrap';
import {Colxx} from "../../commons/CustomComponent"
import {barChartData, scatterChartData} from "./chartTooltip"

const ScatterChart = React.lazy(() => import('./Chart.Scatter'))
const BarChart = React.lazy(() => import('./Chart.Bar'))
const Sorted = React.lazy(() => import('./Sorted'))

const ClassGrade = () => {
    return <>
        <Row className="rounded">
            <Colxx xxs="12" lg="12" className="mb-5">
                <Card>
                    <CardBody>
                        <CardTitle>
                            과목별 평균
                        </CardTitle>
                        <div className="chart-container">
                            <BarChart shadow={false} data={barChartData}/>
                        </div>
                    </CardBody>
                </Card>
            </Colxx>
        </Row>
        <Row className="rounded">
            <Colxx xxs="12" lg="6" className="mb-4">
                <Card>
                    <CardBody>
                        <CardTitle>
                            학생 분포도
                        </CardTitle>
                        <div className="chart-container">
                            <ScatterChart shadow={false} data={scatterChartData}/>
                        </div>
                    </CardBody>
                </Card>
            </Colxx>
            <Colxx xxs="12" lg="3" className="mb-4">
                <Card>
                    <CardBody>
                        <CardTitle>
                            평균 순위
                        </CardTitle>
                        <div className="chart-container">
                            <Sorted/>
                        </div>
                    </CardBody>
                </Card>
            </Colxx>
            <Colxx xxs="12" lg="3" className="mb-4">
                <Card>
                    <CardBody>
                        <CardTitle>
                            과목별 순위
                            <span>
                                <select style={{width: 100, float: "right"}}>
                                    <option>국어</option>
                                    <option>영어</option>
                                    <option>수학</option>
                                    <option>생활과 윤리</option>
                                    <option>경제</option>
                                    <option>한국사</option>
                                    <option>생명과학</option>
                                    <option>물리</option>
                                    <option>제2외국어</option>
                                </select>
                            </span>
                        </CardTitle>
                        <div className="chart-container">
                            <Sorted/>
                        </div>
                    </CardBody>
                </Card>
            </Colxx>
        </Row>
    </>
}
export default ClassGrade
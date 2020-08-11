import React from "react";
import {lineChartData, ThemeColors} from "./chartTooltip"
import {Colxx} from "../../commons/CustomComponent";
import {Row, Card, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

const BarChart = React.lazy(() => import('./Chart.Bar'))
const LineChart = React.lazy(() => import('./Chart.Line'))
const RadarChart = React.lazy(() => import('./Chart.Radar'))
const Select = React.lazy(() => import('./Select'))
const chartTooltipColor = ThemeColors()

const radarChartData = {
    labels: ['국어', '영어', '수학', '사회', '과학'],
    datasets: [
        {
            label: '학생',
            borderWidth: 2,
            pointBackgroundColor: chartTooltipColor.themeColor1,
            borderColor: chartTooltipColor.themeColor1,
            backgroundColor: chartTooltipColor.themeColor1_10,
            data: [80, 90, 70],
        },
        {
            label: '전체',
            borderWidth: 2,
            pointBackgroundColor: chartTooltipColor.themeColor2,
            borderColor: chartTooltipColor.themeColor2,
            backgroundColor: chartTooltipColor.themeColor2_10,
            data: [68, 80, 95],
        },
    ],
};
const barChartData = {
    labels: ['국어', '영어', '수학', '생활과 윤리', '경제', '한국사', '생명과학', '물리', '제2외국어'],
    datasets: [
        {
            label: '학생 이름',
            borderColor: chartTooltipColor.themeColor1,
            backgroundColor: chartTooltipColor.themeColor1_10,
            data: [65, 85, 76, 34, 45, 65, 85, 76, 34],
            borderWidth: 2,
        },
    ]
}

const StudentScore = () => {


    return <>
        <Row className="rounded">
            <Colxx xxs="12" lg="2" className="mb-4">
                <Card>
                    <CardBody>
                        <CardTitle>
                            학생 선택
                        </CardTitle>
                        <div className="chart-container">
                            <Select/>
                        </div>
                    </CardBody>
                </Card>
            </Colxx>
            <Colxx xxs="12" lg="10" className="mb-4">
                <Card>
                    <CardBody>
                        <CardTitle>
                            학생 성적
                        </CardTitle>
                        <div className="chart-container">
                            <BarChart shadow={false} data={barChartData}/>
                        </div>
                    </CardBody>
                </Card>
            </Colxx>
        </Row>
        <Row className="rounded">
            <Colxx xxs="12" lg="8" className="mb-4">
                <Card>
                    <CardBody>
                        <CardTitle>
                            성적 분위 추이
                        </CardTitle>
                        <div className="chart-container">
                            <LineChart shadow={false} data={lineChartData}/>
                        </div>
                    </CardBody>
                </Card>
            </Colxx>
            <Colxx xxs="12" lg="4" className="mb-4">
                <Card>
                    <CardBody>
                        <CardTitle>
                            과목별 전체 평균 대비 최근 성적
                        </CardTitle>
                        <div className="chart-container">
                            <RadarChart shadow={false} data={radarChartData}/>
                        </div>
                    </CardBody>
                </Card>
            </Colxx>
        </Row>

    </>

}
export default StudentScore
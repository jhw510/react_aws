import React from "react";
import {Card, CardBody, CardTitle, Progress} from 'reactstrap';


const data = [
    {
        title: '국어',
        total: 15,
        status: 9,
    },
    {
        title: '영어',
        total: 15,
        status: 3,
    },    {
        title: '수학',
        total: 15,
        status: 7,
    },    {
        title: '과학',
        total: 15,
        status: 14,
    },    {
        title: '사회',
        total: 15,
        status: 3,
    },
];


const Grade = ({cardClass}) => {
    return <>
        <Card className={cardClass}>
            <CardBody>
                <CardTitle>
                    <i className="simple-icon-graduation"/> 우리 반 성적
                </CardTitle>
                <br/>
                {data.map((s, index) => {
                    return (
                        <div key={index} className="mb-4">
                            <p className="mb-2">
                                {s.title}
                                <span className="float-right text-muted">
                                            {s.status}등 / {s.total}반
                                        </span>
                            </p>
                            <Progress value={((s.total - s.status) / s.total) * 100}/>
                        </div>
                    );
                })}
            </CardBody>
        </Card>
    </>
}
export default Grade
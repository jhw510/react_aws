import React from "react";
import {Card, CardBody, CardTitle, Progress} from 'reactstrap';


const data = [
    {
        title: '국어',
        total: 100,
        status: 80,
    },
    {
        title: '영어',
        total: 100,
        status: 50,
    },    {
        title: '수학',
        total: 100,
        status: 65,
    },    {
        title: '과학',
        total: 100,
        status: 90,
    },    {
        title: '사회',
        total: 100,
        status: 20,
    },
];


const Grade = ({cardClass}) => {
    return <>
        <Card className={cardClass}>
            <CardBody>
                <CardTitle>
                    <i className="simple-icon-graduation"/> 나의 성적
                </CardTitle>
                <br/>
                {data.map((s, index) => {
                    return (
                        <div key={index} className="mb-4">
                            <p className="mb-2">
                                {s.title}
                                <span className="float-right text-muted">
                                            {s.status}/{s.total}
                                        </span>
                            </p>
                            <Progress value={(s.status / s.total) * 100}/>
                        </div>
                    );
                })}
            </CardBody>
        </Card>
    </>
}
export default Grade
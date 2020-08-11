import React from 'react';
import {Card, CardBody} from 'reactstrap';
import {CircularProgressbar} from 'react-circular-progressbar';

const Attendance = ({
                        icon = 'simple-icon-pie-chart',
                        title = '오늘의 출석률',
                        detail = '학생 인원 : 25명',
                        percent = 80,
                        progressText = '80/100',
                    }) => {
    return (
        <Card className="progress-banner">
            <CardBody className="justify-content-between d-flex flex-row align-items-center">
                <div>
                    <i
                        className={`${icon} mr-2 text-white align-text-bottom d-inline-block`}
                    />
                    <div>
                        <p className="lead text-white">{title}</p>
                        <p className="text-small text-white">{detail}</p>
                    </div>
                </div>
                <div className="progress-bar-circle progress-bar-banner position-relative">
                    <CircularProgressbar
                        strokeWidth={4}
                        value={percent}
                        text={progressText}
                    />
                </div>
            </CardBody>
        </Card>
    );
};
export default React.memo(Attendance);
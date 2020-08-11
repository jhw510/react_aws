import React from "react";
import {Card, CardBody} from 'reactstrap';
import './Home.css'

const Streaming = () => {
    return <div className="main-streaming-div">
        <Card>
            <CardBody>
                <div className="main-streaming-container">
                    <div className="main-video-container">
                        <video className="main-video-component" autoPlay src={""} controls/>
                    </div>
                </div>
                <div className="main-div-padding">
                <button className="btn border-0 btn-outline-primary main-fontsize15">
                    화상수업 체험해보기
                </button>
                </div>
            </CardBody>
        </Card>
    </div>
}
export default Streaming
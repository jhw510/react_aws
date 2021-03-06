import React from "react";
import './s-streaming.css'
import {Card, CardBody, CardTitle, Table} from "reactstrap";
import {Link} from "react-router-dom";
import picklelogo from "../../assets/img/main_logo.png"

const teacherStudentStreamingTypes = {REQUEST: "teacherStudentStreaming/REQUEST"}
const teacherStudentStreamingRequest = (action) => ({type: teacherStudentStreamingTypes.REQUEST, payload: action.payload})
export const teacherStudentStreamingReducer = ( state = {}, action) => {
    switch (action.type){
        case teacherStudentStreamingTypes.REQUEST: return {...state, payload: action.payload}
        default: return state
    }
}

class TeacherStudentStreaming extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDisabled: false,
            callDisabled: true,
            hangUpDisabled: true,
            servers: null,
            pc1: null,
            pc2: null,
            localStream: null,
            socket : null
        }
        this.localVideoRef = React.createRef();
        this.remoteVideoRef = React.createRef();

        this.start = this.start.bind(this)
        this.gotRemoteStream = this.gotRemoteStream.bind(this)
        this.call = this.call.bind(this)
        this.onCreateOfferSuccess = this.onCreateOfferSuccess.bind(this)
        this.onCreateAnswerSuccess = this.onCreateAnswerSuccess.bind(this)
        this.onIceCandidate = this.onIceCandidate.bind(this)
        this.onIceStateChange = this.onIceStateChange.bind(this)
        this.hangUp = this.hangUp.bind(this)

    }

    componentDidMount() {
    }

    start = () => {
        this.setState({
            startDisabled: true
        });
        navigator.mediaDevices.getUserMedia({video : true})
            .then(stream=>{
                this.localVideoRef.current.srcObject = stream;
                this.setState({
                    callDisabled: false,
                    localStream: stream
                });
            })
            .catch(e => alert("getUserMedia() error:" + e.name));
    };

    gotRemoteStream = event => {
        let remoteVideo = this.remoteVideoRef.current;
        if (remoteVideo.srcObject !== event.streams[0]) {
            remoteVideo.srcObject = event.streams[0];
        }
    }


    call = () => {
        this.setState({
            callDisabled: true,
            hangUpDisabled: false
        });
        let { localStream } = this.state;

        let servers = null,
            pc1 = new RTCPeerConnection(servers),
            pc2 = new RTCPeerConnection(servers)
        pc1.onicecandidate = e => this.onIceCandidate(pc1, e)
        pc1.oniceconnectionstatechange = e => this.onIceStateChange(pc1, e)
        pc2.onicecandidate = e => this.onIceCandidate(pc2, e)
        pc2.oniceconnectionstatechange = e => this.onIceStateChange(pc2, e)
        pc2.ontrack = e=>this.gotRemoteStream(e)
        localStream
            .getTracks()
            .forEach(track => pc1.addTrack(track, localStream))
        pc1
            .createOffer({offerToReceiveAudio: 1, offerToReceiveVideo: 1})
            .then(this.onCreateOfferSuccess, error =>
                console.error("Failed to create session description", error.toString()))
        console.log("servers after call", servers)
        this.setState({
            servers,
            pc1,
            pc2,
            localStream
        })
    }

    onCreateOfferSuccess = desc => {
        let { pc1, pc2} = this.state;
        pc1.setLocalDescription(desc)
            .then(
                () =>
                    console.log("pc1 setLocalDescription complete createOffer"),
                error =>
                    console.error(
                        "pc1 Failed to set session description in createOffer",
                        error.toString()
                    )
            )

        pc2.setRemoteDescription(desc).then(
            () => {
                console.log("pc2 setRemoteDescription complete createOffer");
                pc2
                    .createAnswer()
                    .then(this.onCreateAnswerSuccess, error =>
                        console.error(
                            "pc2 Failed to set session description in createAnswer",
                            error.toString()
                        )
                    );
            },
            error =>
                console.error(
                    "pc2 Failed to set session description in createOffer",
                    error.toString()
                )
        )
    }

    onCreateAnswerSuccess = desc => {
        let { pc1, pc2 } = this.state

        pc1.setRemoteDescription(desc).then(
            () => {
                console.log("pc1 setRemoteDescription complete createAnswer");
                console.log("servers after createAnswer", this.state.servers);
            },
            error =>
                console.error(
                    "pc1 Failed to set session description in onCreateAnswer",
                    error.toString()
                )
        )

        pc2.setLocalDescription(desc)
            .then(
                () =>
                    console.log(
                        "pc2 setLocalDescription complete createAnswer"
                    ),
                error =>
                    console.error(
                        "pc2 Failed to set session description in onCreateAnswer",
                        error.toString()
                    )
            )
    }

    onIceCandidate = (pc, event) => {
        let { pc1, pc2 } = this.state;
        let otherPc = pc === pc1 ? pc2 : pc1;
        otherPc.addIceCandidate(event.candidate)
            .then(
                () => console.log("addIceCandidate success"),
                error =>
                    console.error(
                        "failed to add ICE Candidate",
                        error.toString()
                    )
            )
    }

    onIceStateChange = (pc, event) => {
        console.log("ICE state:", pc.iceConnectionState)
    }

    hangUp = () => {
        let { pc1, pc2 } = this.state;
        pc1.close();
        pc2.close();
        this.setState({
            pc1: null,
            pc2: null,
            hangUpDisabled: true,
            callDisabled: false
        })
    }

    render() {
        const lectureMeterialList = [{seq : 1,fistName : "현대문학의 이해", lastName : "수정/삭제"},{seq : 2,fistName : "고전문학의 이해", lastName : "수정/삭제"},{seq : 3,fistName : "근대문학의 이해", lastName : "수정/삭제"}]
        const studentList = [{seq : 1,fistName : "030501", lastName : "Mary"},{seq : 2,fistName : "030502", lastName : "Carrie"},{seq : 3,fistName : "030503", lastName : "Dorothy"}
            ,{seq : 4,fistName : "030504", lastName : "Helen"},{seq : 5,fistName : "030505", lastName : "Carol"},{seq : 6,fistName : "030506", lastName : "Betty"},{seq : 7,fistName : "030507", lastName : "Sally"}
            ,{seq : 8,fistName : "030508", lastName : "Susan"},{seq : 9,fistName : "030509", lastName : "Shirley"},{seq : 10,fistName : "030510", lastName : "Diane"},{seq : 11,fistName : "030511", lastName : "Anna"},
            {seq : 12,fistName : "030512", lastName : "Elizabeth"},{seq : 13,fistName : "030513", lastName : "Margaret"},{seq : 14,fistName : "030514", lastName : "Clara"}
            ,{seq : 15,fistName : "030515", lastName : "Annie"},{seq : 16,fistName : "030516", lastName : "Grace"},{seq : 17,fistName : "030517", lastName : "Nancy"},
            {seq : 18,fistName : "030518", lastName : "Frank"},{seq : 19,fistName : "030519", lastName : "Dennis"},{seq : 20,fistName : "030520", lastName : "Donald"},
            {seq : 21,fistName : "030521", lastName : "Athur"},{seq : 22,fistName : "030522", lastName : "Edward"},{seq : 23,fistName : "030523", lastName : "Harry"},
            {seq : 24,fistName : "030524", lastName : "Peter"},{seq : 25,fistName : "030525", lastName : "Richard"}]
        const { startDisabled, callDisabled, hangUpDisabled } = this.state;
        return (
            <>
                <div style={{textAlign : "center"}}>
                    <Link to="/home"><img src={picklelogo}/></Link>
                </div>
                <div className="s-streaming-container">
                    <div className="s-streaming-streaming-container">
                        <div className="s-streaming-video-container" >
                            <video ref={this.localVideoRef} className="s-streaming-teacher-video" autoPlay controls/></div>
                        <div className="s-streaming-comment-container">
                            <Card>
                                <p>4월 2주차 월요일 1교시 문학<br/>1차시 : 현대 문학의 이해</p>
                            </Card>
                        </div>
                    </div>
                    <div className="s-streaming-items-container">
                        <div className="s-streaming-member-list-container">
                            <Card>
                                <CardTitle className="s-streaming-member-list-title"><h4>멤버 리스트</h4></CardTitle>
                                <CardBody>
                                    <div style={{ width: "100%",
                                        height: "180px",
                                        overflow: "auto",
                                        margin : "auto"}}>
                                        <Table responsive className="s-streaming-member-list-table">
                                            <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>학번</th>
                                                <th>이름</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {studentList && studentList.map(student=><tr>
                                                <th scope="row">{student.seq}</th>
                                                <td>{student.fistName}</td>
                                                <td>{student.lastName}</td>
                                            </tr>)}
                                            </tbody>
                                        </Table>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="s-streaming-lecture-meterials-container">
                            <Card>
                                <CardTitle className="s-streaming-lecture-meterials-title"><h4>강의자료</h4></CardTitle>
                                <CardBody>
                                    <div style={{ width: "100%",
                                        height: "180px",
                                        overflow: "auto",
                                        margin : "auto"}}>
                                        <Table  size="sm" className="s-streaming-lecture-meterials-table">
                                            <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>파일명</th>
                                                <th></th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {lectureMeterialList && lectureMeterialList.map(lectureMeterial=><tr>
                                                <th scope="row">{lectureMeterial.seq}</th>
                                                <td>{lectureMeterial.fistName}</td>
                                                <td>{lectureMeterial.lastName}</td>
                                            </tr>)}
                                            </tbody>
                                        </Table>
                                    </div>


                                </CardBody>
                            </Card>
                        </div>
                        <video ref={this.remoteVideoRef} autoPlay controls className="s-streaming-student-video" />
                    </div>
                    <button onClick={this.start} disabled={startDisabled}>
                        Start{" "}
                    </button>{" "}
                    <button onClick={this.call} disabled={callDisabled}>
                        Call{" "}
                    </button>{" "}
                    <button onClick={this.hangUp} disabled={hangUpDisabled}>
                        Hang Up{" "}
                    </button>{" "}
                </div>


            </>

        )
    }
}

export default TeacherStudentStreaming

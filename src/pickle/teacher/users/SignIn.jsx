import React, {useState} from "react";
import {Card, CardBody, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

const signinTypes = {REQUEST: "signin/REQUEST"}
const signinRequest = action => ({type: signinTypes.REQUEST, payload: action.payload})
export const signinReducer = (state = {}, action) => {
    switch (action.type) {
        case signinTypes.REQUEST:
            return {...state, payload: action.payload}
        default:
            return state
    }
}

const SignIn = ({history}) => {
    //기본값 true로 줌
    const [isVisible, setIsVisible] = useState(true)
    const toggle = () => setIsVisible(!isVisible);

    return (
        <>
            <Card>
                <CardBody style={{textAlign: "center"}}>
                    <ModalHeader>
                        로그인
                    </ModalHeader>
                    <ModalBody>
                        <div className="row">
                            <label className="col-sm-2">ID</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <br/>
                        <div className="row form-group">
                            <label className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-9">
                                <input type="password" className="form-control"/>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            color="primary"
                            onClick={() => history.push(`/teacher`)}
                        >
                            로그인
                        </Button>{' '}
                        <Button
                            color="white"
                            onClick={() => history.push(`/home`)}
                        >
                            취소
                        </Button>
                    </ModalFooter>
                </CardBody>
            </Card>
        </>
    )
}
export default SignIn
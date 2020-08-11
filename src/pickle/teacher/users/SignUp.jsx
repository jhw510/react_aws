import React, {useState} from "react";
import './user.css'
import {Card, CardBody} from 'reactstrap'

const signupTypes = {REQUEST: "signup/REQUEST"}
const signupRequest = action => ({type: signupTypes.REQUEST, payload: action.payload})
export const signupReducer = (state = {}, action) => {
    switch (action.type) {
        case signupTypes.REQUEST:
            return {...state, payload: action.payload}
        default:
            return state
    }
}

const SignUp = ({history, match}) => {
    const [name, setName] = useState("")
    const [userId, setUserId] = useState("")
    const [userPw, setUserPw] = useState("")
    const [schoolName, setSchoolName] = useState("")
    const [curGrade, setCurGrade] = useState(1)
    const [homeClass, setHomeClass] = useState(1)
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const changeType = (value) => {
        let changed = parseInt(value)
        console.log(value)
        console.log(changed)
        console.log(typeof (value))
        console.log(typeof (changed))

    }

    return (
        <Card>
            <CardBody>
                <h1 className="card-title user-font-size25" style={{paddingLeft: 30}}>회원가입</h1><br/>

                {/*
                    <FormGroup>
                        <Label>아이디</Label>
                        <Input valid />
                        <FormFeedback valid>사용 가능한 아이디입니다</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label>아이디</Label>
                        <Input invalid />
                        <FormFeedback>중복된 아이디입니다</FormFeedback>
                    </FormGroup>*/}


                <form id="signupform" style={{textAlign: "right"}}>
                    <div className="row form-group">
                        <label className="col-sm-2 col-form-label">이름</label>
                        <div className="col-sm-8">
                            <input className="form-control" onChange={e => setName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row form-group">
                        <label className="col-sm-2 col-form-label">아이디</label>
                        <div className="col-sm-8">
                            <input className="form-control" onChange={e => setUserId(e.target.value)}/>
                        </div>
                        <button type="button" className="btn btn-outline-primary user-width100">중복 확인
                        </button>
                    </div>
                    <div className="row form-group">
                        <label className="col-sm-2 col-form-label">비밀번호</label>
                        <div className="col-sm-8">
                            <input type="password" className="form-control" onChange={e => setUserPw(e.target.value)}/></div>
                        </div>
                    <div className="row form-group">
                        <label className="col-sm-2 col-form-label">학교</label>
                        <div className="col-sm-8">
                            <input className="form-control"/>
                        </div>
                        <button type="button" className="btn btn-outline-primary user-width100">검색
                        </button>
                    </div>


                    <div className="row form-group">
                        <label className="col-sm-2 col-form-label">학년</label>
                        <span style={{margin: 8}}></span>
                        <select className="col-sm-3 form-control">
                            <option value="1">1학년</option>
                            <option value="2">2학년</option>
                            <option value="3">3학년</option>
                        </select>
                        <span style={{margin: -8}}></span>
                        <label className="col-sm-1 col-form-label">반</label>
                        <div className="col-sm-4">
                            <input className="form-control" placeholder="숫자만 입력해 주십시오" onChange={e => changeType(e.target.value)}/>
                        </div>
                    </div>


                    <div className="row form-group">
                        <label className="col-sm-2 col-form-label">연락처</label>
                        <div className="col-sm-8">
                            <input className="form-control" placeholder="숫자만 입력해 주십시오" onChange={e => setPhone(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row form-group">
                        <label className="col-sm-2 col-form-label">이메일</label>
                        <div className="col-sm-8">
                            <input type="email" className="form-control" onChange={e => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row form-group">
                        <label className="col-sm-2 col-form-label">프로필</label>
                        <div className="col-sm-8">
                            <input type="file" className="form-control-file"/>
                            <small className="form-text text-muted font_Nanum_Gothic" style={{textAlign: "left"}}>
                                프로필 사진을 첨부하여 주십시오
                            </small>
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="button" className="btn mr-3 btn-primary user-width100" onClick={() => history.push(`${match.url}/completed`)}>
                            회원가입
                        </button>
                        <button type="button" className="btn btn-outline-primary user-width90" onClick={() => history.goBack()}>
                            취소
                        </button>
                    </div>
                </form>
            </CardBody>
        </Card>
    )
}
export default SignUp
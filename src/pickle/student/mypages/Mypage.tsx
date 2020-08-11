import React, {useState} from "react";
import {Card, CardBody, CardTitle} from 'reactstrap'

const mypageTypes = {REQUEST: "mypage/REQUEST"}
const mypageRequest = action => ({type: mypageTypes.REQUEST, payload: action.payload})
export const sMypageReducer = (state = {}, action) => {
    switch (action.type) {
        case mypageTypes.REQUEST:
            return {...state, payload: action.payload}
        default:
            return state
    }
}

const Mypage = ({history}) => {
    const [name, setName] = useState("name")
    const [userId, setUserId] = useState("id")
    const [userPw, setUserPw] = useState("password")
    const [schoolName, setSchoolName] = useState("school name")
    const [curGrade, setCurGrade] = useState(1)
    const [homeClass, setHomeClass] = useState(1)
    const [phone, setPhone] = useState("01000000000")
    const [email, setEmail] = useState("default@test.com")

    return <Card>
        <CardBody>
            <CardTitle className="user-font-size25">마이페이지</CardTitle><br/>
            <form id="signupform" style={{textAlign: "right"}}>
                <div className="row form-group">
                    <label className="col-sm-2">이름</label>
                    <span style={{paddingLeft: 15}}>{name}</span>
                </div>
                <div className="row form-group">
                    <label className="col-sm-2">아이디</label>
                    <span style={{paddingLeft: 15}}>{userId}</span>
                </div>
                <div className="row form-group">
                    <label className="col-sm-2 col-form-label">비밀번호</label>
                    <div className="col-sm-8">
                        <input type="password" className="form-control" defaultValue={userPw}
                               onChange={e => setUserPw(e.target.value)}/></div>
                </div>
                <div className="row form-group">
                    <label className="col-sm-2 col-form-label">학교</label>
                    <div className="col-sm-8">
                        <input className="form-control" defaultValue={schoolName}
                               onChange={e => setSchoolName(e.target.value)}/>
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
                        <input className="form-control" defaultValue={homeClass}/>
                    </div>
                </div>
                <div className="row form-group">
                    <label className="col-sm-2 col-form-label">연락처</label>
                    <div className="col-sm-8">
                        <input className="form-control" defaultValue={phone} onChange={e => setPhone(e.target.value)}/>
                    </div>
                </div>
                <div className="row form-group">
                    <label className="col-sm-2 col-form-label">이메일</label>
                    <div className="col-sm-8">
                        <input type="email" className="form-control" defaultValue={email}
                               onChange={e => setEmail(e.target.value)}/>
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
                    <button type="button" className="btn mr-3 btn-primary user-width100">
                        변경하기
                    </button>
                    <button type="button" className="btn btn-outline-primary user-width90"
                            onClick={() => history.goBack()}>
                        취소
                    </button>
                </div>
            </form>
        </CardBody>
    </Card>
}
export default Mypage
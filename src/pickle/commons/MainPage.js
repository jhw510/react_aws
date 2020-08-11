import React, {useState} from "react";
import {useDispatch} from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios'
import {Row} from 'reactstrap';
import main_logo from '../assets/img/Logotype_4.png'
import main_student from '../assets/img/main_student.png'
import main_teacher from '../assets/img/main_teacher.png'
import './layout.css'
import '../assets/css/sass/themes/gogo.light.greenlime.scss'

const LOGIN_REQUEST = 'main/LOGIN_REQUEST'
const loginRequestAction = data => ({type: LOGIN_REQUEST, payload: data})
export const mainpageReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST': return action.payload
        default: return state
    }
}



const MainPage = () => {
    const [userId, setUserId] = useState("")
    const [userPw, setUserPw] = useState("")
    const [isTVisible, setIsTVisible] = useState(false)
    const [isSVisible, setIsSVisible] = useState(false)
    const history = useHistory()
    const dispatch = useDispatch()
    const onClickVisible = (t, s) => {
        setIsTVisible(t);
        setIsSVisible(s);
    }
    const onClickTLogin = e => {
        e.preventDefault()
        console.log(userId)
        console.log(userPw)
        axios.post(
            'http://localhost:8080/user/login',
            {userId: userId, userPw: userPw},
            {
                'Content-type' : 'application/json',
                //'Authorization' : 'JWT fefege...',
                'Access-Control-Allow-Origin': '*'
            })
            .then(
                ({data}) => {
                    sessionStorage.setItem("user", JSON.stringify(data))
                    dispatch(loginRequestAction(data))
                    console.log(data)
                    history.push("/teacher")
                }
            )
            .catch(error => { throw(error) })
    }


    return <div id="main-page">
        <div id="main-title">
            <img src={main_logo}/><br/>
        </div>
        <div className="btn border-0 main-img" onClick={() => onClickVisible(true, false)}>
            <img src={main_teacher}/><br/>
            <h2 className="main-select font_Noto_Sans_KR">교사</h2>
            {isTVisible && <div>
                <Row>
                    <label className="col-sm-4 col-form-label">아이디</label>
                    <input type="text" className="form-control col-sm-8" value={userId} onChange={e => setUserId(e.target.value)}/>
                </Row>
                <br/>
                <Row>
                    <label className="col-sm-4 col-form-label">비밀번호</label>
                    <input type="password" className="form-control col-sm-8" value={userPw} onChange={e => setUserPw(e.target.value)}/>
                </Row>
                <br/>
                <button className="btn border-0 btn-primary" onClick={onClickTLogin}><Link to="/teacher">로그인</Link></button>
            </div>}
        </div>

        <div className="btn border-0 main-img" onClick={() => onClickVisible(false, true)}>
            <img src={main_student}/><br/>
            <h2 className="main-select font_Noto_Sans_KR">학생</h2>
            {isSVisible && <div>
                <Row>
                    <label className="col-sm-4 col-form-label">아이디</label>
                    <input type="text" className="form-control col-sm-8" value={userId} onChange={e => setUserId(e.target.value)}/>
                </Row>
                <br/>
                <Row>
                    <label className="col-sm-4 col-form-label">비밀번호</label>
                    <input type="password" className="form-control col-sm-8" value={userPw} onChange={e => setUserPw(e.target.value)}/>
                </Row>
                <br/>
                <button className="btn border-0 btn-primary"><Link to="/student">로그인</Link></button>
            </div>}
        </div>

    </div>
}
export default MainPage
import React, {useState} from "react";
import {Card, CardBody} from 'reactstrap';
import './notice.css'
import {NavLink} from "react-router-dom";
import NoticeListTable from "./NoticeList.Table";

const noticeListTypes = {REQUEST: "noticeList/REQUEST"}
const noticeListRequest = action => ({type: noticeListTypes.REQUEST, payload: action.payload})
export const sNoticeListReducer = (state = {}, action) => {
    switch (action.type) {
        case noticeListTypes.REQUEST:
            return {...state, payload: action.payload}
        default:
            return state
    }
}

const NoticeList = ({match}) => {

    console.log(`noticelist id: ${match.params.id}`)
    const [articleNo, setArticleNo] = useState(0)
    const [category, setCategory] = useState("과목")
    const [title, setTitle] = useState("공지사항입니다.")
    const [commentCount, setCommentCount] = useState(0)
    const [createDate, setCreateDate] = useState("2020.01.01")
    const temp = ["전체 공지", "과목"]
    const categories = temp.map((temp) => (<option key={temp}>{temp}</option>))
    const total = ["여기에 들어온 데이터 개수만큼 들어있어야 함.", "2"]
    const totalContents = total.map((id) => (
        <NoticeListTable key={id} currentPage={match.params.id} articleNo={articleNo} category={category} title={title} commentCount={commentCount} createDate={createDate} match={match}/>
    ))

    return <Card>
        <CardBody>
            <h2>공지사항</h2><br/>
            <div className="text-right">
                <select className="col-sm-2 s-notice-selectbox">
                    {categories}
                </select>
            </div>
            <table className="table s-notice-margin0">
                <thead>
                <tr style={{textAlign: "center"}}>
                    <th>글번호</th>
                    <th>분류</th>
                    <th>제목</th>
                    <th>날짜</th>
                </tr>
                </thead>
                <tbody>
                {totalContents}
                </tbody>
            </table>
            <div className="btn-cover text-center">
                <button className="btn border-0 btn-outline-primary">1
                </button>
                <button className="btn border-0 btn-outline-primary">2
                </button>
            </div>
        </CardBody>
    </Card>
}
export default NoticeList
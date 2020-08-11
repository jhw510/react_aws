import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {Card, CardBody} from 'reactstrap';

const NoticeListTable = ({articleNo, category, title, commentCount, createDate}) => {
    return <tr style={{textAlign: "center"}}>
        <td style={{width: 100}}>{articleNo}</td>
        <td style={{width: 150}}>{category}</td>
        <td style={{textAlign: "left"}}><NavLink to={`/student/notice/detail/${articleNo}`}>{title}</NavLink>
            <span className="m-2" style={{fontSize: "x-small", color: "darkgreen"}}>[{commentCount}]</span>
        </td>
        <td style={{width: 200}}>{createDate}</td>
    </tr>
}

const Notice = () => {
    const [articleNo, setArticleNo] = useState(0)
    const [category, setCategory] = useState("과목")
    const [title, setTitle] = useState("공지사항입니다.")
    const [commentCount, setCommentCount] = useState(0)
    const [createDate, setCreateDate] = useState("2020.01.01")
    const total = ["두개만가져오기", ""]
    const totalContents = total.map((id) => (
        <NoticeListTable key={id} articleNo={articleNo} category={category} title={title} commentCount={commentCount} createDate={createDate}/>
    ))

    return <Card>
        <CardBody>
            <table className="table notice-margin0">
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
        </CardBody>
    </Card>
}
export default Notice
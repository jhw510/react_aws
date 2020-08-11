import React, {useEffect, useState} from "react";
import {Card, CardBody, CardTitle} from "reactstrap"
/*import NoticeDetailComment from "./NoticeDetail.Comment";*/

const noticeDetailTypes = {REQUEST: "noticeDetail/REQUEST"}
const noticeDetailRequest = action => ({type: noticeDetailTypes.REQUEST, payload: action.payload})
export const tNoticeDetailReducer = (state = {}, action) => {
    switch (action.type) {
        case noticeDetailTypes.REQUEST:
            return {...state, payload: action.payload}
        default:
            return state
    }
}



const NoticeDetail = ({history, match}) => {
    const [category, setCategory] = useState("과목")
    const [title, setTitle] = useState("공지사항입니다.")
    const [createDate, setCreateDate] = useState("2020.01.01")
    const [contents, setContents] = useState("내용입니다.")
    const [name, setName] = useState("작성자")
    const [comment, setComment] = useState("댓글 내용")
    const [commentNo, setCommentNo] = useState(1)

    const [isContentDelete, setIsContentDelete] = useState(true)


    /*useEffect()*/

    return <>
        <Card className="mb-3 card">
            <CardBody>
                <CardTitle style={{paddingLeft: 5}}>{title}</CardTitle>
                {isContentDelete && <>
                    <button type="button" className="btn border-0 btn-outline-primary"
                            onClick={() => history.goBack()}>
                        수정
                    </button>
                    <button type="button" className="btn border-0 btn-outline-primary"
                            onClick={() => history.goBack()}>
                        삭제
                    </button>
                </>}
                <hr/>
                <table>
                    <tbody>
                    <tr>
                        <td className="col-sm-1" style={{paddingLeft: 5}}>{category}</td>
                        <td style={{paddingRight: 10}}>{createDate}</td>
                    </tr>
                    </tbody>
                </table>
                <br/>
                <form>
                    <div className="position-relative row form-group" style={{paddingLeft: 20, paddingRight: 20}}>
                        <div style={{whiteSpace: "pre-line"}}>
                            {contents}
                        </div>
                    </div>
                    <hr/>
                    <table>
                        <tbody>
                        {/*<NoticeDetailComment articleNo={match.params.id}/>*/}
                        </tbody>
                    </table>
                    <br/>
                    <span className="position-relative row form-group">
                        <label className="col-sm-1 col-form-label" style={{textAlign: "center"}}>댓글</label>
                        <span className="col-sm-10">
                            <textarea placeholder="댓글을 입력하세요" className="form-control"/>
                        </span>
                            <button type="button" className="btn border-0 btn-outline-primary">
                                등록
                            </button>
                    </span>
                    <div style={{textAlign: "center"}}>
                        <button type="button" className="btn mr-3 btn-primary" onClick={() => history.goBack()}>
                            목록
                        </button>
                        <br/>
                    </div>
                </form>
            </CardBody>
        </Card>
    </>
}
export default NoticeDetail
import React, {useState} from "react";
import './notice.css'
import {Card, CardBody} from 'reactstrap'

const noticeWriteTypes = {REQUEST: "noticeWrite/REQUEST"}
const noticeWriteRequest = action => ({type: noticeWriteTypes.REQUEST, payload: action.payload})
export const tNoticeWriteReducer = (state = {}, action) => {
    switch (action.type) {
        case noticeWriteTypes.REQUEST:
            return {...state, payload: action.payload}
        default:
            return state
    }
}




const NoticeWrite = ({history}) => {
    const style = {height: '250px'}
    const [title, setTitle] = useState("공지사항입니다.")
    const [category, setCategory] = useState("과목")
    const [createDate, setCreateDate] = useState("2020.01.01")
    const [contents, setContents] = useState("내용입니다.")
    const [secretNo, setScretNo] = useState(0)
    const temp = ["전체 공지", "과목"]
    const categories = temp.map((temp) => (<option>{temp}</option>))

    return <>
        <Card className="font_Nanum_Gothic">
            <CardBody className="card-body">
                <h1>작성하기</h1><br/>
                <form>
                    <div className="row form-group">
                        <label className="col-sm-2 col-form-label">
                            제목
                        </label>
                        <div className="col-sm-10">
                            <input name="title" className="form-control"/>
                        </div>
                    </div>
                    <div className="row form-group">
                        <label className="col-sm-2 col-form-label">카테고리</label>
                        <div className="col-sm-10">
                            <select className="col-sm-3 form-control">
                                {categories}
                            </select>
                        </div>
                    </div>
                    <div className="row form-group">
                        <label className="col-sm-2 col-form-label">비밀번호</label>
                        <div className="col-sm-10">
                            <input name="password" type="password"className="form-control"/>
                        </div>
                    </div>
                    <div className="row form-group">
                        <label className="col-sm-2 col-form-label">내용</label>
                        <div className="col-sm-10">
                            <textarea name="text" className="form-control t-notice-height300" style={style}/>
                        </div>
                    </div>
                    <div className="row form-group">
                        <label className="col-sm-2 col-form-label">파일 첨부</label>
                        <div className="col-sm-10">
                            <input name="file" type="file" className="form-control-file"/></div>
                    </div>
                    <div className="row form-group">
                        <label className="col-sm-2 col-form-label">비밀번호 설정</label>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input id="checkbox2" type="checkbox" className="form-check-input"/>
                                    Keep this secretly
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="button" className="btn mr-3 btn-primary t-notice-width100"onClick={() => history.goBack()}>
                            등록
                        </button>
                        <button type="button" className="btn btn-outline-primary t-notice-width90" onClick={() => history.goBack()}>
                            취소
                        </button>
                        <br/>
                    </div>
                </form>
            </CardBody>
        </Card>
    </>
}
export default NoticeWrite
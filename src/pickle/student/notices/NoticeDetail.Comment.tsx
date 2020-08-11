import React, {useState} from "react";

const noticeDetailCommentTypes = {REQUEST: "noticeDetailComment/REQUEST"}
const noticeDetailCommentRequest = action => ({type: noticeDetailCommentTypes.REQUEST, payload: action.payload})
export const sNoticeDetailCommentReducer = (state = {}, action) => {
    switch (action.type) {
        case noticeDetailCommentTypes.REQUEST:
            return {...state, payload: action.payload}
        default:
            return state
    }
}

const NoticeDetailComment = ({articleNo}) => {
    const [isCommentDelete, setIsCommentDelete] = useState(false)
    const [commentNo, setCommentNo] = useState()
    const [name, setName] = useState()
    const [comment, setComment] = useState()

    return <tr>
        <td width="50px">
            <span className="mr-2 col-sm-2">{commentNo}</span>
        </td>
        <td width="100px">
            <span className="mr-2 col-sm-2">{name}</span>
        </td>
        <td>
            <span className="mr-9 col-sm-10">{comment}</span>
        </td>
        <td width="50px">
            {isCommentDelete &&
            <button type="button" className="btn mr-1 border-0 btn-outline-primary">x</button>
            }
        </td>
    </tr>
}
export default NoticeDetailComment
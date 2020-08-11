import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

const NoticeListTable = ({currentPage, articleNo, category, title, commentCount, createDate, match}) => {


    return <tr style={{textAlign: "center"}}>
        <td style={{width: 100}}>{articleNo}</td>
        <td style={{width: 150}}>{category}</td>
        <td style={{textAlign: "left"}}><NavLink to={`${match.url}/detail/${articleNo}`}>{title}</NavLink>
            <span className="m-2" style={{fontSize: "x-small", color: "darkgreen"}}>[{commentCount}]</span>
        </td>
        <td style={{width: 200}}>{createDate}</td>
    </tr>
}
export default NoticeListTable
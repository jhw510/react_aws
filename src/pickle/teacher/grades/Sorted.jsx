import React, {useState} from "react";
import {NavLink} from "react-router-dom";


const SortedListTable = ({place, userName, score}) => {
    return <tr style={{textAlign: "center"}}>
        <td>{place}</td>
        <td>{userName}</td>
        <td>{score}</td>
    </tr>
}
const Sorted = () => {
    const [place, setPlace] = useState(1)
    const [userName, setUserName] = useState("김일등")
    const [score, setScore] = useState(98)
    const total = [1, 2, 3, 4, 5]
    const totalContents = total.map((id) => (
        <SortedListTable key={id} place={place} userName={userName} score={score}/>
    ))
    return <>
        <table className="table">
            <thead>
            <tr style={{textAlign: "center"}}>
                <th>등수</th>
                <th>이름</th>
                <th>점수</th>
            </tr>
            </thead>
            <tbody>
            {totalContents}
            </tbody>
        </table>
        </>
}
export default Sorted
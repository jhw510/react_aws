import React from "react";

const Select = () => {
    const category = (temp, cate) => temp.map((temp) => (<option key={temp} value={temp}>{temp}{cate}</option>))
    const totalGrade = ["1", "2", "3"]
    const homeClass = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15',]
    const studentList = ['김', '이', '박'] //이것만 돌려서 가져오기
    const selectGrade = ['전 ', "1", "2", "3"]
    const selectTerm = ['전 학기', '1학기 중간고사', '1학기 기말고사', '2학기 중간고사', '2학기 기말고사']
    return <>
        <select className="form-control">
            {category(totalGrade, '학년')}
        </select><div style={{paddingTop: 3}}/>
        <select className="form-control">
            {category(homeClass, '반')}
        </select><div style={{paddingTop: 3}}/>
        <select className="form-control">
            {category(studentList, '')}
        </select><div style={{paddingTop: 3}}/>
        <select className="form-control">
            {category(selectGrade, '학년')}
        </select><div style={{paddingTop: 3}}/>
        <select className="form-control">
            {category(selectTerm, '')}
        </select><div style={{paddingTop: 4}}/>
        <div>
            <span>국어</span>
            <input type="checkbox"/>&nbsp;
            <span>영어</span>
            <input type="checkbox"/>&nbsp;
            <span>수학</span>
            <input type="checkbox"/>&nbsp;
            <span>생활과 윤리</span>
            <input type="checkbox"/>&nbsp;
            <span>경제</span>
            <input type="checkbox"/>&nbsp;
            <span>한국사</span>
            <input type="checkbox"/>&nbsp;
            <span>생명과학</span>
            <input type="checkbox"/>&nbsp;
            <span>물리</span>
            <input type="checkbox"/>&nbsp;
            <span>제 2 외국어</span>
            <input type="checkbox"/>
        </div><div style={{paddingTop: 3}}/>
        <div style={{textAlign: "center"}}>
            <button className="btn btn-outline-primary">검색</button>
        </div>
    </>
}
export default Select
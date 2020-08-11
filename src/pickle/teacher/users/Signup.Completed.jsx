import React from "react";
import {Card, CardBody} from 'reactstrap'

const SignupCompleted = ({history}) => {
    return <Card>
        <CardBody style={{textAlign: "center"}}><br/>
            <h3 className="font_Nanum_Gothic">가입이 완료되었습니다.</h3><br/><br/>
            <button type="button" className="btn btn-outline-primary user-width90" onClick={() => history.push('/')} style={{width: 200}}>
                메인화면으로 돌아가기
            </button><br/>
        </CardBody>
        </Card>
}
export default SignupCompleted
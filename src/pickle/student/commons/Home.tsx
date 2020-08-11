import React from "react";
import {Row} from 'reactstrap';
import Grade from "./HomeComponent/Grade";
import Streaming from "./HomeComponent/Streaming";
import Attendance from "./HomeComponent/Attendance";
import Notice from "./HomeComponent/Notice";
import {Colxx} from "../../commons/CustomComponent"

const Home = () => {
    return <div className="rounded">
        <Row>
            <Colxx xl="8" lg="12" className="mb-4">
                <Streaming/>
            </Colxx>
            <Colxx xl="4" lg="12" className="mb-4">
                <Grade cardClass={'h-100'}/>
            </Colxx>
        </Row>
        <Row>
            <Colxx lg="4" xl="4" className="mb-4">
                <Attendance
/*                    icon="iconsminds-male"
                    title={"출석율"}
                    detail={"detail"}
                    percent={(4 * 100) / 6}
                    progressText="4/6"*/
                />
            </Colxx>
            <Colxx lg="4" xl="8" className="mb-4">
                <Notice/>
            </Colxx>
        </Row>
    </div>
}
export default Home
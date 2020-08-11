import React, {Suspense} from "react"
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

export {teacherStudentStreamingReducer} from './TeacherStudentStreaming'

const TeacherStudentStreaming = React.lazy(() =>
    import('./TeacherStudentStreaming')
)

const Streamings = ({match}) => {
    return (
        <Suspense fallback={<div className="loading"/>}>
            <Router>
                <Route path={`${match.url}`} render={(props) => <TeacherStudentStreaming {...props}/>}/>
            </Router>
        </Suspense>
    )
}


export default Streamings
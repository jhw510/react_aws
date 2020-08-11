import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';



const ClassGrade = React.lazy(() => import('./ClassGrade'))
const ScoreInput = React.lazy(() => import('./ScoreInput'))
const StudentScore = React.lazy(() => import('./StudentScore'))

const Grades = ({ match }) => (
    <Suspense fallback={<div className="loading" />}>
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/grade`} />
            <Route path={`${match.url}/grade`} render={() => <ClassGrade />}/>
            <Route path={`${match.url}/student`} render={() => <StudentScore/>}/>
            <Route path={`${match.url}/input`} render={() => <ScoreInput/>}/>
            <Redirect to="/error" />
        </Switch>
    </Suspense>

);
export default Grades;
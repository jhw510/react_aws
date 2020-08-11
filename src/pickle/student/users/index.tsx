import React, { Suspense } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

export {signupReducer} from './SignUp'
export {signinReducer} from './SignIn'

const SignUp = React.lazy(() => import('./SignUp'))
const SignIn = React.lazy(() => import('./SignIn'))
const SignupCompleted = React.lazy(() => import('./Signup.Completed'))

const Users = ({ match, history }) => {
    return <Suspense fallback={<div className="loading"/>}>
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}`}/>
            <Route path={`${match.url}/signin`} render={() => <SignIn history={history}/>}/>
{/*            <Route path={`${match.url}/signup`} render={() => <SignUp history={history} match={match}/>}/>
            <Route path={`${match.url}/completed`} render={() => <SignupCompleted history={history}/>}/>*/}
            <Redirect to="/error"/>
        </Switch>
    </Suspense>
}
export default Users;

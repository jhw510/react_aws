import React, {Suspense} from "react";
import {Redirect, Route, Switch} from "react-router-dom";

export {tMypageReducer} from './Mypage'

const Mypage = React.lazy(() => import('./Mypage'))

const Mypages = ({ match, history }) => (
    <Mypage history={history}/>
/*    <Suspense fallback={<div className="loading" />}>
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/mypage`} />
            <Route path={`${match.url}/mypage`} render={() => <Mypage history={history}/>}/>
            <Redirect to="/error" />
        </Switch>
    </Suspense>*/
);
export default Mypages

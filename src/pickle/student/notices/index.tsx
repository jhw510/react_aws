import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

export {sNoticeListReducer} from './NoticeList'
export {sNoticeDetailReducer} from './NoticeDetail'
export {sNoticeDetailCommentReducer} from './NoticeDetail.Comment'

const NoticeList = React.lazy(() => import('./NoticeList'));
const NoticeDetail = React.lazy(() => import('./NoticeDetail'))

const Notices = ({ match, history }) => (
    <Suspense fallback={<div className="loading" />}>
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/list/1`} />
            <Route path={`${match.url}/list/:id`} render={() => <NoticeList match={match}/>}/>
            <Route path={`${match.url}/detail/:id`} render={() => <NoticeDetail history={history} match={match}/>}/>
            <Redirect to="/error" />
        </Switch>
    </Suspense>
);
export default Notices;

import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

export {tNoticeListReducer} from './NoticeList'
export {tNoticeWriteReducer} from './NoticeWrite'
export {tNoticeDetailReducer} from './NoticeDetail'
export {tNoticeDetailCommentReducer} from './NoticeDetail.Comment'

const NoticeList = React.lazy(() => import('./NoticeList'));
const NoticeDetail = React.lazy(() => import('./NoticeDetail'))
const NoticeWrite = React.lazy(() => import('./NoticeWrite'))

const Notices = ({ match, history }) => (
    <Suspense fallback={<div className="loading" />}>
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/list/1`} />
            <Route path={`${match.url}/list/:id`} render={() => <NoticeList match={match}/>}/>
            <Route path={`${match.url}/detail/:id`} render={() => <NoticeDetail history={history} match={match}/>}/>
            <Route path={`${match.url}/write`} render={() => <NoticeWrite history={history}/>}/>
            <Redirect to="/error" />
        </Switch>
    </Suspense>
);
export default Notices;

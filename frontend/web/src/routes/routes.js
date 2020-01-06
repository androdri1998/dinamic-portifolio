import React, {lazy, Suspense} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { urls } from '../utils/urls.constants';

const HomeApp = lazy(() => import('../screens/Home/HomeApp'));
const Curriculum = lazy(() => import('../screens/Curriculum'))

export default function Routes() {
    return (
        <Suspense fallback={<>carregando...</>}>
            <BrowserRouter>
                <Switch>
                    <Route path={urls.ROOT} exact component={HomeApp}/>
                    <Route path={urls.ABOUT} exact component={Curriculum}/>
                </Switch>
            </BrowserRouter>
        </Suspense>
    );
}
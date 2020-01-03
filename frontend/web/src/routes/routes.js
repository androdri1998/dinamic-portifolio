import React, {lazy, Suspense} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { urls } from '../utils/urls.constants';

const Home = lazy(() => import('../screens/Home'));
const Curriculum = lazy(() => import('../screens/Curriculum'))

export default function Routes() {
    return (
        <Suspense fallback={<>carregando...</>}>
            <BrowserRouter>
                <Switch>
                    <Route path={urls.ROOT} exact component={Home}/>
                    <Route path={urls.ABOUT} exact component={Curriculum}/>
                </Switch>
            </BrowserRouter>
        </Suspense>
    );
}
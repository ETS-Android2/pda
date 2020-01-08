import Home from './components/home';
import httpStatus from 'http-status';
import Inventory from './components/inventory';
import Pallet from './components/pallet';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import SignIn from './components/signIn';
import { AppLoader } from './components/elements/loader';
import { autoSignIn } from './utils/authentication';
import { BrowserRouter, HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import { httpErrorLog, promiseErrorLog } from './utils/log';
import { isAndroidApp } from './utils/platform';
import { NODE_SERVER } from './utils/variablesRepo';
import { useGlobal } from './utils/globalHooks';
import { withTranslation } from 'react-i18next';
import '../Content/style.css';

interface AutoRouteBodyState {
    isAuthenticated: boolean;
}

function Routing(props: any) {
    if (!(window as any).cordova) {
        return (
            <BrowserRouter>
                <AutoRouteBody {...props} />
            </BrowserRouter>
        );
    }
    else {
        return (
            <HashRouter>
                <AutoRouteBody {...props} />
            </HashRouter>
        );
    }
}

function RouteBody() {
    const [globalState,] = useGlobal();

    return (
        <Switch>
            <PrivateRoute exact path='/' component={Home} />
            <Route exact path='/SignIn' render={routeProps => {
                return globalState.authUser ? (<Redirect to={{ pathname: '/' }} />) : (<SignIn {...routeProps} />);
            }} />
        </Switch>
    );
}

function PrivateRoute({ component: Component, ...rest }) {
    const [globalState,] = useGlobal();

    return (
        <Route
            render={routeProps => {
                return globalState.authUser ? (
                    <Component {...routeProps} />
                ) : (
                        <Redirect
                            to={{
                                pathname: '/SignIn',
                                state: { from: routeProps.location }
                            }}
                        />
                    );
            }}
        />
    );
}

PrivateRoute.propTypes = {
    component: PropTypes.elementType
};

function AutoRouteBody(props: any) {
    const { t } = props,
        [globalState, globalActions] = useGlobal();

    useEffect(() => {
        fetch(NODE_SERVER + 'Authentication/Session/User', {
            method: 'GET',
            credentials: 'include'
        })
            .then(wsSucc => {
                if (wsSucc.ok && wsSucc.status === httpStatus.OK) {
                    wsSucc.json()
                        .then(data => {
                            isAndroidApp(data, globalActions, t);
                        }).catch(error => {
                            autoSignIn(globalActions, t);
                            promiseErrorLog(error);
                        });
                }
                else {
                    autoSignIn(globalActions, t);
                    httpErrorLog(wsSucc);
                }
            })
            .catch(wsErr => {
                autoSignIn(globalActions, t);
                promiseErrorLog(wsErr);
            });
    }, []);

    return (
        <section className='famo-body'>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/Inventory'>
                    <Inventory />
                </Route>
                <Route path='/Pallet'>
                    <Pallet />
                </Route>
            </Switch>
            <AppLoader hide={globalState.authUser && !globalState.loadPage} />
        </section>
    );
}

export default withTranslation()(Routing);
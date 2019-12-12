import httpStatus from 'http-status';
import { httpErrorLog, promiseErrorLog } from './log';
import { NODE_SERVER } from './variablesRepo';

export function autoSignIn(globalActions: any, t: any) {
    Authentication.autoSignIn()
        .then((wsRes) => {
            if (wsRes.ok && wsRes.status === httpStatus.OK) {
                wsRes.json()
                    .then((data) => {
                        globalActions.setAuthUser(data);
                    })
                    .catch((error) => {
                        promiseErrorLog(error);
                        alert(t('key_416'));
                    });
            }
            else {
                httpErrorLog(wsRes);
                alert(t('key_306'));
            }
        })
        .catch((wsErr) => {
            promiseErrorLog(wsErr);
            alert(t('key_416'));
        });
}

export default class Authentication {
    static signIn = async (username, password) => {
        return fetch(NODE_SERVER + 'Authentication/SignIn', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
            credentials: 'include'
        });
    }

    static autoSignIn = async () => {
        return fetch(NODE_SERVER + 'Authentication/AutoSignIn?timestamp=' + new Date().getTime(), {
            method: 'GET',
            credentials: 'include'
        });
    }

    static signOut = async () => {
        return fetch(NODE_SERVER + 'Authentication/SignOut', {
            method: 'GET',
            credentials: 'include'
        });
    }
}
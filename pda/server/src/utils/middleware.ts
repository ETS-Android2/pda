import Log from "./log";
import httpStatus from 'http-status';
import { refreshToken } from "./http";

export function trackRequest(req: any, res: any, next: Function) {
    Log.tracking(req);
    next();
}

export function checkToken(req: any, res: any, next: Function) {
    const token = req.session.token;

    if (token) {
        const tokenExpirationDate = new Date(token['.expires']),
            currentDate = new Date(new Date().toUTCString());

        if (currentDate > tokenExpirationDate) {
            refreshToken(token).then((wsRes) => {
                req.session.token = wsRes.data;
                next();
            }).catch((wsErr) => {
                Log.promiseError(wsErr);
                res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
            });
        }
        else {
            next();
        }
    }
    else {
        next();
    }
}
import * as types from './action-types';
import { IUser } from '../../models';

export function loadUser(user: IUser) {
    return function (dispatch: any) {
        dispatch({
            type: types.USER_SIGNED_IN,
            payload: user
        });
    };
}

import { IUser } from '../../models';
import * as type from '../actions/action-types';

const userInitialState: IUser = null as any;

export function userReducer(state: IUser = userInitialState, action: any): any {
    switch (action.type) {
        case type.USER_SIGNED_IN: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}
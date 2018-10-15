import { combineReducers } from 'redux';
import { IState } from '../state/state';
import * as reducers from '.';

const rootReducer = combineReducers<IState>({
    user: reducers.userReducer
});

export default rootReducer;

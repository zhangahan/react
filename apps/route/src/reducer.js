/**
 * Created by Administrator on 2017/3/28 0028.
 */

import { combineReducers } from 'redux';
import totalReducer from './login/reducer';
import containerLink from './superManger/reducer';


const todoApp = combineReducers({
    totalReducer,
    containerLink
});
export default todoApp
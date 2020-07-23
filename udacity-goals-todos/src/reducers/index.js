import { combineReducers } from 'redux'

import todos from './todos'
import goals from './goals'
import landing from './landing'

export default combineReducers({
    todos,
    goals,
    landing,
})
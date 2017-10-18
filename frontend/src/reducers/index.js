import { combineReducers } from 'redux'
import { weigthListReducer } from './weight'
import authReducer from './auth'
import navActiveItemReducer from './navActiveItem'
import readingRegretReducer from './readRegret'
import readingCommentReducer from './readComment'
import todayReducer from './today'

const reducers = combineReducers({
  weightList: weigthListReducer,
  navActiveItem: navActiveItemReducer,
  auth: authReducer,
  readRegret: readingRegretReducer,
  readComment: readingCommentReducer,
  today: todayReducer,
})

export default reducers

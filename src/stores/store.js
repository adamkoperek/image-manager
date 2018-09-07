import {createStore, combineReducers} from 'redux';
import topBar from '../reducers/top-bar.reducer';

export default createStore(
  combineReducers({topBar}),
  {}
);

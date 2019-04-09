import { combineReducers, createStore } from 'redux';
import newsFeedReducer from '../Components/NewsFeed/reducer';


const rootReducer = combineReducers({
    newsFeedReducer
});


export default createStore(rootReducer);
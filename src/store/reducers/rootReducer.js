import { combineReducers } from 'redux';
import user from '../reducers/user';
import network from '../reducers/network';
import leaderBoard from '../reducers/leaderboard';
import profile from '../reducers/profile';
import settingProfile from '../reducers/settingsProfile';

const rootReducer = combineReducers({
    user,
    network,
    leaderBoard,
    profile,
    settingProfile,
});

export default rootReducer;
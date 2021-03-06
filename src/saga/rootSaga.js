import { takeEvery } from 'redux-saga/effects';
import {
    signUp,
    signIn,
    getNetwork,
    getLeaderBoard,
    getProfile,
    getProfileEvent,
    getPitchingSummary,
    getSchools,
    getTeams,
    getFacilities,
    updateProfile,
    persisSignIn,
    getLeaderBoardPitch,
    getSecondNetwork,
    getCurrentProfile,
    changeFavorite,
    filterNetwork,
    filterLeaderBoardsBatting,
    filterLeaderBoardsPitching,
} from '../store/routines/routines';
import {handleSignUpTrigger, handleSignInTrigger, handlePersisSignInTrigger} from '../saga/user';
import {
    handleGetNetworkTrigger,
    handleGetSecondNetworkTrigger,
    handleFilterNetworkTrigger
} from '../saga/network';
import {
    handleGetLeaderBoardTrigger,
    handleGetLeaderBoardPitchTrigger,
    handleFilterLeaderBoardsBattingTrigger,
    handleFilterLeaderBoardsPitchingTrigger
} from '../saga/leaderboard';
import {
    handleGetProfileTrigger,
    handleGetProfileEventTrigger,
    handleGetPitchingSummaryTrigger,
    handleGetTeamsTrigger,
    handleGetSchoolsTrigger,
    handleGetFacilitiesTrigger,
    handleUpdateProfileTrigger,
    handleGetCurrentProfileTrigger,
    handleChangeFavoriteTrigger,
} from '../saga/profile';

export default function* rootSaga() {
    yield takeEvery(signUp, handleSignUpTrigger);
    yield takeEvery(signIn, handleSignInTrigger);
    yield takeEvery(getNetwork, handleGetNetworkTrigger);
    yield takeEvery(getLeaderBoard, handleGetLeaderBoardTrigger);
    yield takeEvery(getProfile, handleGetProfileTrigger);
    yield takeEvery(getProfileEvent, handleGetProfileEventTrigger);
    yield takeEvery(getPitchingSummary, handleGetPitchingSummaryTrigger);
    yield takeEvery(getTeams ,handleGetTeamsTrigger);
    yield takeEvery(getSchools ,handleGetSchoolsTrigger);
    yield takeEvery(getFacilities ,handleGetFacilitiesTrigger);
    yield takeEvery(updateProfile, handleUpdateProfileTrigger);
    yield takeEvery(persisSignIn, handlePersisSignInTrigger);
    yield takeEvery(getLeaderBoardPitch, handleGetLeaderBoardPitchTrigger);
    yield takeEvery(getSecondNetwork, handleGetSecondNetworkTrigger);
    yield takeEvery(getCurrentProfile, handleGetCurrentProfileTrigger);
    yield takeEvery(changeFavorite, handleChangeFavoriteTrigger);
    yield takeEvery(filterNetwork, handleFilterNetworkTrigger);
    yield takeEvery(filterLeaderBoardsBatting, handleFilterLeaderBoardsBattingTrigger);
    yield takeEvery(filterLeaderBoardsPitching, handleFilterLeaderBoardsPitchingTrigger);
}
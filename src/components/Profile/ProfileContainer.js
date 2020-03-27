import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
    getSchools,
    getTeams,
    getFacilities,
    getCurrentProfile,
    changeFavorite,
} from '../../store/routines/routines';
import {requestSchool, requestTeams, requestFacilities} from '../../graphQl/profileSettings';
import {favoriteProf} from '../../graphQl/graphql';
import { bindActionCreators } from 'redux';

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            batting: false,
            pitching: false,
            comparison: true,
            openedForm: false,
        };
    }

    openBatting = () => {
        this.setState({
            batting: true,
            pitching: false,
            comparison: false,
        })
    }

    openPitching = () => {
        this.setState({
            batting: false,
            pitching: true,
            comparison: false,
        })
    }

    openComparison = () => {
        this.setState({
            batting: false,
            pitching: false,
            comparison: true,
        })
    }

    openForm = () => {
        const {getSchools, getTeams, getFacilities} = this.props
        const schools = requestSchool()
        const tesms = requestTeams()
        const facilities = requestFacilities()
        getSchools(schools)
        getTeams(tesms)
        getFacilities(facilities)
        this.setState({openedForm: true})
    }

    closeForm = () => {
        this.setState({openedForm: false})
    }

    changeFavorite = () => {
        const {changeFavorite} = this.props;
        const {id, favorite} = this.props.profile.profile;
        const favProf = favoriteProf(id, !favorite)
        changeFavorite(favProf)
    }


    render() {
        const {profile, pitching_summary, profile_events} = this.props.profile;
        const {activeName, profId} = this.props;
        const {batting, pitching, comparison, openedForm} = this.state;
        return (
          <Profile
            {...profile}
            pitchingSum={pitching_summary}
            profEvents={profile_events}
            openComparison={this.openComparison}
            openBatting={this.openBatting}
            openPitching={this.openPitching}
            batting={batting}
            pitching={pitching}
            comparison={comparison}
            openedForm={openedForm}
            openForm={this.openForm}
            closeForm={this.closeForm}
            profId={profId}
            activeName={activeName}
            changeFavorite={this.changeFavorite}
          />
        );
    }
}

const mapStateToPros = state => ({
    profile: state.profile,
    profId: state.user.profId,
    activeName: state.user.name
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getSchools,
    getTeams,
    getFacilities,
    getCurrentProfile,
    changeFavorite,
},dispatch);

export default connect(mapStateToPros, mapDispatchToProps)(ProfileContainer);
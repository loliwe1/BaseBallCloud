import React from 'react';
import LeaderBoards from './LeaderBoards';
import { connect } from 'react-redux';
import {leaderBoardPitching , leaderBoard, filtLeadBoardsBatt, filtLeadBoardsPitch} from '../../graphQl/graphql';
import {
    getLeaderBoard,
    getLeaderBoardPitch,
    filterLeaderBoardsBattingPromiseCreator as filterLeaderBoardsBatting,
    filterLeaderBoardsPitchingPromiseCreator as filterLeaderBoardsPitching
} from '../../store/routines/routines';
import { bindActionCreators } from 'redux';
import { bindPromiseCreators } from 'redux-saga-routines';

class LeaderBoardsContainer extends React.Component {
    state = {
        pitching: false,
        fetching: false,
        input: {
            type: 'exit_velocity'
        }
    }

    componentDidMount() {
        const {input} = this.state;
        this.filter(input);
    }

    openPitch = () => {
      if(this.state.pitching) return;

      const {input} = this.state;
      input.type = 'pitch_velocity';
      this.setState({pitching: true, input});

      this.filter(input);
        
    }
    openBatting = () => {
      if(! this.state.pitching) return;

      const {input} = this.state;
      input.type = 'exit_velocity';
      this.setState({pitching: false, input});

      this.filter(input);

    }

    filter = async (input) => {
        await this.setState((state) => ({
            fetching: state.fetching = true
          }));

        let filterLeaderBoards;
        let leadBoard;

        if (!this.state.pitching) {
          filterLeaderBoards = this.props.filterLeaderBoardsBatting;
          leadBoard = filtLeadBoardsBatt(input);

        } else {
          filterLeaderBoards = this.props.filterLeaderBoardsPitching;
          leadBoard = filtLeadBoardsPitch(input);
          }

        try {
            await filterLeaderBoards(leadBoard);
        }catch(e) {
            console.log(e);
        }
        finally {
            await this.setState((state) => ({
                fetching: state.fetching = false
              }));
        }
    }

    dateRef = element => this.dateSelect = element;
    posRef = element => this.posSelect = element;
    favRef = element => this.favSelect = element;
    velRef = element => this.velSelect = element;
    ageRef = element => this.ageInput = element;
    schoolRef = element => this.schoolInput = element;
    teamRef = element => this.teamInput = element;

    filterDate = async () => {
        const {input} = this.state;
        input.date = this.dateSelect.value;
        !input.date && delete input.date;

        this.filter(input);
    }

    filterPosition = async () => {
        const {input} = this.state;
        input.position = this.posSelect.value;
        !input.position && delete input.position;

        this.filter(input);
    }

    filterFavorite = async () => {
        const {input} = this.state;
        input.favorite = + this.favSelect.value;
        !input.favorite && delete input.favorite;

        this.filter(input);
    }

    filterVelocity = async () => {
        const {input} = this.state;
        input.type = this.velSelect.value;
        !input.type && delete input.type;

        this.filter(input);
    }

    filterAge = async () => {
        const {input} = this.state;
        input.age = + this.ageInput.value;
        !input.age && delete input.age;

        this.filter(input);
    }

    filterSchool = async () => {
        const {input} = this.state;
        input.school = this.schoolInput.value;
        !input.school && delete input.school;

        this.filter(input);
    }

    filterTeam = async () => {
        const {input} = this.state;
        input.team = this.teamInput.value;
        !input.team && delete input.team;

        this.filter(input);
    }

    render() {
        const {leaderBoard } = this.props;
        const {pitching, fetching, input} = this.state;
        return (
            <LeaderBoards
              leaderBoard={leaderBoard}
              openBatting={this.openBatting} 
              openPitch={this.openPitch}
              pitching={pitching}
              filterDate={this.filterDate}
              filterPosition={this.filterPosition}
              filterFavorite={this.filterFavorite}
              filterVelocity={this.filterVelocity}
              filterSchool={this.filterSchool}
              filterAge={this.filterAge}
              filterTeam={this.filterTeam}
              teamRef={this.teamRef}
              ageRef={this.ageRef}
              velRef={this.velRef}
              favRef={this.favRef}
              posRef={this.posRef}
              dateRef={this.dateRef}
              schoolRef={this.schoolRef}
              fetching={fetching}
              filter={this.filter}
              input={input}

            />
        );
    }
}

const mapStateToProps = (state) => ({
    leaderBoard: state.leaderBoard
});

function mapDispatchToProps(dispatch){
    return {
        ...bindPromiseCreators({
            filterLeaderBoardsBatting,
            filterLeaderBoardsPitching,
        },dispatch),
        ...bindActionCreators({
            getLeaderBoard,
            getLeaderBoardPitch,
        },dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoardsContainer);

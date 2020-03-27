import React from 'react';
import Network from './Network';
import { connect } from 'react-redux';
import {
    getNetworkPromiseCreator as getNetwork,
    getSecondNetworkPromiseCreator as getSecondNetwork,
    filterNetworkPromiseCreator as filterNetwork,
} from '../../store/routines/routines';
import {network, secondNetwork, filtrNetwork} from '../../graphQl/graphql';
import { bindPromiseCreators } from 'redux-saga-routines';

class NetworkContainer extends React.Component {
    state={
      fetching: true,
      input:{
        profiles_count: 10,
        offset: 0,
      },
    }

    async componentDidMount() {
        const {input} = this.state;
        this.filter(input);
    }

    getNetwork = () => {
        const {getNetwork} = this.props;
        getNetwork(network);
    }

    getSecondNetwork = () => {
        const {getSecondNetwork} = this.props;
        getSecondNetwork(secondNetwork);
    }

    setRef = (element) => {
        this.input = element;
    }

    ageRef = (element) => {
        this.ageInput = element;
    }

    schoolRef = (element) => {
        this.schoolInput = element;
    }

    teamRef = (element) => {
        this.teamInput = element;
    }

    posRef = (element) => {
        this.posSelect = element;
    }

    favRef = (element) => {
        this.favSelect = element;
    }

    countRef = (element) => {
        this.countSelect = element;
    }

    filter = async (input) => {
        await this.setState((state) => ({
            fetching: state.fetching = true
          }));

        const {filterNetwork} = this.props;
        const network = filtrNetwork(input);

        try {
            await filterNetwork(network);
        }catch(e) {
            console.log(e);
        }
        finally {
            await this.setState((state) => ({
                fetching: state.fetching = false
              }));
        }
        
    }

    filterNetworkName = async () => {
      const {input} = this.state;
      input.player_name = this.input.value;
      !input.player_name && delete input.player_name;
        
      this.filter(input);
    }

    filterNetworkAge = async (v) => {
      const {input} = this.state;
      input.age = + v.target.value;
      !input.age && delete input.age;
        
      this.filter(input);
    }

    filterNetworkSchool = async (v) => {
      console.log(v.target.value);
      const {input} = this.state;
      input.school = v.target.value;
      !input.school && delete input.school;
    
      this.filter(input);
    }

    filterNetworkTeam = async (v) => {
      const {input} = this.state;
      input.team = v.target.value;
      !input.team && delete input.team;

      this.filter(input);
    }

    filterNetworkPosition = async (v) => {
      const {input} = this.state;
      input.position = v.target.value;
      !input.position && delete input.position;
        
      this.filter(input);
    }

    filterNetworkFavorite = async (v) => {
      const {input} = this.state;
      input.favorite = + v.target.value;
      !input.favorite && delete input.favorite;
        
      this.filter(input);
    }
    
    filterNetworkCount = async (v) => {
      const {input} = this.state;
      input.profiles_count = + v.target.value;
      !input.profiles_count && delete input.profiles_count;
        
      this.filter(input);
    }

    render() {
        const {network} = this.props;
        const {fetching} = this.state;
        const {input} = this.state;
        const {profiles_count} = this.state.input;

        return (
            <Network
              network={network}
              count={profiles_count}
              getNetwork={this.getNetwork}
              getSecondNetwork={this.getSecondNetwork}
              filterNetworkName={this.filterNetworkName}
              filterNetworkAge={this.filterNetworkAge}
              filterNetworkSchool={this.filterNetworkSchool}
              filterNetworkTeam={this.filterNetworkTeam}
              filterNetworkPosition={this.filterNetworkPosition}
              filterNetworkFavorite={this.filterNetworkFavorite}
              filterNetworkCount={this.filterNetworkCount}
              countRef={this.countRef}
              favRef={this.favRef}
              posRef={this.posRef}
              teamRef={this.teamRef}
              setRef={this.setRef}
              ageRef={this.ageRef}
              schoolRef={this.schoolRef}
              fetching={fetching}
              filter={this.filter}
              input={input}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    network: state.network,
});

const mapDispatchToProps = (dispatch) => bindPromiseCreators({
    getNetwork,
    getSecondNetwork,
    filterNetwork,
},dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NetworkContainer);

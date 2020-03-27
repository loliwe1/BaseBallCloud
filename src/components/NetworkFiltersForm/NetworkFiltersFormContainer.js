import React from 'react';
import NetworkFiltersForm from './NetworkFiltersForm';

class NetworkFiltersFormContainer extends React.Component{
    render() {
        const {
            schoolRef,
            filterNetworkSchool, 
            filterNetworkTeam,
            teamRef,
            filterNetworkPosition,
            posRef,
            ageRef,
            filterNetworkAge,
            filterNetworkFavorite,
            favRef,
            filterNetworkCount,
            countRef,
        } = this.props;
        return (
            <NetworkFiltersForm 
              schoolRef={schoolRef}
              filterNetworkSchool={filterNetworkSchool} 
              filterNetworkTeam={filterNetworkTeam}
              teamRef={teamRef}
              filterNetworkPosition={filterNetworkPosition}
              posRef={posRef}
              ageRef={ageRef}
              filterNetworkAge={filterNetworkAge}
              filterNetworkFavorite={filterNetworkFavorite}
              favRef={favRef}
              filterNetworkCount={filterNetworkCount}
              countRef={countRef}
            />
        );
    }
}

export default NetworkFiltersFormContainer;
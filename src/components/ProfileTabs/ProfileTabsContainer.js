import React from 'react';
import ProfileTabs from './ProfileTabs';

class ProfileTabsContainer extends React.Component {
    state = {
        activeButton: "profile-table__toggle  profile-table__toggle--active",
        button: 'profile-table__toggle',
          activeTab: 'Comparison',
      } 
    
      openPitching = () => {
        const {openPitching} = this.props;
        this.setState({activeTab: 'Pitching'});

        openPitching();
      }  

      openComparison = () => {
        const {openComparison} = this.props;
        this.setState({activeTab: 'Comparison'});

        openComparison();
      } 

      openBatting = () => {
        const {openBatting} = this.props;
        this.setState({activeTab: 'Batting'});

        openBatting();
      } 


    render() {
        const {activeTab, button, activeButton} = this.state;
        return (
            <ProfileTabs 
              openPitching={this.openPitching}
              openBatting={this.openBatting}
              openComparison={this.openComparison}
              activeTab={activeTab}
              button={button}
              activeButton={activeButton}
            />
        );
    }
}

export default ProfileTabsContainer;
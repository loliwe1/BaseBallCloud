import React from 'react';
import '../../css/style.css';

const ProfileTabs = ({
    openPitching,
    openBatting,
    openComparison,
    activeTab,
    button,
    activeButton,
}) => (
    <div className="profile-table__toggle-wrap">
      <button onClick={openPitching} className={activeTab === 'Pitching' ? activeButton : button}>
        Pitching
        <div className="profile-table__toggle-dropdown"></div>
      </button>
      <button onClick={openBatting}  className={activeTab === 'Batting' ? activeButton : button}>
        Batting
      </button>
      <button onClick={openComparison}  className={activeTab === 'Comparison' ? activeButton : button}>
        Comparison
      </button>
    </div>
);

export default ProfileTabs;

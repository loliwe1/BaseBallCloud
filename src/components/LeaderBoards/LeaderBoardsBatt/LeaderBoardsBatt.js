import React from 'react';
import Leader from '../../Leader/Leader';
import '../../../css/style.css';
import LeaderContainer from '../../Leader/LeaderContainer';

const LeaderBoardsBatt = ({leaderBoard, fetching, filter, input}) => (
    <div className="leaderboards__table-content">
    <div className="leaderboards__table-header">
      <div className="leaderboards__table-col leaderboards__table-col--rank">
        Rank
      </div>
      <div className="leaderboards__table-col leaderboards__table-col--batter">
        Batter Name
      </div>
      <div className="leaderboards__table-col leaderboards__table-col--age">
        Age
      </div>
      <div className="leaderboards__table-col leaderboards__table-col--school">
        School
      </div>
      <div className="leaderboards__table-col leaderboards__table-col--teams">
        Teams
      </div>
      <div className="leaderboards__table-col leaderboards__table-col--velocity">
        Exit Velocity
      </div>
      <div className="leaderboards__table-col leaderboards__table-col--angle">
        Launch Angle
      </div>
      <div className="leaderboards__table-col leaderboards__table-col--distance">
        Distance
      </div>
      <div className="leaderboards__table-col leaderboards__table-col--favorite">
        Favorite
      </div>
    </div>

    {fetching
        ? 
          <div
            style={{display: 'flex', justifyContent: 'center', fontSize: '22px'}}
          >
            FETCHING DATA..
          </div>
        : ( leaderBoard && leaderBoard.length === 0)
        ?
          <div
            style={{display: 'flex', justifyContent: 'center', fontSize: '22px'}}
          >
            There's no info yet!
          </div>
        : 
    <div className="leaderboards__table-items">
     { leaderBoard &&
       leaderBoard.map((leader, index) => (
       <LeaderContainer
         batter_name={leader.batter_name}
         age={leader.age}
         school={leader.school}
         teams={leader.teams}
         exit_velocity={leader.exit_velocity}
         launch_angle={leader.launch_angle}
         distance={leader.distance}
         favorite={leader.favorite}
         key={index}
         id={leader.batter_datraks_id}
         filter={filter}
         input={input}
       />
     ))}
    </div>
  }
  </div>
);


export default LeaderBoardsBatt;

import React from 'react';
import '../../css/style.css';
import LeaderBoardsBatt from './LeaderBoardsBatt/LeaderBoardsBatt';
import LeaderBoardsPitch from './LeaderBoardsPitch/LeaderBoardsPitch';
import LeaderBoardsTabs from './LeaderBoardsTabs/';

const LeaderBoards = ({
  leaderBoard,
  openPitch,
  pitching,
  openBatting,
  filterDate,
  filterPosition,
  posRef,
  dateRef,
  filterFavorite,
  favRef,
  filterVelocity,
  velRef,
  filterAge,
  ageRef,
  filterSchool,
  schoolRef,
  filterTeam,
  teamRef,
  fetching,
  filter,
  input,

}) => (
    <main className="leaderboards">
      <header className="leaderboards__header">
        <h1 className="leaderboards__title">
          Leaderboards
        </h1>

        <div className="leaderboards__filter-list">
          <div className="leaderboards__filter">
            <div className="leaderboards__filter-dropdown">
              <div className="leaderboards__filter-value">
                <label className="leaderboards__dropdown-value">Date </label>
                <select onChange={filterDate} ref={dateRef}>
                  <option value=''>All</option>
                  <option value='last_week'>Last Week</option>
                  <option value='last_month'>Last Month</option>
                </select>
              </div>
              <span className="leaderboards__filter-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9">
                  <path fill="#48BBFF" fillRule="nonzero"
                    d="M13.469.432a1.081 1.081 0 0 1 1.565 0 1.165 1.165 0 0 1 0 1.615L8.78 8.43a1.083 1.083 0 0 1-1.567 0L.962 2.047a1.168 1.168 0 0 1 0-1.615 1.081 1.081 0 0 1 1.564 0L8 5.667 13.469.432z">
                  </path>
                </svg>
              </span>
              <div className="leaderboards__dropdown hide">

              </div>
            </div>
          </div>

          <div className="leaderboards__filter">
            <input
              className="leaderboards__filter-input leaderboards__filter-input--school"
              type="text"
              name="school"
              placeholder="School"
              ref={schoolRef}
              onChange={filterSchool}
              />
            <span className="leaderboards__filter-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9">
                <path fill="#48BBFF" fillRule="nonzero"
                  d="M13.469.432a1.081 1.081 0 0 1 1.565 0 1.165 1.165 0 0 1 0 1.615L8.78 8.43a1.083 1.083 0 0 1-1.567 0L.962 2.047a1.168 1.168 0 0 1 0-1.615 1.081 1.081 0 0 1 1.564 0L8 5.667 13.469.432z">
                </path>
              </svg>
            </span>
          </div>

          <div className="leaderboards__filter">
            <input
              className="leaderboards__filter-input leaderboards__filter-input--team"
              type="text"
              name="team"
              placeholder="Team"
              onChange = {filterTeam}
              ref={teamRef}
              />
            <span className="leaderboards__filter-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9">
                <path fill="#48BBFF" fillRule="nonzero"
                  d="M13.469.432a1.081 1.081 0 0 1 1.565 0 1.165 1.165 0 0 1 0 1.615L8.78 8.43a1.083 1.083 0 0 1-1.567 0L.962 2.047a1.168 1.168 0 0 1 0-1.615 1.081 1.081 0 0 1 1.564 0L8 5.667 13.469.432z">
                </path>
              </svg>
            </span>
          </div>

          <div className="leaderboards__filter">
            <div className="leaderboards__filter-dropdown">
              <div className="leaderboards__filter-value">
                <label className="leaderboards__dropdown-value">Position: </label>  
                <select
                  className="network__dropdown-value"
                  name='position'
                  onChange={filterPosition}
                  ref={posRef}
                >
                  <option value=''>All</option>
                  <option value='catcher'>Catcher</option>
                  <option value='first_base'>First Base</option>
                  <option value='second_base'>Second Base</option>
                  <option value='shortstop'>Shortstop</option>
                  <option value='third_base'>Third Base</option>
                  <option value='outfield'>Outfield</option>
                  <option value='pitcher'>Pitcher</option>
                </select>
              </div>
              <span className="leaderboards__filter-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9">
                  <path fill="#48BBFF" fillRule="nonzero"
                    d="M13.469.432a1.081 1.081 0 0 1 1.565 0 1.165 1.165 0 0 1 0 1.615L8.78 8.43a1.083 1.083 0 0 1-1.567 0L.962 2.047a1.168 1.168 0 0 1 0-1.615 1.081 1.081 0 0 1 1.564 0L8 5.667 13.469.432z">
                  </path>
                </svg>
              </span>
              <div className="leaderboards__dropdown hide">

              </div>
            </div>
          </div>

          <div className="leaderboards__filter">
            <input
              className="leaderboards__filter-input leaderboards__filter-input--age"
              type="number"
              name="age"
              placeholder="Age"
              ref={ageRef}
              onChange={filterAge}
              />
            <span className="leaderboards__filter-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9">
                <path fill="#48BBFF" fillRule="nonzero"
                  d="M13.469.432a1.081 1.081 0 0 1 1.565 0 1.165 1.165 0 0 1 0 1.615L8.78 8.43a1.083 1.083 0 0 1-1.567 0L.962 2.047a1.168 1.168 0 0 1 0-1.615 1.081 1.081 0 0 1 1.564 0L8 5.667 13.469.432z">
                </path>
              </svg>
            </span>
          </div>

          <div className="leaderboards__filter">
            <div className="leaderboards__filter-dropdown">
              <div className="leaderboards__filter-value">
                <label className="leaderboards__dropdown-value">All: </label>
                <select
                  name='favorite'
                  onChange={filterFavorite}
                  ref={favRef}
                >
                  <option value=''>All</option>
                  <option value='1'>Favorite</option>
                </select>
              </div>
              <span className="leaderboards__filter-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9">
                  <path fill="#48BBFF" fillRule="nonzero"
                    d="M13.469.432a1.081 1.081 0 0 1 1.565 0 1.165 1.165 0 0 1 0 1.615L8.78 8.43a1.083 1.083 0 0 1-1.567 0L.962 2.047a1.168 1.168 0 0 1 0-1.615 1.081 1.081 0 0 1 1.564 0L8 5.667 13.469.432z">
                  </path>
                </svg>
              </span>
              <div className="leaderboards__dropdown hide">

              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="leaderboards__table">
        <div className="leaderboards__table-sort">
          <LeaderBoardsTabs openBatting={openBatting} openPitch={openPitch}/>

          <div className="leaderboards__sort">
            <div className="leaderboards__sort-dropdown">
            {!pitching ? 
              <div className="leaderboards__sort-value">
                <label className="leaderboards__dropdown-value">Exit Velocity</label>
                <select onChange={filterVelocity} ref={velRef}>
                  <option value='exit_velocity'>Exit Velocity</option>
                  <option value='carry_distance'>Carry Distance</option>
                </select>
              </div>
            :
              <div className="leaderboards__sort-value">
                <label className="leaderboards__dropdown-value">Pitch Velocity</label>
                <select onChange={filterVelocity} ref={velRef}>
                  <option value='pitch_velocity'>Pitch Velocity</option>
                  <option value='spin_rate'>Spin Rate</option>
                </select>
              </div>
            }
              <span className="leaderboards__sort-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9">
                  <path fill="#48BBFF" fillRule="nonzero"
                    d="M13.469.432a1.081 1.081 0 0 1 1.565 0 1.165 1.165 0 0 1 0 1.615L8.78 8.43a1.083 1.083 0 0 1-1.567 0L.962 2.047a1.168 1.168 0 0 1 0-1.615 1.081 1.081 0 0 1 1.564 0L8 5.667 13.469.432z">
                  </path>
                </svg>
              </span>
              <div className="leaderboards__dropdown hide">

              </div>
            </div>
          </div>
        </div>
        {!pitching 
          ? <LeaderBoardsBatt leaderBoard={leaderBoard} fetching={fetching} filter={filter} input={input}/>
          : <LeaderBoardsPitch leaderBoard={leaderBoard} fetching={fetching} filter={filter} input={input}/>
        }
          
      </div>
    </main>
);

export default LeaderBoards;

import React from 'react';
import '../../css/style.css';
import PlayerContainer from '../Player';
import NetworkTabs from '../NetworkTabs';
import NetworkFiltersForm from '../NetworkFiltersForm';

const Network = ({
  network,
  getNetwork,
  getSecondNetwork,
  filterNetworkName,
  filterNetworkAge,
  filterNetworkSchool,
  filterNetworkTeam,
  filterNetworkPosition,
  filterNetworkFavorite,
  filterNetworkCount,
  countRef,
  favRef,
  posRef,
  teamRef,
  schoolRef,
  setRef,
  ageRef,
  fetching,
  count,
  filter,
  input,

}) => (
    <main className="network">
      <header className="network__header">
        <h1 className="network__title">
          Network
        </h1>

        <NetworkFiltersForm
          filterNetworkSchool={filterNetworkSchool} 
          filterNetworkTeam={filterNetworkTeam}
          filterNetworkPosition={filterNetworkPosition}
          filterNetworkAge={filterNetworkAge}
          filterNetworkFavorite={filterNetworkFavorite}
          filterNetworkCount={filterNetworkCount}
          filterNetworkName={filterNetworkName}
          schoolRef={schoolRef}
          setRef={setRef}
          countRef={countRef}
          favRef={favRef}
          posRef={posRef}
          ageRef={ageRef}
          teamRef={teamRef}
        />
      </header>

      <div className="network__table-search">
        <div className="network__search-result">
          Available Players ({network.total_count})
        </div>
        <div className="network__search-block">
          <button className="network__search-btn">
            <span className="network__search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path fill="#48BBFF" fillRule="nonzero"
                  d="M15.64 13.537l-3.826-3.828c.577-.947.91-2.06.91-3.25 0-3.461-3-6.459-6.46-6.459A6.263 6.263 0 0 0 0 6.265c0 3.46 2.999 6.458 6.458 6.458a6.227 6.227 0 0 0 3.154-.854l3.847 3.85a.965.965 0 0 0 1.363 0l.955-.956c.376-.376.24-.85-.136-1.226zM1.929 6.265a4.337 4.337 0 0 1 4.336-4.338c2.396 0 4.531 2.134 4.531 4.531a4.338 4.338 0 0 1-4.337 4.338c-2.396 0-4.53-2.136-4.53-4.531z">
                </path>
              </svg>
            </span>
          </button>
          <input
            type="text"
            name="table-search"
            className="network__search-input"
            placeholder="Player Name"
            onChange={filterNetworkName}
            ref={setRef}
          />
        </div>
      </div>

      <div className="network__table">
        <div className="network__table-layout">
          <div className="network__table-header">
            <div className="network__table-col network__table-col--name">
              Player Name
            </div>
            <div className="network__table-col network__table-col--sessions">
              Sessions
            </div>
            <div className="network__table-col network__table-col--school">
              School
            </div>
            <div className="network__table-col network__table-col--team">
              Teams
            </div>
            <div className="network__table-col network__table-col--age">
              Age
            </div>
            <div className="network__table-col network__table-col--favorite">
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
        : (network.profiles && network.profiles.length === 0)
        ?
          <div
            style={{display: 'flex', justifyContent: 'center', fontSize: '22px'}}
          >
            There's no info yet!
          </div>
        : 
          <div className="network__table-content">
            {network &&
              network.profiles.map((player) => (
                <PlayerContainer
                  key={player.id}
                  id={player.id}
                  first_name={player.first_name}
                  last_name={player.last_name}
                  school={player.school}
                  teams={player.teams}
                  age={player.age}
                  favorite={player.favorite}
                  events={player.events}
                  filter={filter}
                  input={input}
                />
              ))
            }

          </div>
        }
        </div>
        {((!fetching) && (network.profiles.length !== 0) && (network.total_count >= count)) && 
          <NetworkTabs
            getNetwork={getNetwork}
            getSecondNetwork={getSecondNetwork}
            network={network}
          />
      }

      </div>

    </main>
);

export default Network;

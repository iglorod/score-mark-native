import * as actionTypes from '../actionTypes';
import {
  fetchPlayerStats,
  fetchPlayerTransfers,
  fetchPlayerSidelines,
  fetchAvailibleSeasons,
  fetchTeam,
  fetchTeamSquard,
} from '../../FakeData/FakeData';

export const startLoadingActionCreator = () => {
  return {
    type: actionTypes.START_PLAYER_LOADING,
  }
}

export const finishLoadingActionCreator = () => {
  return {
    type: actionTypes.FINISH_PLAYER_LOADING,
  }
}

export const clearPlayerDataActionCreator = () => {
  return {
    type: actionTypes.CLEAR_PLAYER_DATA,
  }
}

export const setPlayerStatsActionCreator = (stats) => {
  return {
    type: actionTypes.SET_PLAYER_STATS,
    stats,
  }
}

export const setPlayerTransfersActionCreator = (transfers) => {
  return {
    type: actionTypes.SET_PLAYER_TRANSFERS,
    transfers,
  }
}

export const setPlayerSidelinedActionCreator = (sidelined) => {
  return {
    type: actionTypes.SET_PLAYER_SIDELINES,
    sidelined,
  }
}

export const setAvailibleSeasonsActionCreator = (seasons) => {
  return {
    type: actionTypes.SET_AVAILIBLE_SEASONS,
    seasons,
  }
}

export const setPlayerClubActionCreator = (club) => {
  return {
    type: actionTypes.SET_PLAYER_CLUB,
    club,
  }
}

export const setPlayerPartnersActionCreator = (players) => {
  return {
    type: actionTypes.SET_PLAYER_PARTNERS,
    players,
  }
}

export const fetchPlayerStatsBySeasonActionCreator = () => {
  return dispatch => {
    //axios.get(`https://api-football-v1.p.rapidapi.com/v2/fixtures/date/2020-02-06`)
    // .then(response => response.data.api.results.fixtures)
    dispatch(startLoadingActionCreator());
    fetchPlayerStats()
      .then(response => response.api.results.players)
      .then(stats => dispatch(setPlayerStatsActionCreator(stats)))
      .then(() => dispatch(finishLoadingActionCreator()))
      .catch(error => console.log(error))
  }
}

export const fetchPlayerTransfersActionCreator = () => {
  return dispatch => {
    //axios.get(`https://api-football-v1.p.rapidapi.com/v2/fixtures/date/2020-02-06`)
    // .then(response => response.data.api.results.fixtures)
    fetchPlayerTransfers()
      .then(response => response.api.results.transfers)
      .then(transfers => dispatch(setPlayerTransfersActionCreator(transfers)))
      .catch(error => console.log(error))
  }
}

export const fetchPlayerSidelinesActionCreator = () => {
  return dispatch => {
    //axios.get(`https://api-football-v1.p.rapidapi.com/v2/fixtures/date/2020-02-06`)
    // .then(response => response.data.api.results.fixtures)
    fetchPlayerSidelines()
      .then(response => response.api.results.sidelined)
      .then(sidelined => dispatch(setPlayerSidelinedActionCreator(sidelined)))
      .catch(error => console.log(error))
  }
}

export const fetchAvailibleSeasonsActionCreator = () => {
  return dispatch => {
    //axios.get(`https://api-football-v1.p.rapidapi.com/v2/fixtures/date/2020-02-06`)
    // .then(response => response.data.api.results.fixtures)
    fetchAvailibleSeasons()
      .then(response => response.api.results.players)
      .then(players => dispatch(setAvailibleSeasonsActionCreator(players)))
      .catch(error => console.log(error))
  }
}

export const fetchPlayerClubActionCreator = () => {
  return dispatch => {
    //axios.get(`https://api-football-v1.p.rapidapi.com/v2/fixtures/date/2020-02-06`)
    // .then(response => response.data.api.results.fixtures)
    fetchTeam()
      .then(response => response.api.results.teams)
      .then(teams => dispatch(setPlayerClubActionCreator(teams[0])))
      .catch(error => console.log(error))
  }
}

export const fetchPlayerPartnersActionCreator = () => {
  return dispatch => {
    //axios.get(`https://api-football-v1.p.rapidapi.com/v2/fixtures/date/2020-02-06`)
    // .then(response => response.data.api.results.fixtures)
    fetchTeamSquard()
      .then(response => response.api.results.players)
      .then(players => dispatch(setPlayerPartnersActionCreator(players)))
      .catch(error => console.log(error))
  }
}

import * as actionTypes from '../actionTypes';
import { fetchTeam, fetchTeamStats, fetchTeamSquard } from '../../FakeData/FakeData';
import { fetchPlayerDetails } from './utility';

export const startLoadingActionCreator = () => {
  return {
    type: actionTypes.START_CLUB_LOADING,
  }
}

export const finishLoadingActionCreator = () => {
  return {
    type: actionTypes.FINISH_CLUB_LOADING,
  }
}

export const setClubActionCreator = (club) => {
  return {
    type: actionTypes.SET_CLUB,
    club,
  }
}

export const setClubStatsActionCreator = (stats) => {
  return {
    type: actionTypes.SET_CLUB_STATS,
    stats,
  }
}

export const clearClubDataActionCreator = () => {
  return {
    type: actionTypes.CLEAR_CLUB_DATA,
  }
}

export const setClubSquadActionCreator = (players) => {
  return {
    type: actionTypes.SET_CLUB_SQUAD,
    players,
  }
}

export const fetchClubActionCreator = () => {
  return dispatch => {
    //axios.get(`https://api-football-v1.p.rapidapi.com/v2/fixtures/date/2020-02-06`)
    // .then(response => response.data.api.results.fixtures)
    dispatch(startLoadingActionCreator());
    fetchTeam()
      .then(response => response.api.results.teams[0])
      .then(club => dispatch(setClubActionCreator(club)))
      .then(() => dispatch(finishLoadingActionCreator()))
      .catch(error => console.log(error))
  }
}

export const fetchClubStatsActionCreator = () => {
  return dispatch => {
    //axios.get(`https://api-football-v1.p.rapidapi.com/v2/fixtures/date/2020-02-06`)
    // .then(response => response.data.api.results.fixtures)
    fetchTeamStats()
      .then(response => response.api.results.statistics)
      .then(stats => dispatch(setClubStatsActionCreator(stats)))
      .catch(error => console.log(error))
  }
}

export const fetchClubSquadActionCreator = () => {
  return dispatch => {
    fetchTeamSquard()
      .then(response => response.api.results.players)
      .then(players => Promise.all(players.map(player => fetchPlayerDetails(player.player_id))))
      .then(players => dispatch(setClubSquadActionCreator(players)))
      .catch(error => console.log(error))
  }
}

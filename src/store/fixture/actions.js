import * as actionTypes from '../actionTypes';

import { fetchFixture, fetchPlayerDetailsQuery } from '../../FakeData/FakeData';

export const startLoadingActionCreator = () => {
  return {
    type: actionTypes.START_FIXTURE_LOADING,
  }
}

export const finishLoadingActionCreator = () => {
  return {
    type: actionTypes.FINISH_FIXTURE_LOADING,
  }
}

export const setFixtureActionCreator = (fixture) => {
  return {
    type: actionTypes.SET_FIXTURE,
    fixture,
  }
}

export const setSelectedPlayerActionCreator = (player, isAway) => {
  return {
    type: actionTypes.SELECT_PLAYER,
    player,
    isAway,
  }
}

export const clearFixtureActionCreator = () => {
  return {
    type: actionTypes.CLEAR_FIXTURE,
  }
}

export const fetchPlayerDataActionCreator = (playerId, isAway) => {
  return dispatch => {
    //axios.get(`https://api-football-v1.p.rapidapi.com/v2/players`)
    // .then(response => response.data.api.results.players)
    fetchPlayerDetailsQuery(playerId)
      .then(response => response.api.results.players[0])
      .then(player => { player.player_id = playerId; return player; })
      .then(player => dispatch(setSelectedPlayerActionCreator(player, isAway)))
      .catch(error => console.log(error))
  }
}

export const fetchFixturesActionCreator = () => {
  return dispatch => {
    //axios.get(`https://api-football-v1.p.rapidapi.com/v2/fixtures/date/2020-02-06`)
    // .then(response => response.data.api.results.fixtures)
    dispatch(startLoadingActionCreator());
    fetchFixture()
      .then(response => response.api.results.fixtures[0])
      .then(fixture => dispatch(setFixtureActionCreator(fixture)))
      .then(() => dispatch(finishLoadingActionCreator()))
      .catch(error => console.log(error))
  }
}

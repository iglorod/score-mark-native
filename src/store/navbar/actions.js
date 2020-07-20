import * as actionTypes from '../actionTypes';

export const setLastLeagueActionCreator = (league) => {
  return {
    type: actionTypes.SET_LAST_LEAGUE,
    league,
  }
}

export const setLastClubActionCreator = (club) => {
  return {
    type: actionTypes.SET_LAST_CLUB,
    club,
  }
}

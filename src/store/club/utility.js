import { fetchPlayerDetailsQuery } from '../../FakeData/FakeData';

export const fetchPlayerDetails = () => {
  return new Promise((resolve, reject) => {
    fetchPlayerDetailsQuery()
      .then(response => response.api.results.players[0])
      .then(details => resolve(details))
      .catch(error => reject(error))
  })
}

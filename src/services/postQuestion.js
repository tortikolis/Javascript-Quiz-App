import { endpoint } from '../shared/constants';

export const postQuestion = content => {
  return fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: content
  })
  .then(response => response.json())
  .catch(err => console.error('ERROR:', err))
}
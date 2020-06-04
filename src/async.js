const delay = (timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, timeout);
  });
}

module.exports = { delay };



import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const ProviderMock = props => (
  <Router history={history}>
    {props.children}
  </Router>
);

export default ProviderMock;


const getData = (api) => {
  return fetch(api)
    .then(response => response.json())
    .then(response => response)
    .catch(error => error);
};

export default getData;

import getData from '../../utils/getData';

describe('Get Data', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Call API', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));

    getData('https://jsonplaceholder.typicode.com/users/1')
      .then((response) => {
        expect(response.data).toEqual('12345');
      });
    // expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });

});
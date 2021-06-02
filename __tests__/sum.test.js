const sum = require('../sum');
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../client/src/index'

describe('Testing Jest to make sure it works', () => {
  test('adds 1 + 3 to equal 4', () => {
    expect(sum(1,3)).toBe(4);
  })

  test('Renders Hello World', () => {
    const app = renderer.create(<App />)
    let tree = app.toJSON();
    expect(tree).toMatchSnapshot();
  })
})


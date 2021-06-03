const sum = require('../sum');
import React from 'react';
import ReactDOM from 'react-dom';

// import App from '../client/src/index';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import {shallow} from 'enzyme';


describe('Testing Jest to make sure it works', () => {
  it('adds 1 + 3 to equal 4', () => {
    expect(sum(1,3)).toBe(4);
  })

  // it('Renders Hello World', () => {
  //   const app = shallow(<App />)

  //   expect(app.exists()).toBe(true);
  // })
})


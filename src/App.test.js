import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import store from './redux/store';

describe('<App />', () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = shallow(<App />, { context: { store } }).dive();
  });

  it('renders the dumb component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('contains app root div', () => {
    expect(wrapper.find('.App')).toHaveLength(1);
  });
});

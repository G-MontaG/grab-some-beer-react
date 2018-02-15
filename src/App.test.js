import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

it('renders welcome message', () => {
  const wrapper = shallow(<Provider store={store}><App /></Provider>);
  // expect(wrapper.contains(welcome)).to.equal(true);
  expect(wrapper.find('.App')).toHaveLength(1);
});

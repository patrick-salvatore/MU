import React from 'react';
import ContactPage from './index';
import { shallow } from 'enzyme';

describe('<ContactPage/> View component', () => {
  it('renders without exploding', () => {
    const wrapper = shallow(<ContactPage />);

    expect(wrapper).toBeDefined();
  });
});

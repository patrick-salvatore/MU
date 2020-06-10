import React from 'react';
import Donate from './index';
import { render } from '@testing-library/react';

describe('<Donate/> View component', () => {
  it('renders without exploding', () => {
    const wrapper = render(<Donate />);

    expect(wrapper).toBeDefined();
  });
});

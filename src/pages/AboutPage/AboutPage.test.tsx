import React from 'react';
import AboutPage from './index';
import { render } from '@testing-library/react';

describe('<AboutPage/> View component', () => {
  it('renders without exploding', () => {
    const wrapper = render(<AboutPage />);

    expect(wrapper).toBeDefined();
  });
});

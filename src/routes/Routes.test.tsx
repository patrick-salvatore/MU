import React from 'react';
import { MemoryRouter } from 'react-router';
import { AppView } from './index';
import LandingPage from '../Pages/LandingPage';
import NotFound from '../Pages/NotFound';
import ExplorePage from '../Pages/ExplorePage';
import AboutPage from '../Pages/AboutPage';
import ContactPage from '../Pages/ContactPage';

import { mount } from 'enzyme';

describe('<Routes/>', () => {
  it('renders without crashing', () => {
    expect(AppView).toBeDefined();
  });

  it('should render <LandingPage/> with path: /', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <AppView />
      </MemoryRouter>
    );

    expect(wrapper.find(LandingPage)).toHaveLength(1);
    expect(wrapper.find(NotFound)).toHaveLength(0);
  });

  it('should render <ExplorePage/> with path: /explore', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/posts']}>
        <AppView />
      </MemoryRouter>
    );

    expect(wrapper.find(ExplorePage)).toHaveLength(1);
    expect(wrapper.find(NotFound)).toHaveLength(0);
  });

  it('should render <AboutPage/> with path: /about', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/about']}>
        <AppView />
      </MemoryRouter>
    );

    expect(wrapper.find(AboutPage)).toHaveLength(1);
    expect(wrapper.find(NotFound)).toHaveLength(0);
  });

  it('should render <ContactPage/> with path: /contact', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/contact']}>
        <AppView />
      </MemoryRouter>
    );

    expect(wrapper.find(ContactPage)).toHaveLength(1);
    expect(wrapper.find(NotFound)).toHaveLength(0);
  });

  it('should render <NotFound/> with unknown path', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/random']}>
        <AppView />
      </MemoryRouter>
    );

    expect(wrapper.find(NotFound)).toHaveLength(1);
  });
});

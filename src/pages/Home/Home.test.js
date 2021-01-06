import React from 'react'
import { shallow } from 'enzyme'
import Home from './index';

describe('Home Page', () => {
  test('should render', () => {
    const wrapper = shallow(
      <Home />
    )

    expect(wrapper.exists()).toBeTruthy()
  })
})

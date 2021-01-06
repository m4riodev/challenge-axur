import React from 'react'
import { shallow } from 'enzyme'
import Head from './index';

describe('Head Component', () => {
  test('should render', () => {
    const wrapper = shallow(
      <Head />
    )

    expect(wrapper.exists()).toBeTruthy()
  })
})

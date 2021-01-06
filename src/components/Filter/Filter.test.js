import React from 'react'
import { shallow } from 'enzyme'
import Filter from './index';

describe('Filter Component', () => {
  test('should render', () => {
    const data = [{ name: 'test' }];
    
    const wrapper = shallow(
      <Filter data={data} />
    )

    expect(wrapper.exists()).toBeTruthy()
  })
})

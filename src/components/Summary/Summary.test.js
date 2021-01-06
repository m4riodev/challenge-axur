import React from 'react'
import { shallow } from 'enzyme'
import Summary from './index';

describe('Summary Component', () => {
  test('should render', () => {
    const data = [{ 
        title: 'test',
        body: 'only test',
        metadata: {
            publishedAt: '1492004832000',
        },
        author: 'Testmaker'
    }];
    
    const wrapper = shallow(
      <Summary items={data} />
    )

    expect(wrapper.exists()).toBeTruthy()
  })
})

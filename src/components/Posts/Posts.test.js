import React from 'react'
import { shallow } from 'enzyme'
import Posts from './index';

describe('Posts Component', () => {
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
      <Posts items={data} />
    )

    expect(wrapper.exists()).toBeTruthy()
  })
})

import React from 'react'
import { shallow } from 'enzyme'
import Post from './index';

describe('Post Component', () => {
  test('should render', () => {
    const data = { 
        title: 'test',
        body: 'only test',
        metadata: {
            publishedAt: '1492004832000',
        },
        author: 'Testmaker'
    };
    
    const wrapper = shallow(
      <Post item={data} />
    )

    expect(wrapper.exists()).toBeTruthy()
  })
})

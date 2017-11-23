import React from 'react'
import renderer from 'react-test-renderer'

import __NAME__ from './__NAME__'

describe('components', () => {
  describe('__NAME__', () => {
    it('renders correctly', () => {
      const component = renderer.create(<__NAME__ />)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})

const questions = require('../../src/utils/component/questions.js')

describe('nameQuestion', () => {
  describe('filter', () => {
    const { nameQuestion: { filter } } = questions

    it('should snake case the component', () => {
      expect(filter('userDetails')).toBe('user_details')
    })
  })

  describe('validate', () => {
    const { nameQuestion: { validate } } = questions

    it('does not allow empty names', () => {
      expect(validate('')).not.toEqual(true)
    })

    it('returns true for correct names', () => {
      expect(validate('user_details')).toBe(true)
    })
  })
})

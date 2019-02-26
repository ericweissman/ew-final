import partyFilterReducer from '../partyFilterReducer'

describe('partyFilterReducer', () => {
  it('should return the default state', () => {
    const expected = 'All'
    const result = partyFilterReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return false if Loading is finished', () => {
    const expected = 'Democratic'
    const result = partyFilterReducer(undefined, {
      type: 'SET_PARTY_FILTER',
      party: 'Democratic'
    })
    expect(result).toEqual(expected)
  })
})
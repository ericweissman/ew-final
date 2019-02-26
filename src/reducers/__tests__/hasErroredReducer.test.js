import hasErroredReducer from '../hasErroredReducer'

describe('hasErroredReducer', () => {
  it('should return the initial  state', () => {
    const expected = ''
    const result = hasErroredReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return the error if there is an error', () => {
    const expected = 'Bugs in the mainframe'
    const result = hasErroredReducer(undefined, {
      type: 'HAS_ERRORED',
      error: 'Bugs in the mainframe'
    })
    expect(result).toEqual(expected)
  })
})
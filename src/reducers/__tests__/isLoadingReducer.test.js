import isLoadingReducer from '../isLoadingReducer'

describe('isLoadingReducer', () => {
  it('should return the default state', () => {
    const expected = true
    const result = isLoadingReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return false if Loading is finished', () => {
    const expected = false
    const result = isLoadingReducer(undefined, {
      type: 'IS_LOADING',
      isLoading: false
    })
    expect(result).toEqual(expected)
  })
})
import presidentsReducer from '../presidentsReducer'

describe('presidentsReducer', () => {
  it('should return the default state', () => {
    const expected = []
    const result = presidentsReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return presidents if the type is GET_PRESIDENTS_SUCCESS', () => {
    const mockPresidents = [{ name: 'BarryO' }]
    const expected = [{name: 'BarryO'}]
    const result = presidentsReducer(undefined, {
      type: 'GET_PRESIDENTS_SUCCESS',
      presidents: mockPresidents
    })
    expect(result).toEqual(expected)
  })
})
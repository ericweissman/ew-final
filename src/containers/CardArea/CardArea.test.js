import { mapStateToProps, mapDispatchToProps } from './CardArea'
import { fetchData } from '../../thunks/fetchData'

jest.mock('../../thunks/fetchData')

describe('CardArea', () => {
  describe('mapStateToProps', () => {
    it('should return the correct state object', () => {
      const mockState = {
        isLoading: false,
        hasErrored: '',
        presidents: [{ name: 'BarryO' }],
        fakeState: 'hotdogs',
      }
  
      const expected = {
        presidents: [{ name: 'BarryO' }],
      }
  
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })
})
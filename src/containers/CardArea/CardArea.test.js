import { mapStateToProps, mapDispatchToProps } from './CardArea'
import { fetchData } from '../../thunks/fetchData'
import setPartyFilter from '../../actions';

jest.mock('../../thunks/fetchData')

describe('CardArea', () => {
  describe('mapStateToProps', () => {
    it('should return the correct state object', () => {
      const mockState = {
        isLoading: false,
        hasErrored: '',
        partyFilter: 'All',
        presidents: [{ name: 'BarryO' }],
        fakeState: 'hotdogs',
      }
  
      const expected = {
        presidents: [{ name: 'BarryO' }],
        partyFilter: 'All',
      }
  
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })

  // describe('mappDispatchToPRops', () => {
  //   const mockDispatch = jest.fn()
  //   const actionToDispatch = setPartyFilter('')
)
  // })

})
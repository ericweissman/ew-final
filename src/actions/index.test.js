import * as actions from '../actions'

describe('actions', () => {
  it('should have a type IS_LOADING', () => {
    const expected = {
      type: 'IS_LOADING',
      isLoading: true
    }
    const result = actions.isLoading(true)
    expect(result).toEqual(expected)
  })

  it('should have a type hasErrored', () => {
    const expected = {
      type: 'HAS_ERRORED',
      error: 'Bugs in the mainframe'
    }
    const result = actions.hasErrored('Bugs in the mainframe')
    expect(result).toEqual(expected)
  })

  it('should have a type of getPresidentsSuccess', () => {
    const mockPresidents = [
      {
        "number": 1,
        "president": "George Washington",
        "birth_year": 1732,
        "death_year": 1799,
        "took_office": "1789-04-30",
        "left_office": "1797-03-04",
        "party": "No Party"
      },
      {
        "number": 2,
        "president": "John Adams",
        "birth_year": 1735,
        "death_year": 1826,
        "took_office": "1797-03-04",
        "left_office": "1801-03-04",
        "party": "Federalist"
      }
    ]
    const expected = {
      type: 'GET_PRESIDENTS_SUCCESS',
      presidents: mockPresidents,
    }
    const result = actions.getPresidentsSuccess(mockPresidents)
    expect(result).toEqual(expected)
  })

  it('should have a type of SetPartyFIlter', () => {
    const mockParty = 'Democratic'
    const expected = {
      type: 'SET_PARTY_FILTER',
      party: mockParty
    }

    const result = actions.setPartyFilter(mockParty)
    expect(result).toEqual(expected)
  })
})
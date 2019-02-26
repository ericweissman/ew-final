import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mapStateToProps, mapDispatchToProps } from './App'
import { fetchData } from '../../thunks/fetchData'

jest.mock('../../thunks/fetchData')

describe('App', () => {
  describe('mapStateToProps', () => {
    it('should return an object with the correct state', () => {
      const mockState = {
        isLoading: false,
        hasErrored: '',
        fakeState: 'hotdogs',
      }

      const expected = {
        isLoading: false,
        hasErrored: '',
      }

      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    const mockDispatch = jest.fn()
    const actionToDispatch = fetchData()

    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.fetchData()
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
})

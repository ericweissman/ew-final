import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchData } from '../../thunks/fetchData'
import Loading from '../../components/Loading'
import ErrorMsg from '../../components/ErrorMsg'
import CardArea from '../CardArea/CardArea'

import './App.css';

export class App extends Component {

  componentDidMount() {
    this.getPresidents()
  }

  getPresidents = () => {
    this.props.fetchData()
  }

  render() {
    const { isLoading, hasErrored } = this.props
    return (
      <div className="App">
        <h1>Presidents and Assholes</h1>
        {
          isLoading ? <Loading /> :
            <CardArea />
        }
        {
          hasErrored !== '' && <ErrorMsg error={hasErrored} />
        }
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  hasErrored: state.hasErrored,
})

export const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchData())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

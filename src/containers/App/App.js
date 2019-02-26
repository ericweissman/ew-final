import React, { Component } from 'react';
import { connect } from 'react-redux'
import {fetchData} from '../../thunks/fetchData'

import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.fetchData()
  }
  
  render() {
    return (
      <div className="App">
       this works
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  hasErrored: state.hasErrored,
  presidents: state.presidents,
})

export const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchData())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

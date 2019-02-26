import React, { Component } from 'react'
import Card from '../../components/Card/Card'
import { connect } from 'react-redux'
import { setPartyFilter } from './../../actions'
import './CardArea.css'

export class CardArea extends Component {
  constructor() {
    super()
    this.state = {
      filter: ''
      // filters: [
      //   {
      //     name: 'No Party',
      //     value: 'No Party',
      //   },
      //   {
      //     name: 'Federalist',
      //     value: 'Federalist',
      //   },
      //   {
      //     name: 'Democratic-Republican',
      //     value: 'Democratic-Republican',
      //   },
      //   {
      //     name: 'Whig',
      //     value: 'Whig',
      //   },
      //   {
      //     name: 'Democratic',
      //     value: 'Democratic',
      //   },
      //   {
      //     name: 'Republican',
      //     value: 'Republican',
      //   }
      // ],
      // value: '?'
    }
  }
  
  handleChange = (e) => {
    e.preventDefault()
    const {value} = e.target
    this.setState({
      filter: value
    })
  }

  render() {
    const { presidents } = this.props
    const { filters } = this.state
    const cards = presidents.map((president) => {
      return <Card {...president} key={Date.now()} />
    })
    return (
      <div>
        <select oncChange={this.handleChange} value={this.state.filter}>
          <option value=''>Select a Party</option>
          <option value='No Party'> No Party </option>
          <option value='Federalist'>Federalist</option>
          <option value='Democratic-Republican'>Democratic-Republican</option>
          <option value='Whig'>Whig</option>
          <option value='Democratic'>Democratic</option>
          <option value='Republican'>Republican</option>
        </select>
        <div className='card-area'>
          {cards}
        </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  presidents: state.presidents,
  partyFilter: state.partyFilter,
})

export const mapDispatchToProps = (dispatch) => ({
  setFilter: (party) => dispatch(setPartyFilter(party))
})

export default connect(mapStateToProps)(CardArea)
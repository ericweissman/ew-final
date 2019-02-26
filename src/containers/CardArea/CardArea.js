import React, { Component } from 'react'
import Card from '../../components/Card/Card'
import { connect } from 'react-redux'
import { setPartyFilter } from './../../actions'
import './CardArea.css'

export class CardArea extends Component {

  handleChange = async (e) => {
    const { value } = e.target
    await this.props.setFilter(value)
  }

  render() {
    let cards
    const { presidents, partyFilter } = this.props
    const federalist = presidents.filter(president => president.party === 'Federalist')
    const dr = presidents.filter(president => president.party === 'Democratic-Republican')
    const whig = presidents.filter(president => president.party === 'Whig')
    const dems = presidents.filter(president => president.party === 'Democratic')
    const rep = presidents.filter(president => president.party === 'Republican')

    switch(partyFilter) {
      case '':
      case 'All':
        cards = presidents.map((president) => {
          return <Card {...president} key={Date.now()} />
        })
        break;
      case 'Federalist':
        cards = federalist.map((president) => {
          return <Card {...president} key={Date.now()} />
        })
        break;
      case 'Democratic-Republican':
        cards = dr.map((president) => {
          return <Card {...president} key={Date.now()} />
        })
        break;
      case 'Whig':
        cards = whig.map((president) => {
          return <Card {...president} key={Date.now()} />
        })
        break;
      case 'Democratic':
        cards = dems.map((president) => {
          return <Card {...president} key={Date.now()} />
        })
        break;
      case 'Republican':
        cards = rep.map((president) => {
          return <Card {...president} key={Date.now()} />
        })
        break;
    }

    // cards = presidents.map((president) => {
    //   return <Card {...president} key={Date.now()} />
    // })
    

    return (
      <div>
        <select onChange={this.handleChange}>
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

export default connect(mapStateToProps, mapDispatchToProps)(CardArea)
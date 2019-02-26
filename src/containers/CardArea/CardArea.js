import React, {Component} from 'react'
import Card from '../../components/Card/Card'
import { connect } from 'react-redux'
import './CardArea.css'

export class CardArea extends Component {

  render() {
    const {presidents} = this.props
    const cards = presidents.map((president) => {
      return <Card {...president} key={Date.now()}/>
    })
    return(
      <div className='card-area'>
        {cards}
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  presidents: state.presidents
})

export default connect(mapStateToProps)(CardArea)
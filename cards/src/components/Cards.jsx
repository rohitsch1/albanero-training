import React from 'react'
import {Card} from '@mui/material'
import '../scss/cards.scss'

const Cards = (props) => {
   
  return (
    <div className='cards-style'>
        <Card variant="outlined">{props.value}</Card>
    </div>
  )
}

export default Cards
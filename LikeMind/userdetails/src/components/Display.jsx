import React from 'react'
import { Button } from '@mui/material'
import BasicCard from './Card'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Display = (props) => {
    let content = props.value
    console.log(content)
  return (
   <>
   <ArrowBackIosNewIcon/>
    <BasicCard value ={props.value}/>
    <ArrowForwardIosIcon/>
   </>
  )
}

export default Display
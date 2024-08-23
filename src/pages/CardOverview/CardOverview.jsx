import React from 'react'
import CardOverviewComponent from '../../components/CardOverviewComponent/CardOverviewComponent'
import { useParams } from 'react-router-dom'

const CardOverview = () => {
  const { id } = useParams();
  return (
    <div>
      <CardOverviewComponent id={id}/>
    </div>
  )
}

export default CardOverview

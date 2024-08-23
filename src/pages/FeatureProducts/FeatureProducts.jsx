import React from 'react'
import FeaturedProductComponent from "../../components/FeaturedProductComponent/FeaturedProductComponent"

const FeatureProducts = () => {
  return (
    <div>
      <FeaturedProductComponent limit={9999999}/>
    </div>
  )
}

export default FeatureProducts

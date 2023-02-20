import React from 'react'
import './PageNotFound.css'
import PNF from '../../assets/images/404.jpg'
const PageNotFound = () => {
  return (
    <div className = 'PageNotFound'>
      <img src = {PNF} className = "PNFImage"/>
    </div>
  )
}

export default PageNotFound
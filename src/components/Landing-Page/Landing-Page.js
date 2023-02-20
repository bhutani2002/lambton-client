import React, { useState } from 'react'
import Banner from './Banner/Banner'
import Toyota from './Toyota/Toyota'
import './Landing-Page.css'

const LandingPage = () => {
  const [embedURL] = useState("https://drive.google.com/file/d/1fB3GZ7aGl0Hfv7A1jvPnP_BfcPapnMDM/preview");
  return (
    <>
        <Banner/>
        <Toyota/>
        <div className = 'PDF'>
          <div className = 'pdf-head'>
            Technical Solution Package
          </div>
          <div className="pdf-pre-desc">
            <div className="pdf-box">
              <iframe src={embedURL} className = "pdf-preview" width="650" height="480" allow="autoplay"></iframe>
            </div>
            <div className = 'pdf-desc'>
              <p>Technical Solution Package (TSP) aims to help select the design and implement the solution to requirements. TSP involves working with products, product components, lifecycle model selection, etc. TSP focuses on evaluating, selecting solutions, developing details designs, and then implementing these designs.</p>
            </div>
          </div>
        </div>

        {/* <object data="http://africau.edu/images/default/sample.pdf" type="application/pdf" width="100%" height="100%">
          <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
        </object> */}
    </>
  )
}

export default LandingPage
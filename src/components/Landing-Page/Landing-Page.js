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
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum elit id justo tincidunt, et mollis nisl interdum. Fusce facilisis congue velit, sed dictum ex pellentesque sit amet. Suspendisse sodales dui eget enim eleifend, eget egestas velit porta. Maecenas est nisi, lobortis ut malesuada a, dapibus id diam. Sed ex magna, elementum et dolor id, tempor ultrices massa. Proin pulvinar, mi a congue rhoncus, eros nunc iaculis massa, id mattis nunc turpis id augue. Vestibulum vitae tincidunt libero, sed feugiat quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris mattis nisi purus, vitae egestas eros consequat nec. In interdum orci libero, lacinia aliquam odio fringilla ac. Aliquam volutpat mi facilisis, facilisis augue tempor, efficitur purus. Praesent dolor nulla, convallis et ex ut, tincidunt mattis mi.</p>
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
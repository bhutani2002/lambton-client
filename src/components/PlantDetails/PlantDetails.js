import './PlantDetails.css'
import React from 'react'
import img1 from '../../assets/images/img-preview-1.jpg'
import img2 from '../../assets/images/img-preview-2.jpg'
import img3 from '../../assets/images/img-preview-3.jpg'
import img4 from '../../assets/images/img-preview-4.jpg'
import img5 from '../../assets/images/img-preview-5.jpg'
import img6 from '../../assets/images/img-preview-6.jpg'
import img7 from '../../assets/images/img-preview-7.jpg'
import img8 from '../../assets/images/img-preview-8.jpg'
import img9 from '../../assets/images/img-preview-9.jpg'
import img10 from '../../assets/images/img-preview-10.jpg'
import img11 from '../../assets/images/img-preview-11.jpg'
import img12 from '../../assets/images/img-preview-12.jpg'
import plantdetailsimage from '../../assets/images/PlantDetailsback.jpg'
import { Col, Row } from 'react-bootstrap'
const PlantDetails = () => {
    // const [embedURL] = useState("https://drive.google.com/file/d/1fB3GZ7aGl0Hfv7A1jvPnP_BfcPapnMDM/preview");
    const embedURLSolutionPackage = "https://drive.google.com/file/d/1fB3GZ7aGl0Hfv7A1jvPnP_BfcPapnMDM/preview";
    const embedURLProjectPlan = "https://drive.google.com/file/d/1PHr2GNpNxLSK8oQi17JCqxxvtkyFwqx7/preview";
    const embedURLBusinessCase = "https://drive.google.com/file/d/1lvBsYCrZSSbWWA9kwo_xewTZv1y1dIMX/preview";
  return (
    <div className = 'Plantdetails'>
        <Row className = 'plant-head-top'>
            <img src = {plantdetailsimage} className = "plantImg"></img>
            <Row className = "plant_text">
                <div className = 'plant_heading'>PLANT DETAILS</div>
                {/* <div className = 'career-desc-para'>
                    <Col md = {4}>
                        Jump Start your Career at Toyota Canada.
                    </Col>
                </div> */}
            </Row>
        </Row>
        <div className = 'Solutionpackage-PDF'>
          <div className = 'solution-pdf-head'>
            Technical Solution Package
          </div>
          <div className="solution-pdf-pre-desc">
            <div className="solution-pdf-box">
              <iframe src={embedURLSolutionPackage} className = "solution-pdf-preview" width="650" height="480" allow="autoplay" target = "_blank"></iframe>
            </div>
            <div className = 'solution-pdf-desc'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum elit id justo tincidunt, et mollis nisl interdum. Fusce facilisis congue velit, sed dictum ex pellentesque sit amet. Suspendisse sodales dui eget enim eleifend, eget egestas velit porta. Maecenas est nisi, lobortis ut malesuada a, dapibus id diam. Sed ex magna, elementum et dolor id, tempor ultrices massa. Proin pulvinar, mi a congue rhoncus, eros nunc iaculis massa, id mattis nunc turpis id augue. Vestibulum vitae tincidunt libero, sed feugiat quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris mattis nisi purus, vitae egestas eros consequat nec. In interdum orci libero, lacinia aliquam odio fringilla ac. Aliquam volutpat mi facilisis, facilisis augue tempor, efficitur purus. Praesent dolor nulla, convallis et ex ut, tincidunt mattis mi.</p>
            </div>
          </div>
        </div>


        <div className = 'ProjectPlan-PDF'>
          <div className = 'ProjectPlan-pdf-head'>
            Project Management Plan
          </div>
          <div className="ProjectPlan-pdf-pre-desc">
            <div className="ProjectPlan-pdf-box">
              <iframe src={embedURLProjectPlan} className = "ProjectPlan-pdf-preview" width="650" height="480" allow="autoplay"></iframe>
            </div>
            <div className = 'ProjectPlan-pdf-desc'>
              <p>It is an important document that details out all the project phases from Project initiation to project closing. This Project plan is the collection of many sub-documents such as Project Charter, Development Approach and Life Cycle, Activity Duration Estimates, Activity Attributes, Project Schedule, Project Manpower Resourcing, Project Process and Contracts, Team Management and Organizational Structure, Communication Plan, Risk Register,   Stakeholder Management Plan, Work Breakdown Structure, Work Breakdown Dictionary, Quality Management Plan, Change Management Plan, Cost Estimation Plan, Issue Log, Attendance Log, MOM’s and Lessons Learned.</p>
            </div>
          </div>
        </div>

        <div className = 'Business-PDF'>
          <div className = 'Business-pdf-head'>
            Business Case
          </div>
          <div className="Business-pdf-pre-desc">
            <div className="Business-pdf-box">
              <iframe src={embedURLBusinessCase} className = "Business-pdf-preview" width="650" height="480" allow="autoplay"></iframe>
            </div>
            <div className = 'Business-pdf-desc'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum elit id justo tincidunt, et mollis nisl interdum. Fusce facilisis congue velit, sed dictum ex pellentesque sit amet. Suspendisse sodales dui eget enim eleifend, eget egestas velit porta. Maecenas est nisi, lobortis ut malesuada a, dapibus id diam. Sed ex magna, elementum et dolor id, tempor ultrices massa. Proin pulvinar, mi a congue rhoncus, eros nunc iaculis massa, id mattis nunc turpis id augue. Vestibulum vitae tincidunt libero, sed feugiat quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris mattis nisi purus, vitae egestas eros consequat nec. In interdum orci libero, lacinia aliquam odio fringilla ac. Aliquam volutpat mi facilisis, facilisis augue tempor, efficitur purus. Praesent dolor nulla, convallis et ex ut, tincidunt mattis mi.</p>
            </div>
          </div>
        </div>

        <div className = 'ImagePreview'>
          <div className = 'ImgPreview'>
            Image-Previews
          </div>
          <div className="images">
            <img src = {img1} alt = "img-preview"/>
            <img src = {img2} alt = "img-preview"/>
            <img src = {img3} alt = "img-preview"/>
            <img src = {img4} alt = "img-preview"/>
            <img src = {img5} alt = "img-preview"/>
            <img src = {img6} alt = "img-preview"/>
            <img src = {img7} alt = "img-preview"/>
            <img src = {img8} alt = "img-preview"/>
            <img src = {img9} alt = "img-preview"/>
            <img src = {img10} alt = "img-preview"/>
            <img src = {img11} alt = "img-preview"/>
            <img src = {img12} alt = "img-preview"/>
          </div>
        </div>
    </div>
  )
}

export default PlantDetails
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
              <p>Technical Solution Package (TSP) aims to help select the design and implement the solution to requirements. TSP involves working with products, product components, lifecycle model selection, etc. TSP focuses on evaluating, selecting solutions, developing details designs, and then implementing these designs.</p>
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
              <p>A business case provides justification for undertaking a project, programme or portfolio. It evaluates the benefit, cost and risk of alternative options and provides a rationale for the preferred solution.</p>
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
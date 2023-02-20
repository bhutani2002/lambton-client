import './Vehicles.css'
import React from 'react'
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
const VehicleCard = ({ImgLink, ModelYear, ModelName}) => {
  return (
        <div className = 'veh-card' style = {{width: "30rem"}}>
            <div className = "card">
                <div className = 'back'>
                    <div className = 'car-head'>
                        <h6>{ModelYear}</h6>
                        <h5 className = 'model-Name'>{ModelName}</h5>
                    </div>
                    <div>
                        <img class="card-img-top car" src={ImgLink} alt="Card image cap"/>
                    </div>
                </div>
                <div className = 'carlink'>
                    <a href = "https://www.toyota.ca/toyota/en/vehicles/bz4x/overview" target = "_blank">Explore {ModelName} <i className = "fa fa-angle-right"></i> </a>
                </div>
            </div>
        </div>
  )
}

export default VehicleCard
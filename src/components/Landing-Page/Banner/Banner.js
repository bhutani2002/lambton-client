import './Banner.css'
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import cr1 from '../../../assets/images/Carausal-1.jpg'
import cr2 from '../../../assets/images/karl-paul-baldacchino-Yr5H7Taaluo-unsplash.jpg'
import land from '../../../assets/images/Land_Sarnia_Lambton_cropped.jpg'
import chemical from '../../../assets/images/Chemical_valley_cropped.jpg'
import bridge from '../../../assets/images/Bluewater_bridge_1.jpg'
import ReactPlayer from 'react-player'
const Banner = () => {
  return (
    <div>
        <Carousel className = 'crausel'>
            <Carousel.Item>
                <img
                className="d-block crau-image"
                // src="https://images.unsplash.com/photo-1608447714925-599deeb5a682?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=360&ixlib=rb-1.2.1&q=80&w=750 "
                src = {chemical}
                // 360 * 750

                // src = {cr2}
                alt="First slide"
                height = "805px"
                />
                {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 crau-image"
                // src="https://images.unsplash.com/photo-1504610926078-a1611febcad3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=360&ixlib=rb-1.2.1&q=80&w=750"
                src = {bridge}
                height = "805px"
                alt="Second slide"
                />

                {/* <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                {/* <img
                className="d-block w-100 crau-image"
                // src="https://images.unsplash.com/photo-1419225692236-28f3211d7038?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=360&ixlib=rb-1.2.1&q=80&w=750"
                src = {land}
                alt="Third slide"
                height = "805px"
                /> */}
                <ReactPlayer url = "https://www.youtube.com/watch?v=yA9MvKog7A4" pip = {true} controls = {true} playing = {true} muted = {true}className="d-block w-100 crau-image" alt="Third slide" height = "805px" width = "100%"/>
                {/* <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default Banner
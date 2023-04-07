import React from 'react'
import Typical from "react-typical";

import imge from "../image/boot.png";
import img from "../image/maquette.png";
import image from "../image/git.png"
import { Link } from 'react-router-dom';



export const Projects = () => {
  return (
    <>
      <div className='text-center'>
        <div className='fs-1 my-5 ms-4 animateanimated animatezoomIn animate__slower'>
          <Typical
            steps={['Projects ...', 2500, 'Javascript ...', 1000, 'Html & Css ...', 1000]}
            loop={Infinity}
            wrapper="p"
          />
        </div>
      </div>

      <div id='carouselExampleCaptions' className='carousel slide' data-bs-ride='carousel'>
        <div className='carousel-indicators'>
          <button type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='0' className='active'
            aria-current='true' aria-label='Slide 1'></button>
          <button type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='1'
            aria-label='Slide 2'></button>
          <button type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='2'
            aria-label='Slide 3'></button>
        </div>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <div className='card mx-auto' style={{ width: '400px' }}>
              <img src={imge} className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>Bootcamp</h5>
                <p className='card-text'>This is a model for Bootcamp Website </p>
                <Link to="https://itafm.github.io/bootcamp/" className="btn btn-primary">View Project</Link>
              </div>
            </div>
          </div>
          <div className='carousel-item'>
            <div className='card mx-auto' style={{ width: '400px' }}>
              <img src={img} className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>github</h5>
                <p className='card-text'>This is a model for website</p>
                <Link to="https://itafm.github.io/github-search-user-api-master/" className="btn btn-primary">View Project</Link>
              </div>
            </div>
          </div>
          <div className='carousel-item'>
            <div className='card mx-auto' style={{ width: '400px' }}>
              <img src={image} className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title '>Maquette</h5>
                <p className='card-text'>This is a Maquette HTML CSS</p>
                <Link to="https://itafm.github.io/maquette/" className="btn btn-primary">View Project</Link>
              </div>
            </div>
          </div>

        </div>
        <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleCaptions'
          data-bs-slide='prev'>
          <span className='carousel-control-prev-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleCaptions'
          data-bs-slide='next'>
          <span className='carousel-control-next-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </>
  )
}

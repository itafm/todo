import React from 'react'
import { Link } from 'react-router-dom'

const Liste = (props) => {
  const { users } = props
  return (
    <>
      <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
        <div className="carousel-inner">
          {users.map((user, index) => (
            <div className={`carousel-item ${index === 0 ? 'bg-dark' : 'active'}`} key={user.id}>
              <div className='w-100  p-5'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                  <div className="col">
                    <div className="card caerds bg-danger mb-3 p-2">
                      <div className="text-center align-items-center">
                        <div className="">
                          <h1 className="card-title text-center text-light">{user.name}</h1>
                          <div className="">
                            <img src={user.img} className="img-fluid  rounded-start project-img card-img-top" alt="..." />
                          </div>
                        </div>
                        <div className="">
                          <div className="card-body" key={user.id}>
                            <a href={user.link} target="_blank" rel="noreferrer" className="btn shadow btn-danger">
                              View project
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Liste
import React from 'react'
import './About.css'
import about from "../image/5130627 (1).jpg"
export const About = () => {
  return (
    <>
      <div className='container' >
        <div className="row">
          <div className="col-md-6 text-light mt-5">
            <h1>About Me</h1>
            <h3>Developer & Professional Coder</h3>
            <p>I am front-end web developer. I can provide clean code and pixel perfect design. i also make the website more & more interactive with web animations.! can provide clean codeand pixel perfect design.I also make the web site more & more interactive with web animations.A responsive design makes your website accessible to all users,regardless of their device </p>
            <button>Let's Talk</button>

          </div>
          <div className="col-md-6 mt-5 ">
            <img src={about} className='rounded ' alt="" width={446} height={446} />
          </div>
        </div>
      </div>

    </>
  )
}

import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import imag from "../image/Email campaign-pana.svg"
export const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleChangeName(e) {
    setName(e.target.value)
  }
  function handleChangeEmail(e) {
    setEmail(e.target.value)
  }
  function handleChangeMessage(e) {
    setMessage(e.target.value)
  }
  function submit(e) {
    e.preventDefault();
    let data = {
      "to_name": name,
      "to_email": email,
      "message": message
    }
    emailjs.send("service_o5vzliz", "template_ujw9cjn", data, "RCwEWjqZAW_Eh6r9c").then(() => {

      // lorsque ca marche 
      toast.success('Successfully toasted!')
      setName("")
      setEmail("")
      setMessage("")
    }).catch(() => {
      //lorsque ca ne marche pas 
      toast.error("This didn't work.")

    }
    )
  }
  return (
    <>
      <div className="container">
        <div className="row mt-5 ">
          <div className="col-md-6 md-3">
            <div className="card">
              <h5 className="card-header">Contact us</h5>

              <div className="card-body p-3">
                <form onSubmit={submit}>
                  <div className="form-group mb-3">
                    <label htmlFor="name">
                      Your Name : <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      className="form-control shadow-sm"
                      id="name"
                      placeholder=" Entre your full Name"
                      onChange={handleChangeName}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="email">
                      Your Email : <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      className="form-control shadow-sm"
                      id="email"
                      placeholder=" Entre your email address"
                      onChange={handleChangeEmail}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="message">
                      Your Message : <span className="text-danger">*</span>
                    </label>
                    <textarea
                      type="email"
                      rows="5"
                      value={message}
                      className="form-control shadow-sm"
                      id="message"
                      placeholder="  Your message her..."
                      onChange={handleChangeMessage}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <button className="btn btn-dark w-100">Send message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card p-1">
              <img src={imag} alt="" width={446} height={446} />
            </div>
          </div>
        </div>
      </div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>
  )
}

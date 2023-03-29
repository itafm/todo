
import React, { useRef } from 'react'

const AddTask = () => {

    const nameRef = useRef("");
    const titleRef = useRef("")
    const handleSubmit = e => {

        e.preventDefault()
        console.log(nameRef.current.value);
    }
    return (


        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <div className='card mt-5 shadow-sm'>
                        <div className='card-header'>
                            <h6 ref={titleRef}>Ajouter une nouvelle tache</h6>
                        </div>
                        <div className='card-body'>
                            <form onSubmit={handleSubmit}>
                                <div className='form-group mb-3'>
                                    <label htmlFor="task">Nom de la tache</label>
                                    <input ref={nameRef} type="text" id='task' className='form-control' placeholder='Entrer votre tache' />
                                </div>
                                <div className='form-group'>
                                    <button className='btn btn-dark w-100'>Sauvegarder</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AddTask
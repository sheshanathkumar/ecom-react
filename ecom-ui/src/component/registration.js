import { useState } from 'react';
import Register from './Register';
import Login from './login';
import './style.css'
function Registration() {


    const [currentPage, setCurrentPage] = useState(<Login />);

    const showLogin = () => {
        setCurrentPage( <Login /> )
    } 

    const showRegistration = () => {
        setCurrentPage( <Register /> )
    }


    return (
        <>

            <div className='container square-box d-flex justify-content-center align-item-center'  >


                <div className='login-container' >
                    <div className="btn-group btn-width  " role="group">
                        <button type="button" className="btn btn-border" onClick={showLogin}> <h3> Login </h3> </button>
                        <button type="button" className="btn btn-border" onClick={showRegistration}> <h3> Registration</h3></button>
                    </div>

                    <div>{currentPage}</div>

                </div>

            </div>
        </>
    )

}

export default Registration;
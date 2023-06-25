import React from 'react'

export default function Register() {
    return (

        <form>
            <div className="form-floating my-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required />
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
                <input type="password" className="form-control" id="pswd" placeholder="Password" required />
                <label htmlFor="forPswd">Password</label>
            </div>

            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="confirmPswd" placeholder="Password" required />
                <label htmlFor="forConfirmPswd">Confirm Password</label>
            </div>

            <input className="form-check-input my-3" type="checkbox" value="" id="adminlogin" />
                    <label className="form-check-label my-3 mx-2 " htmlFor="adminlogincheck">
                        <p style={{"fontWeight": "100", "fontSize":"15px"  }}>Admin Role</p>
                    </label>

            <div className='d-flex justify-content-center' >
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>

        </form>


    )
}

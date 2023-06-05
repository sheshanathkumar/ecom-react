import React from 'react'

export default function Register() {
    return (

        <form>
            <div class="form-floating my-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required />
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required />
                <label for="floatingPassword">Password</label>
            </div>

            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingPassword" placeholder="Password" required />
                <label for="floatingPassword">Confirm Password</label>
            </div>
            <div className='d-flex justify-content-center' >
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>

        </form>


    )
}

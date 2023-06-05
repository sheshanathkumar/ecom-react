

function Login() {

    return (

        <form>
            <div className='justify-content-center my-3' >
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required />
                    <label for="floatingPassword">Password</label>
                </div>
                <div className='d-flex justify-content-center' ><button type="submit" class="btn btn-success my-3 "> Login</button></div>

            </div>
        </form>

    )

}

export default Login;
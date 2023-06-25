import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { user } from "../asset/appdata";


function Login() {

    console.log( user);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [check, setCheck] = useState()
    const navigate = useNavigate();

    console.log(check)

    const loginUser = () => {

        let userName = email;
        let userPswd = password;
        let adminCheck = check;

        if (userName === user.username && userPswd === user.password && adminCheck === true) {
            navigate("/admin")
        } else if (userName !== user.username) {
            window.alert("Wrong Username")
        } else if (userPswd !==  user.password ) {
            window.alert("Wrong Password! This password is being used by BasuBhoi!")
        } else {
            navigate("/dashboard")
        }
        
    }

    return (
        <>

            <form>
                <div className='justify-content-center my-3' >
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="floatingInput">Username</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="pswdId" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                        <label htmlFor="forPswd">Password</label>
                    </div>

                    <input className="form-check-input my-3" type="checkbox" id="adminlogin" value={check} onChange={(e) => setCheck(e.currentTarget.checked)} />
                    <label className="form-check-label my-3 mx-2" htmlFor="adminlogincheck">
                        <p style={{ "fontWeight": "300", "fontSize": "15px" }}>Admin Login</p>
                    </label>

                    <div className='d-flex justify-content-center' onClick={loginUser} ><button type="submit" className="btn btn-success my-3 "> Login</button></div>

                </div>
            </form>

            
        </>
    )

}

export default Login;
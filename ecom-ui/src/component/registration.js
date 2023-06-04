import '../App.css';

function Registration() {

    return (
        <>

            <div className='local-container'>


                <div className="input-group">
                    <span className="input-group-text" id="basic-addon1">Username</span>
                    <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1" />
                </div>

                <div className="input-group">
                    <span className="input-group-text" id="basic-addon1">Password</span>
                    <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1" />
                </div>

            </div>
        </>
    )

}

export default Registration;
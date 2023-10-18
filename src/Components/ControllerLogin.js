import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {actionCreators} from "../Components/Store/index"
const ControllerLogin = () => {
    let [credentials, setCredentials] = useState({
        name:'',
        email: '',
        password: ''
    })
    
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const handleSubmit = async (event) => {
        event.preventDefault();
        const localhost = 'http://localhost:5000'
        const URL = (`${localhost}/api/controller/userlogin`)
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        })
        const json = await response.json();
        console.log(json);
        
        if(json.success){
            dispatch(actionCreators.storeToken(json.token))
            // localStorage.setItem('token',json.token)
            navigate('/controller')
        }
        
       
        setCredentials({
            email: '',
            password: ''
        });
    }

    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value });
        console.log(credentials)
    }


    return (
        <div className='mt-3'>
            <h2> User Login </h2>
            <form onSubmit={handleSubmit} style={{marginTop:"35px"}}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className='form-control' id="email" name="email" value={credentials.email} onChange={onChange}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}


export default ControllerLogin


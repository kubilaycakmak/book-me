import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styles from './Register.module.scss'
const Register = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [department, setDepartment] = useState({title: "Web and Mobile App Development", value: "wmad"});
    const [options, setOptions] = useState(
        [
            {title: "Web and Mobile App Development", value: "wmad"},
            {title: "UI/UX Design", value: "uiux"},
            {title: "Digital Marketing", value: "dmarketing"},
            {title: "Network And System Solutions", value: "nasss"}, 
            {title: "Customer Relations specialist", value: "crs"},
            {title: "Hospitality Management", value: "hm"},
            {title: "Customer Relations specialist", value: "crs"}, 
            {title: "International Business Management", value: "ibm"}, 
        ]);
        // <option value="uiux">UI/UX</option>
        // <option value="marketing">Marketing</option>
    const [message, setMessage] = useState();
    const navigate = useNavigate();
    const handleSubmitRegister = (e) => {
        e.preventDefault();
        if(username === "" || password === "" || fullName === ""){
            setMessage({type: "danger", message: "Please fill all the fields"});
        }else{
            axios.post(process.env.REACT_APP_BACKEND_URL + "/auth/register", {
                fullName,
                username,
                password,
                department
            }).then((res) => {
                navigate("/login");
            }).catch((err) => {
                console.log(err);
                setMessage({type: "danger", message: "An error occured"});
            });
        }
    }

  return (
    <div className={styles.register}>
        {message && <div className={`alert alert-${message.type}`} role="alert"> {message.message} </div>}
        <form onSubmit={(e) => handleSubmitRegister(e)} className={styles.registerForm}>
        <h3 className='mb-5'>Register</h3>
            <input onChange={(e) => setFullName(e.target.value)} placeholder='Full Name' />
            <input onChange={(e) => setUsername(e.target.value)} placeholder='username'/>
            <input onChange={(e) => setPassword(e.target.value)} placeholder='password'/>
            <select id="department" name="department">
                {/* <option value="wmad">WMAD</option>
                <option value="uiux">UI/UX</option>
                <option value="marketing">Marketing</option> */}
                {
                    options.map((item, index) => {
                        return (<option onClick={() => setDepartment(item)} key={index} value={item.value}>{item.title}</option>)
                    })
                }
            </select>
            <button type='submit'>Register</button>
        </form>
        <Link to="/login" >You already have an account please Sign in</Link>
    </div>
  )
}

export default Register
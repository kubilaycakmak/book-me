import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.scss'
import axios from 'axios';
const Login = () => {

  const [username, setUsername] = useState("kubilaycakmak");
  const [password, setPassword] = useState("123456");
  const [message, setMessage] = useState();
  const navigate = useNavigate();

  const handleSubmitLogin = (e) => {
      e.preventDefault();

        if(username, password) {  
          axios.post(process.env.REACT_APP_BACKEND_URL + "/auth/login", {
            username,
            password
          }).then((res) => {
            localStorage.setItem("user", JSON.stringify(res.data.user));
            navigate("/profile");
          }).catch((err) => {
            console.log(err);
            setMessage({type: "danger", message: "An error occured"});
          });
        }
  }

  useEffect(() => {
    if(localStorage.getItem("user")) {
      navigate("/profile");
    }
  }, [localStorage])
  

  return (
    <div className={styles.login}>
    {message && <div className={`alert alert-${message.type}`} role="alert"> {message.message} </div>}
    <form onSubmit={(e) => handleSubmitLogin(e)} className={styles.loginForm}>
        <h3 className='mb-5'>Login</h3>
        <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username'/>
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password'/>
        <button type='submit' >Login</button>
    </form>
    <Link to="/register" >Create an account</Link>
</div>
  )
}

export default Login
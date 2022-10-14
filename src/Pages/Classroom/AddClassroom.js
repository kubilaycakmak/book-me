import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styles from './AddClassroom.module.scss'
import { useNavigate } from 'react-router-dom';
const AddClassroom = () => {

  const [title, setTitle] = useState("");
  const [countOfStudents, setCountOfStudents] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [now, setNow] = useState(new Date());
  const [link, setLink] = useState("");
  const [slots, setSlots] = useState([]);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")).username);
  }, [])
  

  const handleAddClassroom = (e) => {
    e.preventDefault();
    if(title, countOfStudents) {
      axios.post(process.env.REACT_APP_BACKEND_URL + "/classroom/add", {
        user,
        title,
        seat: countOfStudents,
        link,
        now,
        slots,
      }).then((res) => {
        console.log(res);
        navigate('/profile');
      }).catch((err) => {
        console.log(err);
      });
    }else{
      alert("Please fill the required inputs!")
    }
  }

  return (
    <div className={styles.addClass}>
      <form onSubmit={(e) => handleAddClassroom(e)} className={styles.addClassForm}>
        <h3 className='mb-5'>Create new class</h3>
        <input onChange={(e) => setTitle(e.target.value)} placeholder='Title *'/>
        <input type="number" maxLength={2} onChange={(e) => setCountOfStudents(e.target.value)} placeholder='Count of Student *'/>
        <button type='submit' >Create</button>
        <button onClick={() => navigate("/profile")}>Back</button>
    </form>
    </div>
  )
}

export default AddClassroom
import React, {useEffect, useState} from 'react'
import styles from './Profile.module.scss'
import SectionCustom from "../../components/section/SectionCustom";
import SelectClassEditable from "../../components/select/SelectClassEditable";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {

  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [classrooms, setClassrooms] = useState([]);

  const logoutHandler = () => {
    localStorage.removeItem('user');
    navigate('/login');
  }

  const getClassroomsById = (id) => {
    axios.get(process.env.REACT_APP_BACKEND_URL + "/classroom/" + id).then((res) => {
      console.log(res);
      setClassrooms(res.data.classroom);
    }).catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    if(localStorage.getItem('user')) {
      var decodedUser = JSON.parse(localStorage.getItem("user"));
      setUser(decodedUser);
      getClassroomsById(decodedUser.username);
    }else{
      navigate('/login');
    }
    
  }, [localStorage])

  return (
    <div className={styles.profile}>
      {/* <h2>Welcome to Presentation booking system</h2> */}
      <SectionCustom text={"You"} element={<button onClick={logoutHandler} className={styles.logoutButton}>Logout</button>} />
      {user && <div className={styles.profileInformation}>
        <h2>Welcome, {user && user.fullName}</h2>
        <h6 className='mt-2'><b>Username:</b> {user && user.username}</h6>
        <h6 className='mt-2'><b>Department:</b> {user && user.department && user.department.title}</h6>
      </div>
      }
      {/* <button>Add new Class</button> */}
      <SectionCustom text={"Your Classes"} element={classrooms.length != 0 && <button className={styles.logoutButton} onClick={() => navigate('/add-class')}>Add Class</button>}/>
      {classrooms.length == 0 && <h3 className={styles.noClass}>You don't have any class yet 🙂</h3>}
      {classrooms.length == 0 && <button style={{marginTop: "24px"}} className={styles.logoutButton} onClick={() => navigate('/add-class')}>Add Class</button>}
      <SelectClassEditable
        classes={classrooms}
      />
    </div>
  )
}

export default Profile
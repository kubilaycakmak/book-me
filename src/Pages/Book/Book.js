import React from 'react'
import Slots from "../../components/slot/Slots";
import Information from "../../components/information/Information";
import SectionCustom from "../../components/section/SectionCustom";
import { useState, useEffect } from "react";
import { generateFromString } from "generate-avatar";
import axios from "axios";
import { useParams } from 'react-router-dom';
import styles from './Book.module.scss'

const Book = () => {
    const [slot, setSlot] = useState(null);
    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState(null);
    const [books, setBooks] = useState([]);
    const [messages, setMessages] = useState([]);
    const [list, setList] = useState([]);
    const { id } = useParams();
    const [isActive, setIsActive] = useState(true);

    const onSubmitInformation = (val, image) => {
        setName(val);
        setAvatar(`data:image/svg+xml;utf8,${generateFromString(val)}`);
    };
    const onSubmitSlot = (val) => {
      setSlot(val);
    };
    const onSubmitHandlerButton = () => {
      if (name && slot >= 0) {
        axios
          .post(`${process.env.REACT_APP_BACKEND_URL}/classroom/slots`, {
            id,
            name: name,
            slot: slot + 1,
            avatar: avatar,
          })
          .then((res) => {
            setMessages([{message: res.data.message, type: "success"}]);
            getBookById(id);
          })
          .catch((err) => {
            setMessages([{message: err.response.data.message, type: "danger"}]);
          });
      }
    };
    const getBookById = (id) => {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/classroom/slots/${id}`)
        .then((res) => {
          let tmp = generateNewObjectArray(res.data.classroom.seat);
          mergeArrays(tmp, res.data.slots);
          setList(tmp);
          console.log(res);
        })
        .catch((err) => {
          setMessages([{message: "Sorry, this classroom is not found", type: "danger"}]);
          setIsActive(false)
          console.log(err);
        });
    };
    const mergeArrays = (arr1, arr2) => {
      return arr1.forEach((item) => {
        arr2.forEach((newItem) => {
          if (item.slot == newItem.slot) {
            item.name = newItem.name;
            item.avatar = newItem.avatar;
          }
        });
      });
    };
    const generateNewObjectArray = (seats) => {
      let arr = [];
      for (let i = 0; i < seats; i++) {
        arr.push({ id: i, name: "", slot: i + 1, avatar: "", code: "" });
      }
      return arr;
    };
    useEffect(() => {
        getBookById(id);
    }, []);

    useEffect(() => {
      timeOut();
    }, [messages]);

    const timeOut = () => {
      setTimeout(() => {
        setMessages([]);
        clearTimeout();
      }, 4000);

    }
    
  return (
    <>
    {messages && messages.map((message, index) => (
        <div key={index} className={`alert alert-${message.type}`} role="alert">
          {message.message}
        </div>
      ))}
      {isActive && (
        <div className={styles.outer}>
        <SectionCustom text={"1 - Select a slot"} />
        <Slots
          onSubmitHandler={onSubmitSlot}
          selected={slot}
          avatar={avatar}
          books={books}
          list={list}
        />
        <SectionCustom text={"2 - Type your name"} />
        <Information
          onSubmitHandler={onSubmitInformation}
          image={avatar}
          onSubmitHandlerButton={onSubmitHandlerButton}
        />
        </div>
      )}
    </>
  )
}

export default Book
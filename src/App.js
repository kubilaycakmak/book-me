import "./App.css";
import Slots from "./components/slot/Slots";
import Avatar from "./components/avatar/Avatar";
import Information from "./components/information/Information";
import { useState, useEffect } from "react";
import SectionCustom from "./components/section/SectionCustom";
import { generateFromString } from "generate-avatar";
import SelectClass from "./components/select/SelectClass";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [slotList, setSlotList] = useState([...Array(30)]);
  const [slot, setSlot] = useState(null);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [code, setCode] = useState("m20922");
  const [books, setBooks] = useState([]);
  const [list, setList] = useState([]);

  const onSubmitInformation = (val, image) => {
    setName(val);
    setAvatar(`data:image/svg+xml;utf8,${generateFromString(val)}`);
  };

  const onSubmitSlot = (val) => {
    setSlot(val);
  };

  const onSubmitHandlerButton = () => {
    // console.log("hello");
    if (name && slot) {
      console.log(name, slot);
      axios
        .post("http://localhost:5001/book", {
          name: name,
          slot: slot + 1,
          avatar: avatar,
          code: code,
        })
        .then((res) => {
          alert(res.data.message);
          getBooks(code);
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    }
  };

  const getBooks = (code) => {
    axios
      .get(`http://localhost:5001/book?code=${code}`)
      .then((res) => {
        if (res.data.reservation.length != 0) {
          let tmp = generateNewObjectArray();
          mergeArrays(tmp, res.data.reservation);
          console.log(tmp);
          setList(tmp);
        } else {
          setList(generateNewObjectArray());
        }
        // console.log(list);
      })
      .catch((err) => {
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

  const selectClassHandler = (val) => {
    setCode(val);
    getBooks(val);
  };

  const resetBooks = () => {
    axios
      .delete("http://localhost:5001/book")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const generateNewObjectArray = () => {
    let arr = [];
    for (let i = 0; i < 30; i++) {
      arr.push({ id: i, name: "", slot: i + 1, avatar: "", code: "" });
    }
    return arr;
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="App">
      <button onClick={resetBooks}>Reset</button>
      <SectionCustom text={"1 - Select your class"} />
      <SelectClass
        callback={selectClassHandler}
        classes={[
          { name: "M2-0922", code: "m20922" },
          { name: "M1-0922", code: "m10922" },
          { name: "M1-0921", code: "m10921" },
        ]}
      />
      <SectionCustom text={"2 - Select a slot"} />
      <Slots
        onSubmitHandler={onSubmitSlot}
        selected={slot}
        avatar={avatar}
        books={books}
        list={list}
      />
      <SectionCustom text={"3 - Type your name"} />
      <Information
        onSubmitHandler={onSubmitInformation}
        image={avatar}
        onSubmitHandlerButton={onSubmitHandlerButton}
      />
    </div>
  );
}

export default App;

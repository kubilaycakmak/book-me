import "./App.css";
import Book from './Pages/Book/Book';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Routes
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Pages/Login/Login";
import Register from './Pages/Login/Register'
import Profile from './Pages/Profile/Profile'
import SpinnerOfDoom from './components/spinner/SpinnerOfDoom'
import { useEffect, useState } from "react";
import AddClassroom from "./Pages/Classroom/AddClassroom";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/" element={<Login />} ></Route>
        <Route path="/register" element={<Register />} ></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/add-class" element={<AddClassroom />}></Route>
        <Route path="/book/:id" element={<Book />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </>
    )
  );

  useEffect(() => {
    var decodedUser = JSON.parse(localStorage.getItem("user"));
    // if(decodedUser){
    //   router.navigate("/profile");
    // }else{
    //   router.navigate("/login");
    // }
  }, [localStorage])
  

  return (
    <div className="App">
      <RouterProvider router={router} fallbackElement={<SpinnerOfDoom />} />
      {/* <Login /> */}

      {/* <div>
      {messages.map((variant) => (
        <Alert key={variant} variant={variant.type}>
          {variant.message}
        </Alert>
      ))}
      </div> */}

      {/* <button onClick={resetBooks}>Reset</button> */}

      {/* <SectionCustom text={"1 - Select your department"} />
      <SelectClass
        code={department}
        callback={selectDepartmentHandler}
        classes={[
          { name: "WMAD", code: "wmad" },
          { name: "UI/UX", code: "uiux" },
          { name: "Marketing", code: "marketing" },
        ]}
      />
      <SectionCustom text={"2 - Select your class"} />
      <SelectClass
      code={code}
        callback={selectClassHandler}
        classes={[
          { name: "M2-0922", code: "m20922" },
          { name: "M1-0922", code: "m10922" },
          { name: "M1-0921", code: "m10921" },
        ]}
      /> */}
      
      {/* <SectionCustom text={"3 - Select a slot"} />
      <Slots
        onSubmitHandler={onSubmitSlot}
        selected={slot}
        avatar={avatar}
        books={books}
        list={list}
      />
      <SectionCustom text={"4 - Type your name"} />
      <Information
        onSubmitHandler={onSubmitInformation}
        image={avatar}
        onSubmitHandlerButton={onSubmitHandlerButton}
      /> */}
    </div>
  );
}

export default App;

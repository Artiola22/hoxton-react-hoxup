import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import CreateUser from "./Pages/CreateUser";


import Login from "./pages/Login";
import Main from "./pages/Main";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  const [modal, setModal] = useState('')
  const [users, setUsers] = useState([])
  const [converstaion, setConversation] = useState([])


  function getUsersFromServer(){
    fetch(`http://localhost:4000/users`).then(resp => resp.json())
    .then(userFromServer => setUsers(userFromServer))
  }
  useEffect( getUsersFromServer, [])

  function getConversationFromServer(){
    fetch(`http://localhost:4000/conversations`).then(resp => resp.json())
    .then((converstaionFromServer => setConversation(converstaionFromServer)) )
  }
  useEffect(getConversationFromServer, [])

  return (

    <div className="app">
      {
        modal === "add"? <CreateUser />: null
      }
    <Routes>
      <Route index element={<Navigate replace to='/login' />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/logged-in' element={<Main />}/>
      <Route path='/logged-in/:conversationId' element={<Main />}/>
      <Route path='*' element={<PageNotFound />}/>
    </Routes>
    
    </div>
  )
  
  
}

import { useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import CreateUser from "./pages/CreateUser";

import Login from "./pages/Login";
import Main from "./pages/Main";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  const [modal, setModal] = useState("");
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [conversation, setConversation] = useState([]);
  const navigate = useNavigate();

  function logIn(user) {
    // Set user is state as the current user
    setCurrentUser(user);
    // Navigate to the main page
    navigate("/logged-in");
  }

  useEffect(() => {
    fetch('http://localhost:4000/users')
    .then(resp => resp.json())
    .then(users => setUsers(users))
  }, [])

  function logOut() {
    setCurrentUser(null);
  }
  function getUsersFromServer() {
    fetch(`http://localhost:4000/users`)
      .then((resp) => resp.json())
      .then((userFromServer) => setUsers(userFromServer));
  }
  useEffect(getUsersFromServer, []);

  function getConversationFromServer() {
    fetch(`http://localhost:4000/conversations`)
      .then((resp) => resp.json())
      .then((conversationFromServer) =>
        setConversation(conversationFromServer)
      );
  }
  useEffect(getConversationFromServer, []);

  return (
    <div className="app">
      {modal === "add" ? <CreateUser /> : null}
      <Routes>
        <Route index element={<Navigate replace to="/login" />} />
        <Route
          path="/login"
          element={<Login users={users} setModal={setModal} logIn={logIn}  />}
        />

        <Route
          path="/logged-in"
          element={
            <Main
              conversation={conversation}
              currentUser={currentUser}
              logOut={logOut}
              users={users}
            />
          }
        />
        <Route
          path="/logged-in/:conversationId"
          element={<Main currentUser={currentUser} logOut={logOut} users={users}/>}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>


      {/* {modal === 'new-user' ? (
        <div className='modal-wrapper'>
          <div className='modal'>
            <h1>New user modal</h1>
          </div>
        </div>
      ) : null}

      {modal === 'something-else' ? (
        <div className='modal-wrapper'>
          <div className='modal'>
            <h1>Something else</h1>
          </div>
        </div>
      ) : null} */}
    </div>
  );
}

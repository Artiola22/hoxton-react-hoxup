import { useState } from "react";
import UserLoginItem from "../components/UserLoginItem";

function Login({users, logIn, setModals}) {
  return (
    <div className="main-wrapper login">
      <section className="login-section">
        <h2>Choose your user!</h2>
        <ul>
          {users.map((user) => (
            <UserLoginItem key={user.id} user={user} logIn={logIn} />
          ))}

          <li>
            <button className="user-selection">
              <h3>+ Add a new user</h3>
            </button>
          </li>
        </ul>
      </section>
    </div>
  );
}
export default Login;

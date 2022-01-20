import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

function CreateUser(props) {
  // create state
  function addUser(firstName, lastName , phoneNumber){

    // useEffect(() => {
      fetch(`http://localhost:4000/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber,
          avatar: `https://avatars.dicebear.com/api/avataaars/${firstName}${lastName}.svg`
        })
      }).then(resp=> resp.json())
      
    // }, [])
    
  }


  return (
<div className="main-wrapper login">
    <section className="modal-wrapper">
      <div className="modal">
        <button onClick={()=>{
         props.setModal('')
        }
        }>
          X</button>
          <h2>Enter your details here</h2>

          <form action="">
            <label>
              First Name
              <input type="text" className="firstname" name="firstname" />
            </label>

            <label>
              Last Name
              <input type="text" className="lastname" name="lastname" />
            </label>

            <label>
              Phone Number
              <input type="number" className="phone" name="phone" />
            </label>
            <input type="submit"  className="submit" value={"CREATE USER"}/>
          </form>
        
      </div>
    </section>
    </div>
  );
}
export default CreateUser;

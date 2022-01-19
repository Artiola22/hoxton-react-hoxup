import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

function Main (){
    const [conversation, setConversation] = useState([])
     const params = useParams()

    // if user is not sign in redirect to login page
const navigate = useNavigate()


 useEffect(() => {
        // if(params.conversation.Id){
        //  //  fetch conversation   
        // }
        // <button onClick={() => navigate('/')}>Back</button>
    }, [])


    return (
        <div className="main-wrapper">
        
        <aside>
    {/* <!-- Side Header --> */}
    <header className="panel">
      <img
        className="avatar"
        width="50"
        height="50"
        src="https://robohash.org/2"
        alt=""
      />
      <h3>Tin Man</h3>
    </header>
{/* 
    <!-- Search form --> */}
    <form className="aside__search-container">
      <input
        type="search"
        name="messagesSearch"
        placeholder="Search chats"
        value=""
      />
    </form>

    <ul>
  {/* <!-- This first item should always be present --> */}
  <li>
    <button className="chat-button">
      <div><h3>+ Start a new Chat</h3></div>
    </button>
  </li>
  {/* <!--  --> */}
  <li>
    <button className="chat-button">
      <img
        className="avatar"
        height="50"
        width="50"
        alt=""
        src="https://robohash.org/2"
      />
      <div>
        <h3>Tin Man</h3>
        <p>Last message</p>
      </div>
    </button>
  </li>
  <li>
    <button className="chat-button">
      <img
        className="avatar"
        height="50"
        width="50"
        alt=""
        src="https://robohash.org/3"
      />
      <div>
        <h3>Carl T-800</h3>
        <p>Last message</p>
      </div>
    </button>
  </li>
</ul>
  </aside>

{/* <!-- Main Chat Section --> */}
{params.conversationId ? (
    <main className="conversation">
    {/* <!-- Chat header --> */}
    <header className="panel"></header>
    <ul className="conversation__messages">
  <li className="outgoing">
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus excepturi
      non odit quisquam et assumenda suscipit maxime officiis repellat possimus!
      Soluta illum rerum eligendi labore ut nemo quod voluptates ad.
    </p>
  </li>

  {/* <!-- Outgoing messages are messages sent by the current logged in user --> */}
  <li className="outgoing"><p>Lorem ipsum...</p></li>
  {/* <!--  -->

  <!-- This one doesnt belong to the current logged in user --> */}
  <li>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus excepturi
      non odit quisquam et assumenda suscipit maxime officiis repellat possimus!
    </p>
  </li>

  {/* <!--  --> */}
  <li className="outgoing"><p>Some test message</p></li>
  <li className="outgoing"><p>more messagesss!!!</p></li>
  <li className="outgoing"><p>more messagesss!!!</p></li>
  <li className="outgoing">
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus excepturi
      non odit quisquam et assumenda suscipit maxime officiis repellat possimus!
      Soluta illum rerum eligendi labore ut nemo quod voluptates ad.Lorem ipsum
      dolor sit amet consectetur, adipisicing elit. Natus excepturi non odit
      quisquam et assumenda suscipit maxime officiis repellat possimus! Soluta
      illum rerum eligendi labore ut nemo quod voluptates ad.Lorem ipsum dolor
      sit amet consectetur, adipisicing elit. Natus excepturi non odit quisquam
      et assumenda suscipit maxime officiis repellat possimus! Soluta illum
      rerum eligendi labore ut nemo quod voluptates ad.Lorem ipsum dolor sit
      amet consectetur, adipisicing elit. Natus excepturi non odit quisquam et
      assumenda suscipit maxime officiis repellat possimus! Soluta illum rerum
      eligendi labore ut nemo quod voluptates ad.Lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Natus excepturi non odit quisquam et
      assumenda suscipit maxime officiis repellat possimus! Soluta illum rerum
      eligendi labore ut nemo quod voluptates ad.Lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Natus excepturi non odit quisquam et
      assumenda suscipit maxime officiis repellat possimus! Soluta illum rerum
      eligendi labore ut nemo quod voluptates ad.Lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Natus excepturi non odit quisquam et
      assumenda suscipit maxime officiis repellat possimus! Soluta illum rerum
      eligendi labore ut nemo quod voluptates ad.
    </p>
  </li>
  <li>Whats up?</li>
  <li className="outgoing">Whats up?</li>
</ul>
    <ul className="conversation__messages"></ul>
{/* 
    <!-- Message Box --> */}
    <footer>
      <form className="panel conversation__message-box">
        <input
          type="text"
          placeholder="Type a message"
          
          value=""
        /><button type="submit">
          {/* <!-- This is the send button --> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              fill="currentColor"
              d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"
            ></path>
          </svg>
        </button>
      </form>
    </footer>
  </main>
) : null}
  
  </div>
    )
}
export default Main
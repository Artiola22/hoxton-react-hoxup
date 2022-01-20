import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Main({ currentUser, logOut , users}) {
  const [currentConversation, setCurrentConversation] = useState(null);
  const [conversations, setConversations] = useState([]);

  const params = useParams();

  
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser === null) navigate("/");
  }, [currentUser, navigate]);

  useEffect(() => {
    if (params.conversationId) {
        fetch(`http://localhost:4000/conversations/${params.conversationId}?_embed=messages`)
        .then(resp => resp.json())
        .then(conversation => setCurrentConversation(conversation))
      //  //  fetch conversation
    }
  }, [params.conversationId]);
  useEffect(() => {
      if(currentUser === null) return
    fetch(`http://localhost:4000/conversations?userId=${currentUser.id}`)
    .then(resp => resp.json())
    .then(conversations => setConversations(conversations))

  }, [currentUser])

  if (currentUser === null) return <h1>Not signed in..</h1>;

  // <button onClick={() => navigate('/')}>Back</button>

  return (
    <div className="main-wrapper">
      <aside>
        {/* <!-- Side Header --> */}
        <header className="panel">
          <img
            className="avatar"
            width="50"
            height="50"
            src={currentUser.avatar}
            alt=""
          />
          <h3>{currentUser.firstName}</h3>
          <button onClick={() => logOut()}>Log OUT</button>
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
          <ul>
            <li>
              <button className="chat-button">
                <div>
                  <h3>+ Start a new Chat</h3>
                </div>
              </button>
            </li>
            {conversations.map( conversation => {
                const talkingToId = currentUser.id === conversation.userId ?
                conversation.participantId : conversation.userId

                const talkingToUser = users.find(user => user.id === talkingToId)
                return (
<li>
          <button className="chat-button" onClick={() => navigate(`/logged-in/${conversation.id}`)}>
            <img
              className="avatar"
              height="50"
              width="50"
              alt=""
              src={talkingToUser.avatar}
            />
            <div>
              <h3>{talkingToUser.firstName} {talkingToUser.lastName}</h3>
              <p>Last message</p>
            </div>
          </button>
        </li>
                )
          
     })}
            
           
          </ul>
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
                excepturi non odit quisquam et assumenda suscipit maxime
                officiis repellat possimus! Soluta illum rerum eligendi labore
                ut nemo quod voluptates ad.
              </p>
            </li>

            {/* <!-- Outgoing messages are messages sent by the current logged in user --> */}
            <li className="outgoing">
              <p>Lorem ipsum...</p>
            </li>
            {/* <!--  -->

  <!-- This one doesnt belong to the current logged in user --> */}
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
                excepturi non odit quisquam et assumenda suscipit maxime
                officiis repellat possimus!
              </p>
            </li>

            {/* <!--  --> */}
            <li className="outgoing">
              <p>Some test message</p>
            </li>
            <li className="outgoing">
              <p>more messagesss!!!</p>
            </li>
            <li className="outgoing">
              <p>more messagesss!!!</p>
            </li>
            <li className="outgoing">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
                excepturi non odit quisquam et assumenda suscipit maxime
                officiis repellat possimus! Soluta illum rerum eligendi labore
                ut nemo quod voluptates ad.Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Natus excepturi non odit quisquam
                et assumenda suscipit maxime officiis repellat possimus! Soluta
                illum rerum eligendi labore ut nemo quod voluptates ad.Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Natus
                excepturi non odit quisquam et assumenda suscipit maxime
                officiis repellat possimus! Soluta illum rerum eligendi labore
                ut nemo quod voluptates ad.Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Natus excepturi non odit quisquam
                et assumenda suscipit maxime officiis repellat possimus! Soluta
                illum rerum eligendi labore ut nemo quod voluptates ad.Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Natus
                excepturi non odit quisquam et assumenda suscipit maxime
                officiis repellat possimus! Soluta illum rerum eligendi labore
                ut nemo quod voluptates ad.Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Natus excepturi non odit quisquam
                et assumenda suscipit maxime officiis repellat possimus! Soluta
                illum rerum eligendi labore ut nemo quod voluptates ad.Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Natus
                excepturi non odit quisquam et assumenda suscipit maxime
                officiis repellat possimus! Soluta illum rerum eligendi labore
                ut nemo quod voluptates ad.
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
              <input type="text" placeholder="Type a message" value="" />
              <button type="submit">
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
  );
}
export default Main;

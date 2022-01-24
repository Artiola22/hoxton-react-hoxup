import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Conversation from "../components/Conversation";

function Main({ currentUser, logOut, users, setModal, modal }) {
  const [conversations, setConversations] = useState([]);

  const params = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser === null) navigate("/");
  }, [currentUser, navigate]);

  useEffect(() => {
    if (currentUser === null) return;
    fetch(`http://localhost:4000/conversations?userId=${currentUser.id}`)
      .then((resp) => resp.json())
      .then((conversations) => setConversations(conversations));
  }, [currentUser]);
  

  const usersIhaveNotTalkToYet = users.filter(user => {

if(currentUser && user.id === currentUser.id) return false

    for(const conversation of conversations ){
      if(conversation.userId === user.id) return false
      if(conversation.participantId === user.id) return false
    }
    return true
  })

  function createConversation (participantId){
    fetch('http://localhost:4000/conversations',{
      method: "POST",
      headers : {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        userId: currentUser.id ,
        participantId:  participantId
      })
    }).then(resp =>  resp.json())
    .then(newConversation => {
      setConversations([...conversations, newConversation])
      setModal('')
    })
  }

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
          />
        </form>

        <ul>
          {/* <!-- This first item should always be present --> */}
          <ul>
            <li>
              <button className="chat-button" onClick={() => {
                //display a start chat modal
              setModal('start-a-chat')
                //this modal shuould display all users i have no conversation jet

                //clicking on one of those users, should strat a conversation with them
              }}>
                <div>
                  <h3>+ Start a new Chat</h3>
                </div>
              </button>
            </li>
            {conversations.map((conversation) => {
              const talkingToId =
                currentUser.id === conversation.userId
                  ? conversation.participantId
                  : conversation.userId;

              const talkingToUser = users.find(
                (user) => user.id === talkingToId
              );
              return (
                <li key={conversation.id}>
                  <button
                    className="chat-button"
                    onClick={() => navigate(`/logged-in/${conversation.id}`)}
                  >
                    <img
                      className="avatar"
                      height="50"
                      width="50"
                      alt=""
                      src={talkingToUser.avatar}
                    />
                    <div>
                      <h3>
                        {talkingToUser.firstName} {talkingToUser.lastName}
                      </h3>
                      <p>Last message</p>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </ul>
      </aside>

      {/* <!-- Main Chat Section --> */}
      {params.conversationId ? (
        <Conversation currentUser={currentUser} />
      ) : null}


        {
          modal === 'start-a-chat' ? (
        <div className='modal-wrapper'>
            <div className='modal'>
                <button className='close-modal' onClick={() => {
                    setModal('')
                }}>X</button>
              <h1>Start a chat</h1>
              {
usersIhaveNotTalkToYet.length > 0 ? 
                <ul>
                {
                  usersIhaveNotTalkToYet.map(user => (
                    <li key={user.id}>
                  <button
                    className="chat-button"
                    
                    onClick={() => {
                      //clickling on one of those users
                      //should start a conversation with them
                      //how do we start a conversation 
                      //-create a conversation on server
                      //-update conversation on server
                      createConversation (user.id)
                    }}
                    >
                    <img
                      className="avatar"
                      height="50"
                      width="50"
                      alt=""
                      src={user.avatar}
                      />
                    <div>
                      <h3>
                        {user.firstName} {user.lastName}
                      </h3>
                      
                    </div>
                  </button>
                </li>
                    
                    ))
                }
              </ul>
          : (
          <p>No new person to talk to</p>
          )
                  }
            </div>
          </div>
          ) : null
        }
        </div>
            
        
    
  );
}
export default Main;

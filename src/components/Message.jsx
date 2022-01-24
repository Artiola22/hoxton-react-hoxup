function Message({ message, currentUser}){
    return(
        <li className={`${message.userId === currentUser.id ? 'outgoing' : "ingoing"}`}>
        <p>
          {message.messageText}
        </p>
      </li>
    )
}
export default Message
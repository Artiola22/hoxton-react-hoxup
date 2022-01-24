function Modal ({modal, setModal}){
    if(modal === '') return null

    if (modal === 'new-user'){
        return(
         <div className='modal-wrapper'>
              <div className='modal'>
                <h1>New user modal</h1>
                <button className='close-modal'>X</button>
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
            </div>
        )
    }
        
  
    
          
    
    
}
export default Modal
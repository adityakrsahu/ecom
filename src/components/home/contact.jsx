import React from 'react'
import '../../assets/style/index.css'

const contact = () => {
  return (
    <>
        <h1 className='common-heading'>Contact page </h1>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.4912166835497!2d-74.01122132065429!3d40.
            7072017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a16ed7869fd%3A0x57de4365c35a915b!2sGenius%20Computer
            %20Solutions%2C%20Inc.!5e0!3m2!1sen!2sin!4v1705398609801!5m2!1sen!2sin" 
            width="100%" height="400" 
            style={{ border:0 }}
            allowfullscreen="" 
            loading="lazy"
             referrerPolicy="no-referrer-when-downgrade">

          </iframe>

          <div className="container-form1">
            <div className="container-form">
              <center>
                <form action="" method='POST' className='contact-imputs'>
                  <input  type="text" placeholder='username' name='username' required autoComplete='off' />
                  <input type="email" placeholder='email' name='email' required autoComplete='off' />
                  <textarea placeholder='Enter you message' name="message"  cols="30" rows="10" required autoComplete='off'></textarea>
                  {/* <input type="submit" value="send" /> */}
                  <button className='bt' >send</button>
                </form>
              </center>
            </div>
          </div>
      
    </>
  )
}

  
export default contact;

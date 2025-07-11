import { useContext, useRef, useState } from "react";
import "./contact.css";
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../context";


function Contact() {

  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_yk3zp5b', 'template_5c1ubf4', formRef.current, '8OtLPJ1AYMbphb9Kb')
    .then((result) => {
        console.log(result.text);
        setDone(true);
    }, (error) => {
        console.log(error.text);
    });
  };

    return (
        <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">Let's discuss your project</h1>
            <div className="c-info">
              <div className="c-info-item">
                <img src="./img/phone.png" alt="" className="c-icon" />
                +234 8166 4606 49 / +234 9156 2187 46
              </div>
              <div className="c-info-item">
                <img className="c-icon" src="./img/email.png" alt="" />
                tobeferdinard@gmail.com
              </div>
              <div className="c-info-item">
                <img className="c-icon" src="./img/address.png" alt="" />
                Benin City, Edo state, Nigeria
              </div>
            </div>
          </div>
          <div className="c-right">
            <p className="c-desc">
              <b>What’s your story?</b> Get in touch. Always available for
              freelancing if the right project comes along. me.
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
              <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
              <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
              <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
              <button>Submit</button>
              {done && "Thank you..."}
            </form>
          </div>
        </div>
      </div>
    )
}


export default Contact;

import React from 'react';
import LiveChat from '../Components/LiveChat/LiveChat';

function Contact() {
  return (
    <div className='ContactCss'>
      <br />
      <br />
      <h1>Contato</h1>
      <br />
      <label>Ligue para nós</label>
      <br />
      <a href="tel:+5547991723891"><h2>(47) 99172-3891</h2></a>
      <br />
      <label>Envie-nos um email</label>
      <a href="mailto:caocalpapeis@gmail.com"><h2>caocalpapeis@gmail.com</h2></a>
      <br/>
      <h2>Fale Conosco!</h2>
      <LiveChat />
    </div>
  );
}

export default Contact;

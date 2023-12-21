import React, { useState, useEffect } from 'react';
import './LiveChat.css';

function LiveChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    description: '',
    agreement: false,
  });

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleFormChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  useEffect(() => {
    const filtered = messages.filter((message) =>
      message.text.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredMessages(filtered);
  }, [input, messages]);

  const sendMessageToEmailServer = async (formData) => {
    // Aqui você pode implementar a lógica para enviar o formulário para o servidor de e-mail
    // Pode usar fetch ou axios para fazer a requisição

    // Exemplo de estrutura do body para envio:
    // const response = await fetch('URL_DO_SERVIDOR', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // });

    // Implemente a lógica real de envio aqui
    // ...

    // Simulação de resposta do servidor de e-mail
    return { success: true, message: 'Mensagem enviada com sucesso!' };
  };

  const handleSendMessage = async () => {
    if (formData.name && formData.email && formData.phoneNumber && formData.agreement) {
      // Lógica para enviar o formulário para o servidor de e-mail
      const serverResponse = await sendMessageToEmailServer(formData);

      // Manipulação de mensagens e feedbacks baseados na resposta do servidor
      if (serverResponse.success) {
        const sentMessage = { text: formData.description, sender: 'user' };
        setMessages([...messages, sentMessage]);
        setInput('');

        setMessages([
          ...messages,
          { text: serverResponse.message, sender: 'agent' },
        ]);
      } else {
        setMessages([
          ...messages,
          { text: serverResponse.message, sender: 'agent' },
        ]);
      }
    } else {
      // Adicione tratamento para os campos do formulário obrigatórios
      console.log('Preencha todos os campos obrigatórios.');
    }
  };

  return (
    <div className="chat-window">
      <div className="search-input">
        <input
          type="text"
          placeholder="Pesquisar..."
          value={input}
          onChange={handleInputChange}
        />
      </div>
      <div className="message-container">
        {filteredMessages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === 'user' ? 'user' : 'agent'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleFormChange}
          placeholder="Seu nome"
        />
        {/* Adicione os outros campos do formulário */}
        {/* ... */}
        <button onClick={handleSendMessage}>Enviar</button>
      </div>
    </div>
  );
}

export default LiveChat;

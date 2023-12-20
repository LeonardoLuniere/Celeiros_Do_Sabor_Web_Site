import React, { useState, useEffect } from 'react';
import './LiveChat.css';

function LiveChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [filteredMessages, setFilteredMessages] = useState([]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    // Filtro das mensagens com base na entrada de pesquisa
    const filtered = messages.filter(message =>
      message.text.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredMessages(filtered);
  }, [input, messages]);

  const sendMessageToEmailServer = async (message) => {
    try {
      // Simulação do envio da mensagem para o servidor de e-mail
      const response = await fetch('https://myfakeserver.com/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message, recipient: 'caocalpapeis@gmail.com' }),
      });

      // Se a resposta for bem-sucedida (simulação de status 200)
      if (response.status === 200) {
        // Simulação de resposta do servidor de e-mail
        return { success: true, message: 'Mensagem enviada com sucesso!' };
      } else {
        return { success: false, message: 'Falha ao enviar a mensagem.' };
      }
    } catch (error) {
      console.error('Erro ao enviar a mensagem:', error);
      return { success: false, message: 'Erro ao enviar a mensagem.' };
    }
  };

  const handleSendMessage = async () => {
    if (input.trim() !== '') {
      const sentMessage = { text: input, sender: 'user' };
      setMessages([...messages, sentMessage]);
      setInput('');

      // Simulação do envio da mensagem para o servidor de e-mail
      const serverResponse = await sendMessageToEmailServer(input);

      // Se a resposta do servidor de e-mail for bem-sucedida, adicionamos uma mensagem de confirmação ao chat
      if (serverResponse.success) {
        setMessages([
          ...messages,
          { text: serverResponse.message, sender: 'agent' },
        ]);
      } else {
        // Se houver falha no envio da mensagem para o servidor, exibimos uma mensagem de erro no chat
        setMessages([
          ...messages,
          { text: serverResponse.message, sender: 'agent' },
        ]);
      }
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
          value={input}
          onChange={handleInputChange}
          placeholder="Digite sua mensagem..."
        />
        <button onClick={handleSendMessage}>Enviar</button>
      </div>
    </div>
  );
}

export default LiveChat;

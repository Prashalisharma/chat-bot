import { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    const botResponse = getBotResponse(input);

    setMessages([...messages, userMessage, botResponse]);
    setInput('');
  };

  const getBotResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase();

    
    if (lowerInput.includes('hello')) {
      return { sender: 'bot', text: 'Hello! How can I help you today?' };
    } else if (lowerInput.includes('help')) {
      return { sender: 'bot', text: 'Sure, I am here to help! What do you need assistance with?' };
    } else {
      return { sender: 'bot', text: 'Sorry, I did not understand that.' };
    }
  };

  return (
    <div style={styles.chatbot}>
      <div style={styles.chatWindow}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              ...styles.message,
              alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
              backgroundColor: msg.sender === 'user' ? '#daf7a6' : '#ffcccb',
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div style={styles.inputArea}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleSend} style={styles.button}>
          Send
        </button>
      </div>
    </div>
  );
};

const styles = {
  chatbot: { width: '300px', margin: '0 auto', fontFamily: 'Arial, sans-serif' },
  chatWindow: { height: '400px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px', marginBottom: '10px' },
  message: { padding: '10px', borderRadius: '5px', marginBottom: '5px' },
  inputArea: { display: 'flex' },
  input: { flex: 1, padding: '10px', border: '1px solid #ccc', borderRadius: '5px' },
  button: { marginLeft: '5px', padding: '10px', border: 'none', backgroundColor: '#007BFF', color: 'white', borderRadius: '5px', cursor: 'pointer' },
};

export default Chatbot;
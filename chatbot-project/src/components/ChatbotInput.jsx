import { useState } from 'react';
import loadingSpinnerImage from '../assets/loading-spinner.gif';
import  sendChatMessage  from '../services/chatbotService';
import './ChatbotInput.css';

export function ChatbotInput({ chatMessages, setChatMessages }) {
  let [inputText, setInputText] = useState('');
  let [isLoading, setIsLoading] = useState(false);

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    if (isLoading || inputText === '') {
      return;
    }

    setIsLoading(true);
    setInputText('');

    let newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
      }
    ];

    setChatMessages([
      ...newChatMessages,
      {
        message: <img className="loading-image" src={loadingSpinnerImage} />,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ]);

    try {
      const result = await sendChatMessage(inputText);
      setChatMessages([
        ...newChatMessages,
        {
          message: result,
          sender: 'robot',
          id: crypto.randomUUID()
        }
      ]);
    } catch (error) {
      setChatMessages([
        ...newChatMessages,
        {
          message: error.message || 'Sorry, the chatbot is unavailable right now.',
          sender: 'robot',
          id: crypto.randomUUID()
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function sendMess(event) {
    if (event.key === 'Enter') {
      sendMessage();
    }
    if (event.key === 'Escape') {
      setInputText('');
    }
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onKeyDown={sendMess}
        className="chat-input"
        onChange={saveInputText}
        value={inputText}
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  );
}
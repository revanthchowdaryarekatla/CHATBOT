import { useRef,useEffect } from 'react';
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css';
function useAutoScroll(dependencies){
  let containerRef=useRef(null);
  useEffect(()=>{
    let containerElem=containerRef.current;
    if(containerElem){
      containerElem.scrollTop=containerElem.scrollHeight;
    }
  },[dependencies]);
  return containerRef;
}
function ChatMessages({chatMessages}){
  //let [chatMessages,setChatMessages]=array;
  //let chatMessages=array[0];
  //let setChatMessages=array[1];
  let chatMessagesRef=useAutoScroll([chatMessages]);
  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage)=>{
          return (
            <ChatMessage message={chatMessage.message} sender={chatMessage.sender}
            key={chatMessage.id} />
          );
        })}
    </div>
  );
}
export default ChatMessages;
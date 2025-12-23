import chatbotRobotImage from '../assets/robot.png';
import chatbotUserImage from '../assets/user.png';
import './ChatMessage.css';
export function ChatMessage({message,sender}){
  //let message=props.message;
  //let sender=props.sender;
  //let {message,sender}=props;
  return (
    <div className={sender}>
      {sender==='robot'&&(
        <img src={chatbotRobotImage} className="chat-message-profile" />
      )}
      <div className="chat-message-text">
        {message}  
      </div>
      {sender=='user'&&(
        <img src={chatbotUserImage} className="chat-message-profile" />
      )}
    </div>
  );
}
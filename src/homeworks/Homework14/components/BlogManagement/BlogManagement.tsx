import { createContext, useState } from 'react';
import { BlogManagementComponent, TextArea } from './styles';
import Button from 'components/Button/Button';
import { MessageType } from './types';
import Card from '../Card/Card'

export const MessageContext = createContext({
  userInput: '',
});

function BlogManagement() {
  const [message, setMessage] = useState<MessageType>({
    userInput: '',
  });
  
  const [postedMessage, setPostedMessage] = useState<MessageType>({
    userInput: '',
  });
  
  const handlePost = () => {
    setPostedMessage(message);
    setMessage({ userInput: '' })
    isVisible()
  };

  function isVisible() {
  return (message.userInput.length > 0 ? 'true':'false')
}

  return (
    <MessageContext.Provider value={postedMessage}>
      <BlogManagementComponent>
        <TextArea
          onChange={event => setMessage({ userInput: event.target.value })}
          value={message.userInput}
        />
        <Button
          name="Post"
          onButtonClick={handlePost}
        />        
      </BlogManagementComponent>
      {postedMessage.userInput && <Card />}
    </MessageContext.Provider>
  );
}

export default BlogManagement


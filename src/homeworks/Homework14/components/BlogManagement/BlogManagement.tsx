import { createContext, useState } from 'react';
import { BlogManagementComponent, TextArea } from './styles';
import Button from 'components/Button/Button';
import { MessageType } from './types';

export const MessageContext = createContext({
  userInput: '',
});

function BlogManagement() {
  const [message, setMessage] = useState({
    userInput: '',
  });
  
  const [postedMessage, setPostedMessage] = useState<MessageType>({
    userInput: '',
  });
  
  const handlePost = () => {
    setPostedMessage(message);
  };
  console.log('message.userInput', message.userInput)
  console.log('postedMessage.userInput',postedMessage.userInput)
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
    </MessageContext.Provider>
  );
}

export default BlogManagement;
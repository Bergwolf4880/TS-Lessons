import { createContext, useState } from 'react';
import { BlogManagementComponent, TextArea } from './styles';
import Button from 'components/Button/Button';
import { MessageType } from './types';
import Card from '../Card/Card';

export const MessageContext = createContext({
  userInput: '',
  onChange: () => {},
  setMessage: () => {},
} as MessageType);

function BlogManagement() {
  const [message, setMessage] = useState<string>('');

  const [postedMessage, setPostedMessage] = useState<string>('');

  const handlePost = () => {
    setPostedMessage(message);
    setMessage('')
  };

  return (
    <MessageContext.Provider
      value={{
        userInput: postedMessage,
        onChange: setPostedMessage,
        
      }}
    >
      <BlogManagementComponent>
        <TextArea
          onChange={event => setMessage(event.target.value)}
          value={message}
        />
        <Button name="Post" onButtonClick={handlePost} />
      </BlogManagementComponent>
      {postedMessage && <Card />}
    </MessageContext.Provider>
  );
}

export default BlogManagement;

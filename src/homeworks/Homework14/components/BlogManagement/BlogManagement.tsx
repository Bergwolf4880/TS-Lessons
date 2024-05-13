import { createContext, useMemo, useState } from 'react';
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
  };

  const contextValue = useMemo(
    () => ({
      userInput: postedMessage,
      onChange: setPostedMessage,
      setMessage: setMessage,
    }),
    [postedMessage, setMessage],
  );

  return (
    <MessageContext.Provider value={contextValue}>
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

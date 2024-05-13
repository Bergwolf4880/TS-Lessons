import { useContext } from 'react';
import { DataItem, DelButton, MessageContainer } from './styles';
import { MessageContext } from '../BlogManagement/BlogManagement';

function Message() {
  const { userInput, onChange, setMessage} = useContext(MessageContext);

  function deletePost() {
    onChange('');
    setMessage('')
  }

  return (
    <MessageContainer>
      <DataItem>{userInput}</DataItem>
      <DelButton onClick={deletePost}>X</DelButton>
    </MessageContainer>
  );
}

export default Message;


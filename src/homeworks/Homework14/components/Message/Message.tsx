import { useContext } from 'react';
import { DataItem, DelButton, MessageContainer } from './styles';
import { MessageContext } from '../BlogManagement/BlogManagement';

function Message() {
  const { userInput, onChange} = useContext(MessageContext);

  function deletePost() {
    onChange('');
  }

  return (
    <MessageContainer>
      <DataItem>{userInput}</DataItem>
      <DelButton onClick={() => {}}>X</DelButton>
    </MessageContainer>
  );
}

export default Message;

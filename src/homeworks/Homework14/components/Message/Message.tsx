import { useContext } from 'react';
import { DataItem, MessageContainer } from './styles';
import { MessageContext } from '../BlogManagement/BlogManagement';

function Message() {
  const postedMessage = useContext(MessageContext);
   return (
    <MessageContainer>
      <DataItem>{postedMessage.userInput}</DataItem>
    </MessageContainer>
  );
}

export default Message;


import Message from '../Message/Message'
import { CardWrapper, NameContainer } from './styles'

function Card() {

    return (
        <CardWrapper>
            <NameContainer>
                John Doe says: 
            </NameContainer>
        <Message />
        </CardWrapper>
    )
}

export default Card

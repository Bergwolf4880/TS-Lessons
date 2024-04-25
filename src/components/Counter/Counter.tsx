import { CounterWrapper, ButtonControl, CounterValue } from './styles';
import Button from 'components/Button/Button';
import { CounterProps } from "./types";

function Counter({ countValue, onMinusClick, onPlusClick }: CounterProps) {
    return (
        <CounterWrapper>
            <ButtonControl>
                <Button onButtonClick={onMinusClick} name='-' />
            </ButtonControl>
            <CounterValue>{countValue}</CounterValue>
            <ButtonControl>
                <Button onButtonClick={onPlusClick} name='+' />
            </ButtonControl>
        </CounterWrapper>
    )
}

export default Counter;
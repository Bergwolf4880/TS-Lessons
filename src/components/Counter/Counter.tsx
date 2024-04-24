import "./styles.css"
import { CounterProps } from "./types";
import Button from "components/Button/Button"


function Counter({ countValue, onMinusClick, onPlusClick }: CounterProps) {

    return (
        <div className="counter-wrapper">

            <div className="button-control">
                <Button onButtonClick={onMinusClick} name='-' />
            </div>
            <p>{countValue}</p>
            <div className="button-control">
                <Button onButtonClick={onPlusClick} name='+' />
            </div>

        </div>
    )
}
export default Counter;
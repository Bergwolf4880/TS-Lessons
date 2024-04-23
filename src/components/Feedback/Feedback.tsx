import { useState } from "react";

import "./styles.css";
import Button from "../Button/Button";

function Feedback() {

    const [like, setLike] = useState<number>(0);
    const [dislike, setDislike] = useState<number>(0);

    const onLike = () => {
        setLike((prevValue) => prevValue + 1);
    }
    const onDislike = () => {
        setDislike((prevValue) => prevValue + 1);
    }
    const resetResult = () => {
        setLike(0);
        setDislike(0);
    }

    return (
        <div className="feedback-wrapper">
            <div className ="feedback-result-container">
                <div className="like-block">
                    <p>{like}</p>
                    <Button name="like" onButtonClick={onLike} />
                </div>
                <div className="dislike-block">
                    <p>{dislike}</p>
                    <Button name="dislike" onButtonClick={onDislike} />
                </div>
            </div>
                <Button name="reset" onButtonClick={resetResult} />            
        </div>


    )
}

export default Feedback;
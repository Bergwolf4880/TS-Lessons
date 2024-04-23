import "./styles.css";
import { AnimalData } from "./types";

function AnimalCard({ name, species, image }: AnimalData) {

    return (
        <div className='animal-card-wrapper'>
            <h2>{name}</h2>
            <p>{species}</p>
            <img src={image} alt="" />
            </div>
    )
}

export default AnimalCard;
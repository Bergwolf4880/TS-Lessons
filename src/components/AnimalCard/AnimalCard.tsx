import { AnimalCardProps } from './types';
import {
  AnimalCardWrapper,
  AnimalImage,
  CardTitle,
  CardParagraph,
} from './styles';

function AnimalCard({ animalData }: AnimalCardProps) {
  return (
    <AnimalCardWrapper className="animal-card-wrapper">
      <CardTitle>{animalData.name}</CardTitle>
      <CardParagraph>{animalData.species}</CardParagraph>
      <AnimalImage src={animalData.image} />
    </AnimalCardWrapper>
  );
}

export default AnimalCard;

import { CardContainer, CardImg } from "./Card.Styles";

function Card({ id, img, name }) {
  return (
    <CardContainer to={""}>
      <CardImg src={img} alt={name} />
    </CardContainer>
  );
}

export default Card;

import { useCart } from "../../Providers/cart";
import { ButtonAdd } from "../Button";
import { Card } from "./styles";

interface CardCartProps {
  name: string;
  image: string;
  price: number;
  id: number;
}

const CardCart = ({ name, image, price, id }: CardCartProps) => {
  const { removeFromCart } = useCart();
  return (
    <Card>
      <img src={image} alt={name} />
      <p>{name}</p>
      <p> {price} </p>
      <ButtonAdd onClick={() => removeFromCart(id)}>X</ButtonAdd>
    </Card>
  );
};

export default CardCart;
